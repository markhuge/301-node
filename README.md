# 301
A super simple HTTP redirection server

## Install

`npm install -g 301`

## Usage 

`user@host:$ 301 --port 8080 --domain myshiz.biz `

### Optional Arguments

- port - port service will listen on (default 8080)
- domain - domain requests will redirect to (default 127.0.0.1)
- proto - protocol HTTP or HTTPS (default HTTP)
- health - optional port on which to listen for a health check (default is disabled). Handy for load balancers that will only accept a "200" response to keep 301 instance(s) in load.
