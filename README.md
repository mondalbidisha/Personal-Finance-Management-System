# Personal-Finance-Management-System (PFMS)

<p align="center">
  PFMS is an open-source expense tracker application to effortlessly track and manage your expenses.
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#implementation"><strong>Implementation</strong></a> ·
  <a href="#routes"><strong>App Routes</strong></a> ·
</p>
<br/>

## Introduction

Personal Finance Management System (PFMS) is an open-source application to effortlessly track and manage your incomes, expenses, investments, and subscriptions.

## Tech Stack

- [Next.js](https://nextjs.org/) – framework
- [Components](https://ui.shadcn.com/) – ui-components
- [Tailwind](https://tailwindcss.com/) – CSS
- [Supabase](https://supabase.com/) – database
- [Vercel](https://vercel.com/) – hosting
- [Resend](https://resend.com/) – emails

## Implementation

- PFMS is built using [NextJs](https://nextjs.org) from scratch.
- [Postgresql](https://www.postgresql.org/) is used as the ORM for easily communicating with the database for storing user, subscription data, etc. You can refer to the Prisma schema [here](/prisma/schema.prisma).
- [Supabase](https://supabase.com/) is an open-source Firebase alternative, the data is stored in the Postgres database (private data are encrypted) and uses a magic link for authentication provided by supabase.
- [LemonSqueezy](https://lemonsqueezy.com/) is used as the payment system. Its implementation is super simple.

## Routes

| Path      | Local                     |
| --------- | ----------------------    | 
| Home      | /                         |                    
| Signup    | app.localhost:3000/signup |  
| Signin    | app.localhost:3000/signin |  
| Dashboard | app.localhost:3000        |         
