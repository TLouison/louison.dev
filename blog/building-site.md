# Building This Site

## Motivations

I wanted to create this site in order to fully understand the process of creating a website from registering a domain and configuring DNS, spinning up a reverse proxy, creating a web app, and integrating it all with a custom CI/CD auto-deployment pipeline. This post is to chronicle the issues I ran into along the way, and how I solved them.

## Getting a domain

Before I even came up with my plan to create this website, I still wanted to get a domain that seemed appropriate for a portfolio-style website, so I figured `louison.dev` was a good candidate. I found it was available, and ended up purchasing it through (NameCheap)[namecheap.com].

Once I was the proud owner of my last name, I had to decide how I was going to use this domain for a website. My initial thought was to use a web-builder app like SquareSpace or Wix, but I decided against them and chose the path of most-resistance by configuring and building everything myself, hoping to get some valuable experience along the way. That led me to...

## AWS Configuration

I've played around with AWS quite a few times in the past, although my experience was very shallow and not particularly broad. I was mainly familiar with Cognito, having integrated it into a site I previously worked on. We did, however, also use an EC2 instance to host the site, and I figured that was a fair solution for me as well. I spun up the instance and everything was good to go (with the exception of me choosing Amazon Linux, which was a mistake. I eventually tore that VM down and switched to Ubuntu Server 22.02).

### EC2 Elastic IP

The first thing I've hit that I had never touched before in AWS, Elastic IPs were a very simple concept. I created an Elastic IP for my AWS instance, and was done in a few button clicks.

### Route 53

This was where the more challenging part of configuring my AWS solution started. I had heard of Route 53 in the past, and knew it was related to DNS, but I didn' understand how it worked. I ended up following this guide from (techgenix)[https://techgenix.com/namecheap-aws-ec2-linux/] which spelled things out pretty clearly, but overall the steps I took were:

1. Set up the Elastic IP as mentioned before
2. Create a Public Hosted Zone in Route 53
3. Created 2 new _Type A_ records using Simple Routing. One for `louison.dev` and one for `www.louison.dev`.
4. Finally, I took the 4 domains found next to the _Type NS_ and added them to my management portal in NameCheap, specifying them as custom nameservers (making sure to remove the `.` from the end that AWS adds, for a reason I'm unaware of).

### Nginx

Once that was all set up, my routing using DNS was complete, but there was nothing in my site to get when attempting to visit it! So I figured, at least for now, I would manually set up `nginx` to serve some sort of static content. Simply enough, I ssh'd into my EC2 instance, and ran `sudo apt install nginx`. Once the install was complete, `nginx` started running automatically and served the default "Thanks for install nginx" page.

Once I did that, I had to do some googling on how to change this page, since for the time being I didn't want to have the default `nginx` page up. I found that the default page is saved in `/var/www/html`, so I added my own `index.html` with a classic "This page is under construction" message.

### SSL Certificate

Part of getting a `.dev` domain is that you are actually **required** to use HTTPS for security. I wasn't sure exactly how to go about this, but I wanted to see if there were any free options before I shelled out $6 a year to NameCheap to get one from them. I came across LetsEncrypt, a company I had heard of before, who were offering free SSL certificates. I was able to use them, using their Certbot package, to create and apply an SSL certificate to my Nginx instance, and finally I could see my site running!

### Node.js

Next thing I wanted to do was configure Nginx as a reverse proxy so I could use a different tool to actually build out the content (maybe WordPress for the blog, Node.js for web apps?). I was able to follow some useful tutorials that showed me how to configure this pretty simply. The main challenge I ran into was that I needed to specifically note that the nginx server listening on port 443 has the SSL credentials that were created when I got my SSL certificate.
https://www.sitepoint.com/configuring-nginx-ssl-node-js/
https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04

### WordPress

I wanted to create a blog-style section of the website (the one you're reading this on now!). I had a few ideas of how to do this, but they all ended up being a lot of work to end up with a worse-than-standard CMS, so I decided to go with the obvious big player and use WordPress for the blog content.

ssh -i ~/.ssh/aws.pem ubuntu@ec2-34-194-214-164.compute-1.amazonaws.com
