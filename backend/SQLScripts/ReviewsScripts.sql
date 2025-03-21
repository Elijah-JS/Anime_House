USE [AnimeHouseTut]
GO
/****** Object:  Table [dbo].[dbo.Reviews]    Script Date: 3/13/2025 9:37:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[dbo.Reviews](
	[ReviewID] [int] NOT NULL,
	[UserID] [nvarchar](3) NOT NULL,
	[AnimeID] [int] NULL,
	[ReviewText] [nvarchar](255) NULL,
	[Rating] [decimal](3, 1) NULL,
	[ReviewDate] [date] NULL
) ON [PRIMARY]
GO
