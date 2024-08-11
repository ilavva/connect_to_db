CREATE TABLE [dbo].[lang] (
    [langCode] CHAR (2)      NOT NULL,
    [langName] NVARCHAR (15) NOT NULL,
    [langDir]  CHAR (3)      CONSTRAINT [DEFAULT_lang_langDir] DEFAULT 'ltr' NOT NULL,
    CONSTRAINT [PK_lang] PRIMARY KEY CLUSTERED ([langCode] ASC)
);

INSERT INTO lang(langCode, langName, langDir) VALUES
    ('he', 'עברית', 'rtl'), 
    ('en', 'English', 'ltr'), 
    ('ru', '???????', 'ltr'),
    ('ar', '???????', 'rtl') ;

SELECT * FROM lang;