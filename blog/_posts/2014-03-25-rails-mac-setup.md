---
layout: post
title:  "Mac Rails Setup"
date:   2014-03-24 20:55:33
categories: none
short: "Install XCode - Latest version from app store. Install XCode..."
---

# How to Create a Rails Postgres Server On Your Mac

Install XCode - Latest version from app store

Install XCode Command Line Tools

    xcode-select --install

Install Homebrew

    ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

Install RVM

    \curl -sSL https://get.rvm.io | bash

Install postgres

    brew install postgres

Run whatever commands postgres says so that it'll run at startup and launch in current session

Text that postgres works

    psql postgres
If you see "postgres=#" then you're good, if not, you've upset the gods

    CREATE ROLE name WITH SUPERUSER IDENTIFIED BY "password";
    \q

Install the version of Ruby you need
rvm install (RUBY_V)

    rvm install 2.0.0

Use ruby version

    rvm use 2.0

    cd ~/path/to/rails/project

Install Gems

    bundle

edit config/database.yml to fit correct database information
    
    development:
      database: db_name
      username: db_username
      password: db_pass
      host: localhost
      pool: 5
      encoding: unicode
      adapter: postgresql

Start Rails Server

    rails s