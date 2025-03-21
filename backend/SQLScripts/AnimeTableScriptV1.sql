USE [AnimeHouse]
GO
/****** Object:  Table [dbo].[Anime]    Script Date: 3/18/2025 10:12:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Anime](
	[AnimeID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](255) NOT NULL,
	[Description] [text] NOT NULL,
	[ReleaseDate] [date] NOT NULL,
	[PhotoUrl] [varchar](500) NULL,
	[Episodes] [int] NULL,
	[AverageRating] [decimal](3, 1) NULL,
PRIMARY KEY CLUSTERED 
(
	[AnimeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Anime] ADD  DEFAULT ('https://example.com/default_image.jpg') FOR [PhotoUrl]
GO
ALTER TABLE [dbo].[Anime] ADD  DEFAULT ((4.3)) FOR [AverageRating]
GO
ALTER TABLE [dbo].[Anime]  WITH CHECK ADD CHECK  (([AverageRating]>=(0) AND [AverageRating]<=(5)))
GO
