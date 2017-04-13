# PRKit

## Develop

PRKIT's front-end was built with [Jekyll](http://jekyllrb.com/) version 3.3.1, and very loosely based on the Hydra template.

Install the dependencies with [Bundler](http://bundler.io/):

~~~bash
$ bundle install
~~~

Run `jekyll` commands through Bundler to ensure you're using the right versions:

~~~bash
$ bundle exec jekyll serve
~~~

The backend Amazon S3 storage servers where site assets are hosted, via a Cloudfront distribution and Amazon DNS nameservers provided by the Route 53 service. All certificates are provided by Amazon Certificate Manager.
