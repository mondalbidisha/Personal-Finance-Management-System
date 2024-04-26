# Personal-Finance-Management-System (PFMS)

<p align="center">
  PFMS is an expense tracker application to effortlessly track and manage your expenses.
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#implementation"><strong>Implementation</strong></a> ·
  <a href="#routes"><strong>App Routes</strong></a> ·
</p>
<br/>

## Introduction

Personal Finance Management System (PFMS) is an application to effortlessly track and manage your incomes, expenses, investments, budgets and subscriptions.

## Tech Stack

- [Next.js](https://nextjs.org/) – Full-Stack MVC framework
- [Components](https://ui.shadcn.com/) – External Library for ui-components
- [Tailwind](https://tailwindcss.com/) – CSS library
- [Supabase](https://supabase.com/) – ORM/Database
- [Vercel](https://vercel.com/) – Application Hosting
- [Resend](https://resend.com/) – Email Marketing Service

## Implementation

- PFMS is developed from the ground up using [NextJs](https://nextjs.org).
- For database interactions, such as storing user and subscription data, [Postgresql](https://www.postgresql.org/) serves as the ORM. The Prisma schema can be accessed [here](/prisma/schema.prisma).
- [Supabase](https://supabase.com/) a free alternative to Firebase, stores data in a Postgres database, encrypts private data, and provides authentication via a magic link.
- For handling payments, [LemonSqueezy](https://lemonsqueezy.com/) is utilized for its straightforward implementation.

## Routes

| Path      | Route URL                 |
| --------- | ----------------------    | 
| Home      | /                         |                    
| Signup    | app.localhost:3000/signup |  
| Signin    | app.localhost:3000/signin |  
| Dashboard | app.localhost:3000        |         
