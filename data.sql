-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES (4, 4, 5, 'Doing Great!');
-- GET all responses
SELECT * FROM feedback ORDER BY id DESC;
-- DELETE by id
DELETE FROM feedback WHERE id=6;
-- PUT toggle flagged boolean
UPDATE feedback SET flagged = NOT flagged WHERE id=7