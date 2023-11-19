#!/usr/bin/env bash

sudo chown node:node backend/node_modules storefront/node_modules

cd backend && yarn install && cd ../storefront && yarn install