#!/usr/bin/env bash
composer install &&
[ -f .env ] || cp .env.example .env &&
php artisan key:generate &&
chmod -R 777 storage &&
chmod -R 777 bootstrap/cache &&
npm install &&
npm run prod
