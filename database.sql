
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "email_address" VARCHAR (150) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "address"
(
    "id" SERIAL PRIMARY KEY,
    "address_1" varchar(255) NOT NULL,
    "address_2" varchar(255) NOT NULL,
    "city" varchar(255) NOT NULL,
    "state" varchar(255) NOT NULL,
    "zip_code" INTEGER NOT NULL,
    "country" varchar(255) NOT NULL,
    "user_id" INT REFERENCES "user"
);

CREATE TABLE "rvs"
(
    "id" SERIAL PRIMARY KEY,
    "rv_name" varchar(255) NOT NULL UNIQUE,
    "rv_description" varchar(1000) NOT NULL
);


CREATE TABLE "reservation"
(
    "id" SERIAL PRIMARY KEY,
    "pick_up_date" DATE NOT NULL,
    "drop_off_date" DATE NOT NULL,
    "rv_id" integer NOT NULL REFERENCES "rvs",
    "user_id" integer NOT NULL REFERENCES "user"
);

SELECT "reservation".pick_up_date, "reservation".drop_off_date, "reservation".total_price
FROM "reservation"
    JOIN "user" ON "user".id = "reservation".user_id;

SELECT "person".name, "hobby".description, "person_hobby".skill
FROM "person"
    JOIN "person_hobby" ON "person".id = "person_hobby".person_id

    SELECT "person".name, "hobby".description, "person_hobby".skill
FROM "person"
    JOIN "person_hobby" ON "person".id = "person_hobby".person_id
    JOIN "hobby" ON "hobby".id = "person_hobby".hobby_id;

    UPDATE "treats" SET "description" = 'donuts are not good'
                 WHERE "id" = 2;