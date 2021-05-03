FROM ruby:3.0.1

WORKDIR /app
COPY rails/Gemfile /app/Gemfile
COPY rails/Gemfile.lock /app
COPY rails/ /app

# webpackを使用する上でyarnをインストールする必要がある
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn

RUN apt-get update -qq && apt-get install -y build-essential nodejs libpq-dev postgresql-client
RUN gem install bundler
RUN bundle install
