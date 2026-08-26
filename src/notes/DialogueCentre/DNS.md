#dialogue-centre #tech-problems 
For when those fucking retards at [WebHouse](https://www.webhouse.sk/sk/uvod/)break our DNS records again inevitably:

> [Add these DNS records](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#dns-records-for-your-custom-domain)

> [Here](https://setup.sk/domain-dns)

If the link ever breaks, basically just do this:
1. Create 8 new records, 4 for IPv4 (A name) and 4 for IPv6 (AAAA name)
	1. ![[Pasted image 20250514170127.png]]
2. Create a CNAME records pointing to ***dialogue-center.github.io***
