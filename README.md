---
title: Directus
description: A one-click-install Directus instance using MySQL. Always install lastest version know of Directus.
tags:
  - javascript
  - directus
  - cms
  - mysql
  - redis
---

# Directus railway template

This example runs a [Directus](https://directus.io/) instance with minimal config using MySQL.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/pn_H14?referralCode=frnWSQ)

## ✨ Features

- Directus
- MySQL
- Redis
- Javascript

## 💁‍♀️ How to use

- Add the .env vars on template (you can add more vars when the app is deployed).
- Let railway deploy your service, grab the generated domain from the service settings.
- Login in the panel using the defined ADMIN_EMAIL and ADMIN_PASSWORD used in .env vars

## 📝 Notes

- This is a minimal one-click-deploy solution to Directus, see [Directus docs](https://docs.directus.io/getting-started/introduction.html) to config it to your needs.

- Re deploys won't erase your db data since according to Directus docs `Directus will use an existing .env file (or existing environment variables) to either install the database (if it's empty) or migrate it to the latest version (if it already exists and has missing migrations).` but be careful!

## MySQL 8 workaround

`ALTER USER 'root'@'%' IDENTIFIED WITH 'mysql_native_password' BY 'mySQL_root_password';
FLUSH PRIVILEGES;`
