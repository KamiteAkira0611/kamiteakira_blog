FROM ruby:3.0.1

WORKDIR /app
COPY rails/Gemfile /app/Gemfile
COPY rails/Gemfile.lock /app
COPY rails/ /app

RUN apt-get update -qq && apt-get install -y build-essential nodejs libpq-dev postgresql-client
RUN gem install bundler
RUN bundle install
