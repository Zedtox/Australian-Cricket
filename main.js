const D_WINRATE = [
  {
    "decade": "1880s",
    "format": "Test",
    "matches": 20,
    "wins": 9,
    "win_rate": 45.0
  },
  {
    "decade": "1890s",
    "format": "Test",
    "matches": 55,
    "wins": 18,
    "win_rate": 32.7
  },
  {
    "decade": "1900s",
    "format": "Test",
    "matches": 30,
    "wins": 16,
    "win_rate": 53.3
  },
  {
    "decade": "1910s",
    "format": "Test",
    "matches": 28,
    "wins": 17,
    "win_rate": 60.7
  },
  {
    "decade": "1920s",
    "format": "Test",
    "matches": 36,
    "wins": 21,
    "win_rate": 58.3
  },
  {
    "decade": "1930s",
    "format": "Test",
    "matches": 31,
    "wins": 18,
    "win_rate": 58.1
  },
  {
    "decade": "1940s",
    "format": "Test",
    "matches": 8,
    "wins": 5,
    "win_rate": 62.5
  },
  {
    "decade": "1950s",
    "format": "Test",
    "matches": 60,
    "wins": 25,
    "win_rate": 41.7
  },
  {
    "decade": "1960s",
    "format": "Test",
    "matches": 64,
    "wins": 22,
    "win_rate": 34.4
  },
  {
    "decade": "1970s",
    "format": "Test",
    "matches": 75,
    "wins": 27,
    "win_rate": 36.0
  },
  {
    "decade": "1980s",
    "format": "Test",
    "matches": 84,
    "wins": 38,
    "win_rate": 45.2
  },
  {
    "decade": "1990s",
    "format": "Test",
    "matches": 101,
    "wins": 56,
    "win_rate": 55.4
  },
  {
    "decade": "2000s",
    "format": "Test",
    "matches": 103,
    "wins": 62,
    "win_rate": 60.2
  },
  {
    "decade": "2010s",
    "format": "Test",
    "matches": 104,
    "wins": 54,
    "win_rate": 51.9
  },
  {
    "decade": "2020s",
    "format": "Test",
    "matches": 48,
    "wins": 27,
    "win_rate": 56.3
  },
  {
    "decade": "1970s",
    "format": "ODI",
    "matches": 22,
    "wins": 13,
    "win_rate": 59.1
  },
  {
    "decade": "1980s",
    "format": "ODI",
    "matches": 120,
    "wins": 65,
    "win_rate": 54.2
  },
  {
    "decade": "1990s",
    "format": "ODI",
    "matches": 258,
    "wins": 161,
    "win_rate": 62.4
  },
  {
    "decade": "2000s",
    "format": "ODI",
    "matches": 270,
    "wins": 171,
    "win_rate": 63.3
  },
  {
    "decade": "2010s",
    "format": "ODI",
    "matches": 252,
    "wins": 147,
    "win_rate": 58.3
  },
  {
    "decade": "2020s",
    "format": "ODI",
    "matches": 62,
    "wins": 34,
    "win_rate": 54.8
  },
  {
    "decade": "2006s",
    "format": "T20I",
    "matches": 12,
    "wins": 7,
    "win_rate": 58.3
  },
  {
    "decade": "2010s",
    "format": "T20I",
    "matches": 98,
    "wins": 55,
    "win_rate": 56.1
  },
  {
    "decade": "2020s",
    "format": "T20I",
    "matches": 89,
    "wins": 51,
    "win_rate": 57.3
  }
];
const D_RANKING = [
  { "year": 2003, "rank": 1, "rating": 141, "captain": "Steve Waugh" },
  { "year": 2004, "rank": 1, "rating": 138, "captain": "Ricky Ponting" },
  { "year": 2005, "rank": 1, "rating": 130, "captain": "Ricky Ponting" },
  { "year": 2006, "rank": 2, "rating": 121, "captain": "Ricky Ponting" },
  { "year": 2007, "rank": 1, "rating": 135, "captain": "Ricky Ponting" },
  { "year": 2008, "rank": 2, "rating": 118, "captain": "Ricky Ponting" },
  { "year": 2009, "rank": 2, "rating": 108, "captain": "Ricky Ponting" },
  { "year": 2010, "rank": 3, "rating": 98, "captain": "Ricky Ponting" },
  { "year": 2011, "rank": 4, "rating": 92, "captain": "Michael Clarke" },
  { "year": 2012, "rank": 2, "rating": 111, "captain": "Michael Clarke" },
  { "year": 2013, "rank": 1, "rating": 125, "captain": "Michael Clarke" },
  { "year": 2014, "rank": 2, "rating": 112, "captain": "Michael Clarke" },
  { "year": 2015, "rank": 2, "rating": 108, "captain": "Michael Clarke" },
  { "year": 2016, "rank": 3, "rating": 99, "captain": "Steve Smith" },
  { "year": 2017, "rank": 1, "rating": 119, "captain": "Steve Smith" },
  { "year": 2018, "rank": 5, "rating": 87, "captain": "Tim Paine" },
  { "year": 2019, "rank": 5, "rating": 90, "captain": "Tim Paine" },
  { "year": 2020, "rank": 3, "rating": 102, "captain": "Tim Paine" },
  { "year": 2021, "rank": 1, "rating": 116, "captain": "Pat Cummins" },
  { "year": 2022, "rank": 1, "rating": 122, "captain": "Pat Cummins" },
  { "year": 2023, "rank": 2, "rating": 109, "captain": "Pat Cummins" },
  { "year": 2024, "rank": 1, "rating": 118, "captain": "Pat Cummins" }
];
const D_ASHES = [
  {
    "year": 1882,
    "series": 1882,
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 0,
    "draws": 0,
    "winner": "Australia",
    "margin_label": "AUS win The Ashes"
  },
  {
    "year": 1882,
    "series": "1882-83",
    "location": "Australia",
    "aus_wins": 2,
    "eng_wins": 2,
    "draws": 0,
    "winner": "Draw",
    "margin_label": "Series drawn"
  },
  {
    "year": 1884,
    "series": 1884,
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 1,
    "draws": 2,
    "winner": "England",
    "margin_label": "ENG retain"
  },
  {
    "year": 1884,
    "series": "1884-85",
    "location": "Australia",
    "aus_wins": 3,
    "eng_wins": 2,
    "draws": 0,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1886,
    "series": 1886,
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 3,
    "draws": 0,
    "winner": "England",
    "margin_label": "ENG whitewash"
  },
  {
    "year": 1886,
    "series": "1886-87",
    "location": "Australia",
    "aus_wins": 2,
    "eng_wins": 0,
    "draws": 0,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1888,
    "series": 1888,
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 2,
    "draws": 0,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 1890,
    "series": 1890,
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 2,
    "draws": 0,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 1891,
    "series": "1891-92",
    "location": "Australia",
    "aus_wins": 2,
    "eng_wins": 1,
    "draws": 0,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1893,
    "series": 1893,
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 1,
    "draws": 2,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 1894,
    "series": "1894-95",
    "location": "Australia",
    "aus_wins": 3,
    "eng_wins": 2,
    "draws": 0,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1896,
    "series": 1896,
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 2,
    "draws": 0,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 1897,
    "series": "1897-98",
    "location": "Australia",
    "aus_wins": 4,
    "eng_wins": 1,
    "draws": 0,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1899,
    "series": 1899,
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 1,
    "draws": 4,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 1901,
    "series": "1901-02",
    "location": "Australia",
    "aus_wins": 4,
    "eng_wins": 1,
    "draws": 0,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1902,
    "series": 1902,
    "location": "England",
    "aus_wins": 2,
    "eng_wins": 1,
    "draws": 2,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1903,
    "series": "1903-04",
    "location": "Australia",
    "aus_wins": 2,
    "eng_wins": 3,
    "draws": 0,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 1905,
    "series": 1905,
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 2,
    "draws": 3,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 1907,
    "series": "1907-08",
    "location": "Australia",
    "aus_wins": 4,
    "eng_wins": 1,
    "draws": 0,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1909,
    "series": 1909,
    "location": "England",
    "aus_wins": 2,
    "eng_wins": 1,
    "draws": 2,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1911,
    "series": "1911-12",
    "location": "Australia",
    "aus_wins": 1,
    "eng_wins": 4,
    "draws": 0,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 1912,
    "series": 1912,
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 1,
    "draws": 2,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 1920,
    "series": "1920-21",
    "location": "Australia",
    "aus_wins": 5,
    "eng_wins": 0,
    "draws": 0,
    "winner": "Australia",
    "margin_label": "AUS 5-0"
  },
  {
    "year": 1921,
    "series": 1921,
    "location": "England",
    "aus_wins": 3,
    "eng_wins": 0,
    "draws": 2,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1924,
    "series": "1924-25",
    "location": "Australia",
    "aus_wins": 4,
    "eng_wins": 1,
    "draws": 0,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1926,
    "series": 1926,
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 1,
    "draws": 4,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 1928,
    "series": "1928-29",
    "location": "Australia",
    "aus_wins": 1,
    "eng_wins": 4,
    "draws": 0,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 1930,
    "series": 1930,
    "location": "England",
    "aus_wins": 2,
    "eng_wins": 1,
    "draws": 2,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1932,
    "series": "1932-33",
    "location": "Australia",
    "aus_wins": 1,
    "eng_wins": 4,
    "draws": 0,
    "winner": "England",
    "margin_label": "Bodyline \u2014 ENG win"
  },
  {
    "year": 1934,
    "series": 1934,
    "location": "England",
    "aus_wins": 2,
    "eng_wins": 1,
    "draws": 2,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1936,
    "series": "1936-37",
    "location": "Australia",
    "aus_wins": 3,
    "eng_wins": 2,
    "draws": 0,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1938,
    "series": 1938,
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 1,
    "draws": 3,
    "winner": "Draw",
    "margin_label": "Series drawn"
  },
  {
    "year": 1946,
    "series": "1946-47",
    "location": "Australia",
    "aus_wins": 3,
    "eng_wins": 0,
    "draws": 2,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1948,
    "series": 1948,
    "location": "England",
    "aus_wins": 4,
    "eng_wins": 0,
    "draws": 1,
    "winner": "Australia",
    "margin_label": "The Invincibles"
  },
  {
    "year": 1950,
    "series": "1950-51",
    "location": "Australia",
    "aus_wins": 4,
    "eng_wins": 1,
    "draws": 0,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1953,
    "series": 1953,
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 1,
    "draws": 4,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 1954,
    "series": "1954-55",
    "location": "Australia",
    "aus_wins": 1,
    "eng_wins": 3,
    "draws": 1,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 1956,
    "series": 1956,
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 2,
    "draws": 2,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 1958,
    "series": "1958-59",
    "location": "Australia",
    "aus_wins": 4,
    "eng_wins": 0,
    "draws": 1,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1961,
    "series": 1961,
    "location": "England",
    "aus_wins": 2,
    "eng_wins": 1,
    "draws": 2,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1962,
    "series": "1962-63",
    "location": "Australia",
    "aus_wins": 1,
    "eng_wins": 1,
    "draws": 3,
    "winner": "Draw",
    "margin_label": "Series drawn"
  },
  {
    "year": 1964,
    "series": 1964,
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 0,
    "draws": 4,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1965,
    "series": "1965-66",
    "location": "Australia",
    "aus_wins": 1,
    "eng_wins": 1,
    "draws": 3,
    "winner": "Draw",
    "margin_label": "Series drawn"
  },
  {
    "year": 1968,
    "series": 1968,
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 1,
    "draws": 3,
    "winner": "Draw",
    "margin_label": "Series drawn"
  },
  {
    "year": 1970,
    "series": "1970-71",
    "location": "Australia",
    "aus_wins": 0,
    "eng_wins": 2,
    "draws": 4,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 1972,
    "series": 1972,
    "location": "England",
    "aus_wins": 2,
    "eng_wins": 2,
    "draws": 1,
    "winner": "Draw",
    "margin_label": "Series drawn"
  },
  {
    "year": 1974,
    "series": "1974-75",
    "location": "Australia",
    "aus_wins": 4,
    "eng_wins": 1,
    "draws": 0,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1975,
    "series": 1975,
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 0,
    "draws": 3,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1977,
    "series": 1977,
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 3,
    "draws": 2,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 1978,
    "series": "1978-79",
    "location": "Australia",
    "aus_wins": 1,
    "eng_wins": 5,
    "draws": 0,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 1979,
    "series": "1979-80",
    "location": "Australia",
    "aus_wins": 3,
    "eng_wins": 0,
    "draws": 0,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1981,
    "series": 1981,
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 3,
    "draws": 2,
    "winner": "England",
    "margin_label": "Botham's Ashes"
  },
  {
    "year": 1982,
    "series": "1982-83",
    "location": "Australia",
    "aus_wins": 2,
    "eng_wins": 1,
    "draws": 2,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1985,
    "series": 1985,
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 3,
    "draws": 1,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 1986,
    "series": "1986-87",
    "location": "Australia",
    "aus_wins": 1,
    "eng_wins": 2,
    "draws": 2,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 1989,
    "series": 1989,
    "location": "England",
    "aus_wins": 4,
    "eng_wins": 0,
    "draws": 2,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1990,
    "series": "1990-91",
    "location": "Australia",
    "aus_wins": 3,
    "eng_wins": 0,
    "draws": 2,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1993,
    "series": 1993,
    "location": "England",
    "aus_wins": 4,
    "eng_wins": 1,
    "draws": 1,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1994,
    "series": "1994-95",
    "location": "Australia",
    "aus_wins": 3,
    "eng_wins": 1,
    "draws": 1,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1997,
    "series": 1997,
    "location": "England",
    "aus_wins": 3,
    "eng_wins": 2,
    "draws": 1,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 1998,
    "series": "1998-99",
    "location": "Australia",
    "aus_wins": 3,
    "eng_wins": 1,
    "draws": 1,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 2001,
    "series": 2001,
    "location": "England",
    "aus_wins": 4,
    "eng_wins": 1,
    "draws": 0,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 2002,
    "series": "2002-03",
    "location": "Australia",
    "aus_wins": 4,
    "eng_wins": 1,
    "draws": 0,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 2005,
    "series": 2005,
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 2,
    "draws": 2,
    "winner": "England",
    "margin_label": "Iconic ENG win"
  },
  {
    "year": 2006,
    "series": "2006-07",
    "location": "Australia",
    "aus_wins": 5,
    "eng_wins": 0,
    "draws": 0,
    "winner": "Australia",
    "margin_label": "AUS 5-0 whitewash"
  },
  {
    "year": 2009,
    "series": 2009,
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 2,
    "draws": 2,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 2010,
    "series": "2010-11",
    "location": "Australia",
    "aus_wins": 0,
    "eng_wins": 3,
    "draws": 2,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 2013,
    "series": 2013,
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 3,
    "draws": 2,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 2013,
    "series": "2013-14",
    "location": "Australia",
    "aus_wins": 5,
    "eng_wins": 0,
    "draws": 0,
    "winner": "Australia",
    "margin_label": "AUS 5-0 whitewash"
  },
  {
    "year": 2015,
    "series": 2015,
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 3,
    "draws": 1,
    "winner": "England",
    "margin_label": "ENG win"
  },
  {
    "year": 2017,
    "series": "2017-18",
    "location": "Australia",
    "aus_wins": 4,
    "eng_wins": 0,
    "draws": 1,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 2019,
    "series": 2019,
    "location": "England",
    "aus_wins": 2,
    "eng_wins": 2,
    "draws": 1,
    "winner": "Draw",
    "margin_label": "Series drawn"
  },
  {
    "year": 2021,
    "series": "2021-22",
    "location": "Australia",
    "aus_wins": 4,
    "eng_wins": 0,
    "draws": 1,
    "winner": "Australia",
    "margin_label": "AUS win"
  },
  {
    "year": 2023,
    "series": 2023,
    "location": "England",
    "aus_wins": 2,
    "eng_wins": 2,
    "draws": 1,
    "winner": "Draw",
    "margin_label": "Bazball draw"
  }
];
const D_BATTING = [
  {
    "player": "Don Bradman",
    "format": "Test",
    "matches": 52,
    "runs": 6996,
    "average": 99.94,
    "centuries": 29,
    "fifties": 13,
    "high_score": 334,
    "era": "1928-1948",
    "role": "Batter"
  },
  {
    "player": "Ricky Ponting",
    "format": "Test",
    "matches": 168,
    "runs": 13378,
    "average": 51.85,
    "centuries": 41,
    "fifties": 62,
    "high_score": 257,
    "era": "1995-2012",
    "role": "Batter"
  },
  {
    "player": "Steve Waugh",
    "format": "Test",
    "matches": 168,
    "runs": 10927,
    "average": 51.06,
    "centuries": 32,
    "fifties": 50,
    "high_score": 200,
    "era": "1985-2004",
    "role": "Batter"
  },
  {
    "player": "Matthew Hayden",
    "format": "Test",
    "matches": 103,
    "runs": 8625,
    "average": 50.74,
    "centuries": 30,
    "fifties": 29,
    "high_score": 380,
    "era": "1994-2009",
    "role": "Batter"
  },
  {
    "player": "David Warner",
    "format": "Test",
    "matches": 112,
    "runs": 8786,
    "average": 44.59,
    "centuries": 26,
    "fifties": 37,
    "high_score": 335,
    "era": "2011-2023",
    "role": "Batter"
  },
  {
    "player": "Mark Taylor",
    "format": "Test",
    "matches": 104,
    "runs": 7525,
    "average": 43.49,
    "centuries": 19,
    "fifties": 40,
    "high_score": 334,
    "era": "1989-1999",
    "role": "Batter"
  },
  {
    "player": "Allan Border",
    "format": "Test",
    "matches": 156,
    "runs": 11174,
    "average": 50.56,
    "centuries": 27,
    "fifties": 63,
    "high_score": 205,
    "era": "1978-1994",
    "role": "Batter"
  },
  {
    "player": "Michael Clarke",
    "format": "Test",
    "matches": 115,
    "runs": 8643,
    "average": 49.1,
    "centuries": 28,
    "fifties": 27,
    "high_score": 329,
    "era": "2004-2015",
    "role": "Batter"
  },
  {
    "player": "Greg Chappell",
    "format": "Test",
    "matches": 87,
    "runs": 7110,
    "average": 53.86,
    "centuries": 24,
    "fifties": 31,
    "high_score": 247,
    "era": "1970-1984",
    "role": "Batter"
  },
  {
    "player": "Justin Langer",
    "format": "Test",
    "matches": 105,
    "runs": 7696,
    "average": 45.27,
    "centuries": 23,
    "fifties": 30,
    "high_score": 250,
    "era": "1993-2007",
    "role": "Batter"
  },
  {
    "player": "Adam Gilchrist",
    "format": "Test",
    "matches": 96,
    "runs": 5570,
    "average": 47.6,
    "centuries": 17,
    "fifties": 26,
    "high_score": 204,
    "era": "1999-2008",
    "role": "Wicketkeeper"
  },
  {
    "player": "Ian Healy",
    "format": "Test",
    "matches": 119,
    "runs": 3633,
    "average": 27.39,
    "centuries": 4,
    "fifties": 22,
    "high_score": 161,
    "era": "1988-1999",
    "role": "Wicketkeeper"
  },
  {
    "player": "Marnus Labuschagne",
    "format": "Test",
    "matches": 58,
    "runs": 4599,
    "average": 52.27,
    "centuries": 14,
    "fifties": 21,
    "high_score": 215,
    "era": "2018-2024",
    "role": "Batter"
  },
  {
    "player": "Steve Smith",
    "format": "Test",
    "matches": 110,
    "runs": 9490,
    "average": 59.31,
    "centuries": 33,
    "fifties": 38,
    "high_score": 239,
    "era": "2010-2024",
    "role": "Batter"
  },
  {
    "player": "Travis Head",
    "format": "Test",
    "matches": 52,
    "runs": 3786,
    "average": 44.54,
    "centuries": 11,
    "fifties": 14,
    "high_score": 163,
    "era": "2018-2024",
    "role": "Batter"
  },
  {
    "player": "Ricky Ponting",
    "format": "ODI",
    "matches": 375,
    "runs": 13704,
    "average": 42.03,
    "centuries": 30,
    "fifties": 82,
    "high_score": 164,
    "era": "1995-2012",
    "role": "Batter"
  },
  {
    "player": "David Warner",
    "format": "ODI",
    "matches": 161,
    "runs": 6932,
    "average": 45.3,
    "centuries": 18,
    "fifties": 55,
    "high_score": 179,
    "era": "2009-2023",
    "role": "Batter"
  },
  {
    "player": "Michael Bevan",
    "format": "ODI",
    "matches": 232,
    "runs": 6912,
    "average": 53.58,
    "centuries": 6,
    "fifties": 46,
    "high_score": 102,
    "era": "1994-2004",
    "role": "Batter"
  },
  {
    "player": "Andrew Symonds",
    "format": "ODI",
    "matches": 198,
    "runs": 5088,
    "average": 39.75,
    "centuries": 6,
    "fifties": 30,
    "high_score": 156,
    "era": "1998-2009",
    "role": "All-rounder"
  },
  {
    "player": "Adam Gilchrist",
    "format": "ODI",
    "matches": 287,
    "runs": 9619,
    "average": 35.89,
    "centuries": 16,
    "fifties": 55,
    "high_score": 172,
    "era": "1996-2008",
    "role": "Wicketkeeper"
  }
];
const D_BOWLING = [
  {
    "player": "Shane Warne",
    "format": "Test",
    "matches": 145,
    "wickets": 708,
    "average": 25.41,
    "economy": 2.65,
    "strike_rate": 57.4,
    "best_bowling": "8/71",
    "five_wickets": 37,
    "era": "1992-2007"
  },
  {
    "player": "Glenn McGrath",
    "format": "Test",
    "matches": 124,
    "wickets": 563,
    "average": 21.64,
    "economy": 2.49,
    "strike_rate": 51.9,
    "best_bowling": "8/24",
    "five_wickets": 29,
    "era": "1993-2007"
  },
  {
    "player": "Dennis Lillee",
    "format": "Test",
    "matches": 70,
    "wickets": 355,
    "average": 23.92,
    "economy": 2.7,
    "strike_rate": 52.0,
    "best_bowling": "7/83",
    "five_wickets": 23,
    "era": "1970-1984"
  },
  {
    "player": "Jeff Thomson",
    "format": "Test",
    "matches": 51,
    "wickets": 200,
    "average": 28.0,
    "economy": 3.07,
    "strike_rate": 52.7,
    "best_bowling": "6/46",
    "five_wickets": 8,
    "era": "1972-1985"
  },
  {
    "player": "Nathan Lyon",
    "format": "Test",
    "matches": 139,
    "wickets": 530,
    "average": 31.34,
    "economy": 2.97,
    "strike_rate": 63.1,
    "best_bowling": "8/50",
    "five_wickets": 20,
    "era": "2011-2024"
  },
  {
    "player": "Mitchell Johnson",
    "format": "Test",
    "matches": 73,
    "wickets": 313,
    "average": 28.4,
    "economy": 3.28,
    "strike_rate": 51.9,
    "best_bowling": "8/61",
    "five_wickets": 12,
    "era": "2005-2015"
  },
  {
    "player": "Brett Lee",
    "format": "Test",
    "matches": 76,
    "wickets": 310,
    "average": 30.81,
    "economy": 3.54,
    "strike_rate": 52.2,
    "best_bowling": "5/30",
    "five_wickets": 10,
    "era": "1999-2012"
  },
  {
    "player": "Pat Cummins",
    "format": "Test",
    "matches": 68,
    "wickets": 280,
    "average": 21.26,
    "economy": 2.81,
    "strike_rate": 45.2,
    "best_bowling": "7/23",
    "five_wickets": 9,
    "era": "2011-2024"
  },
  {
    "player": "Jason Gillespie",
    "format": "Test",
    "matches": 71,
    "wickets": 259,
    "average": 26.13,
    "economy": 2.76,
    "strike_rate": 56.8,
    "best_bowling": "7/37",
    "five_wickets": 8,
    "era": "1996-2006"
  },
  {
    "player": "Richie Benaud",
    "format": "Test",
    "matches": 63,
    "wickets": 248,
    "average": 27.03,
    "economy": 2.22,
    "strike_rate": 77.0,
    "best_bowling": "7/72",
    "five_wickets": 16,
    "era": "1952-1964"
  },
  {
    "player": "Shane Warne",
    "format": "ODI",
    "matches": 194,
    "wickets": 293,
    "average": 25.73,
    "economy": 4.25,
    "strike_rate": 36.3,
    "best_bowling": "5/33",
    "five_wickets": 1,
    "era": "1993-2005"
  },
  {
    "player": "Glenn McGrath",
    "format": "ODI",
    "matches": 250,
    "wickets": 381,
    "average": 22.02,
    "economy": 3.88,
    "strike_rate": 34.0,
    "best_bowling": "7/15",
    "five_wickets": 7,
    "era": "1993-2007"
  },
  {
    "player": "Mitchell Starc",
    "format": "ODI",
    "matches": 117,
    "wickets": 249,
    "average": 23.38,
    "economy": 4.99,
    "strike_rate": 28.1,
    "best_bowling": "6/28",
    "five_wickets": 7,
    "era": "2010-2024"
  },
  {
    "player": "Brett Lee",
    "format": "ODI",
    "matches": 221,
    "wickets": 380,
    "average": 23.36,
    "economy": 4.76,
    "strike_rate": 29.4,
    "best_bowling": "5/22",
    "five_wickets": 9,
    "era": "1999-2012"
  },
  {
    "player": "Pat Cummins",
    "format": "ODI",
    "matches": 102,
    "wickets": 173,
    "average": 25.28,
    "economy": 5.17,
    "strike_rate": 29.3,
    "best_bowling": "5/70",
    "five_wickets": 3,
    "era": "2011-2024"
  }
];
const D_HOMEAWAY = [
  {
    "player": "Don Bradman",
    "home_avg": 101.22,
    "away_avg": 91.4,
    "era": "1928-1948",
    "role": "Batter"
  },
  {
    "player": "Steve Smith",
    "home_avg": 64.23,
    "away_avg": 55.02,
    "era": "2010-2024",
    "role": "Batter"
  },
  {
    "player": "Ricky Ponting",
    "home_avg": 56.12,
    "away_avg": 48.33,
    "era": "1995-2012",
    "role": "Batter"
  },
  {
    "player": "Greg Chappell",
    "home_avg": 58.44,
    "away_avg": 49.67,
    "era": "1970-1984",
    "role": "Batter"
  },
  {
    "player": "Matthew Hayden",
    "home_avg": 55.21,
    "away_avg": 46.82,
    "era": "1994-2009",
    "role": "Batter"
  },
  {
    "player": "Allan Border",
    "home_avg": 52.31,
    "away_avg": 49.12,
    "era": "1978-1994",
    "role": "Batter"
  },
  {
    "player": "Michael Clarke",
    "home_avg": 52.89,
    "away_avg": 46.14,
    "era": "2004-2015",
    "role": "Batter"
  },
  {
    "player": "Justin Langer",
    "home_avg": 48.22,
    "away_avg": 42.91,
    "era": "1993-2007",
    "role": "Batter"
  },
  {
    "player": "David Warner",
    "home_avg": 53.11,
    "away_avg": 37.84,
    "era": "2011-2023",
    "role": "Batter"
  },
  {
    "player": "Mark Taylor",
    "home_avg": 46.33,
    "away_avg": 40.92,
    "era": "1989-1999",
    "role": "Batter"
  },
  {
    "player": "Adam Gilchrist",
    "home_avg": 52.44,
    "away_avg": 43.21,
    "era": "1999-2008",
    "role": "Wicketkeeper"
  },
  {
    "player": "Marnus Labuschagne",
    "home_avg": 58.12,
    "away_avg": 47.21,
    "era": "2018-2024",
    "role": "Batter"
  },
  {
    "player": "Travis Head",
    "home_avg": 51.34,
    "away_avg": 38.42,
    "era": "2015-2024",
    "role": "Batter"
  },
  {
    "player": "Usman Khawaja",
    "home_avg": 54.88,
    "away_avg": 44.33,
    "era": "2011-2024",
    "role": "Batter"
  }
];
const D_WORLDCUPS = [
  {
    "year": 1975,
    "tournament": "Cricket World Cup",
    "format": "ODI",
    "result": "Semi-final",
    "opponent_final": "England",
    "aus_score": "_",
    "opp_score": "_",
    "venue": "Headingley",
    "captain": "Ian Chappell"
  },
  {
    "year": 1979,
    "tournament": "Cricket World Cup",
    "format": "ODI",
    "result": "Semi-final",
    "opponent_final": "England",
    "aus_score": "_",
    "opp_score": "_",
    "venue": "Headingley",
    "captain": "Kim Hughes"
  },
  {
    "year": 1983,
    "tournament": "Cricket World Cup",
    "format": "ODI",
    "result": "Group stage exit",
    "opponent_final": "_",
    "aus_score": "_",
    "opp_score": "_",
    "venue": "Various",
    "captain": "Kim Hughes"
  },
  {
    "year": 1987,
    "tournament": "Cricket World Cup",
    "format": "ODI",
    "result": "Winner",
    "opponent_final": "England",
    "aus_score": "253/5",
    "opp_score": "246/8",
    "venue": "Eden Gardens",
    "captain": "Allan Border"
  },
  {
    "year": 1992,
    "tournament": "Cricket World Cup",
    "format": "ODI",
    "result": "Runner-up",
    "opponent_final": "Pakistan",
    "aus_score": "229/6",
    "opp_score": "249/6",
    "venue": "Melbourne",
    "captain": "Allan Border"
  },
  {
    "year": 1996,
    "tournament": "Cricket World Cup",
    "format": "ODI",
    "result": "Semi-final",
    "opponent_final": "West Indies",
    "aus_score": "207/8",
    "opp_score": "4/190",
    "venue": "Mohali",
    "captain": "Mark Taylor"
  },
  {
    "year": 1999,
    "tournament": "Cricket World Cup",
    "format": "ODI",
    "result": "Winner",
    "opponent_final": "Pakistan",
    "aus_score": "133/2",
    "opp_score": 132,
    "venue": "Lord's",
    "captain": "Steve Waugh"
  },
  {
    "year": 2003,
    "tournament": "Cricket World Cup",
    "format": "ODI",
    "result": "Winner",
    "opponent_final": "India",
    "aus_score": "359/2",
    "opp_score": 234,
    "venue": "Johannesburg",
    "captain": "Ricky Ponting"
  },
  {
    "year": 2007,
    "tournament": "Cricket World Cup",
    "format": "ODI",
    "result": "Winner",
    "opponent_final": "Sri Lanka",
    "aus_score": "281/4",
    "opp_score": "215/8",
    "venue": "Barbados",
    "captain": "Ricky Ponting"
  },
  {
    "year": 2011,
    "tournament": "Cricket World Cup",
    "format": "ODI",
    "result": "Quarter-final",
    "opponent_final": "India",
    "aus_score": 224,
    "opp_score": "4/48",
    "venue": "Ahmedabad",
    "captain": "Ricky Ponting"
  },
  {
    "year": 2015,
    "tournament": "Cricket World Cup",
    "format": "ODI",
    "result": "Winner",
    "opponent_final": "New Zealand",
    "aus_score": "186/3",
    "opp_score": 183,
    "venue": "Melbourne",
    "captain": "Michael Clarke"
  },
  {
    "year": 2019,
    "tournament": "Cricket World Cup",
    "format": "ODI",
    "result": "Semi-final",
    "opponent_final": "England",
    "aus_score": 223,
    "opp_score": "226/2",
    "venue": "Edgbaston",
    "captain": "Aaron Finch"
  },
  {
    "year": 2023,
    "tournament": "Cricket World Cup",
    "format": "ODI",
    "result": "Winner",
    "opponent_final": "India",
    "aus_score": "241/4",
    "opp_score": 240,
    "venue": "Ahmedabad",
    "captain": "Pat Cummins"
  },
  {
    "year": 2010,
    "tournament": "T20 World Cup",
    "format": "T20I",
    "result": "Runner-up",
    "opponent_final": "England",
    "aus_score": "147/6",
    "opp_score": "148/3",
    "venue": "Bridgetown",
    "captain": "Michael Clarke"
  },
  {
    "year": 2012,
    "tournament": "T20 World Cup",
    "format": "T20I",
    "result": "Semi-final",
    "opponent_final": "West Indies",
    "aus_score": "_",
    "opp_score": "_",
    "venue": "Various",
    "captain": "George Bailey"
  },
  {
    "year": 2014,
    "tournament": "T20 World Cup",
    "format": "T20I",
    "result": "Semi-final",
    "opponent_final": "India",
    "aus_score": "_",
    "opp_score": "_",
    "venue": "Various",
    "captain": "George Bailey"
  },
  {
    "year": 2016,
    "tournament": "T20 World Cup",
    "format": "T20I",
    "result": "Group stage exit",
    "opponent_final": "_",
    "aus_score": "_",
    "opp_score": "_",
    "venue": "Various",
    "captain": "Steve Smith"
  },
  {
    "year": 2021,
    "tournament": "T20 World Cup",
    "format": "T20I",
    "result": "Winner",
    "opponent_final": "New Zealand",
    "aus_score": "173/2",
    "opp_score": "172/4",
    "venue": "Dubai",
    "captain": "Aaron Finch"
  },
  {
    "year": 2022,
    "tournament": "T20 World Cup",
    "format": "T20I",
    "result": "Semi-final",
    "opponent_final": "England",
    "aus_score": "_",
    "opp_score": "_",
    "venue": "Various",
    "captain": "Aaron Finch"
  },
  {
    "year": 2024,
    "tournament": "T20 World Cup",
    "format": "T20I",
    "result": "Group stage exit",
    "opponent_final": "_",
    "aus_score": "_",
    "opp_score": "_",
    "venue": "Various",
    "captain": "Mitchell Marsh"
  }
];
const D_BBL = [
  {
    "season": "2011-12",
    "team": "Sydney Sixers",
    "played": 8,
    "won": 6,
    "lost": 2,
    "tied": 0,
    "no_result": 0,
    "points": 12,
    "net_run_rate": 0.71,
    "position": 1
  },
  {
    "season": "2011-12",
    "team": "Perth Scorchers",
    "played": 8,
    "won": 5,
    "lost": 3,
    "tied": 0,
    "no_result": 0,
    "points": 10,
    "net_run_rate": 0.31,
    "position": 2
  },
  {
    "season": "2011-12",
    "team": "Melbourne Stars",
    "played": 8,
    "won": 4,
    "lost": 4,
    "tied": 0,
    "no_result": 0,
    "points": 8,
    "net_run_rate": -0.13,
    "position": 3
  },
  {
    "season": "2011-12",
    "team": "Brisbane Heat",
    "played": 8,
    "won": 3,
    "lost": 5,
    "tied": 0,
    "no_result": 0,
    "points": 6,
    "net_run_rate": -0.28,
    "position": 4
  },
  {
    "season": "2011-12",
    "team": "Adelaide Strikers",
    "played": 8,
    "won": 3,
    "lost": 5,
    "tied": 0,
    "no_result": 0,
    "points": 6,
    "net_run_rate": -0.34,
    "position": 5
  },
  {
    "season": "2011-12",
    "team": "Melbourne Renegades",
    "played": 8,
    "won": 3,
    "lost": 5,
    "tied": 0,
    "no_result": 0,
    "points": 6,
    "net_run_rate": -0.44,
    "position": 6
  },
  {
    "season": "2012-13",
    "team": "Perth Scorchers",
    "played": 10,
    "won": 8,
    "lost": 2,
    "tied": 0,
    "no_result": 0,
    "points": 16,
    "net_run_rate": 1.02,
    "position": 1
  },
  {
    "season": "2012-13",
    "team": "Brisbane Heat",
    "played": 10,
    "won": 6,
    "lost": 4,
    "tied": 0,
    "no_result": 0,
    "points": 12,
    "net_run_rate": 0.18,
    "position": 2
  },
  {
    "season": "2012-13",
    "team": "Sydney Sixers",
    "played": 10,
    "won": 6,
    "lost": 4,
    "tied": 0,
    "no_result": 0,
    "points": 12,
    "net_run_rate": 0.45,
    "position": 3
  },
  {
    "season": "2012-13",
    "team": "Hobart Hurricanes",
    "played": 10,
    "won": 5,
    "lost": 5,
    "tied": 0,
    "no_result": 0,
    "points": 10,
    "net_run_rate": -0.01,
    "position": 4
  },
  {
    "season": "2012-13",
    "team": "Melbourne Stars",
    "played": 10,
    "won": 3,
    "lost": 7,
    "tied": 0,
    "no_result": 0,
    "points": 6,
    "net_run_rate": -0.52,
    "position": 5
  },
  {
    "season": "2012-13",
    "team": "Adelaide Strikers",
    "played": 10,
    "won": 2,
    "lost": 8,
    "tied": 0,
    "no_result": 0,
    "points": 4,
    "net_run_rate": -0.62,
    "position": 6
  },
  {
    "season": "2013-14",
    "team": "Perth Scorchers",
    "played": 10,
    "won": 7,
    "lost": 3,
    "tied": 0,
    "no_result": 0,
    "points": 14,
    "net_run_rate": 0.88,
    "position": 1
  },
  {
    "season": "2013-14",
    "team": "Hobart Hurricanes",
    "played": 10,
    "won": 6,
    "lost": 4,
    "tied": 0,
    "no_result": 0,
    "points": 12,
    "net_run_rate": 0.22,
    "position": 2
  },
  {
    "season": "2013-14",
    "team": "Sydney Sixers",
    "played": 10,
    "won": 6,
    "lost": 4,
    "tied": 0,
    "no_result": 0,
    "points": 12,
    "net_run_rate": 0.11,
    "position": 3
  },
  {
    "season": "2013-14",
    "team": "Brisbane Heat",
    "played": 10,
    "won": 5,
    "lost": 5,
    "tied": 0,
    "no_result": 0,
    "points": 10,
    "net_run_rate": -0.14,
    "position": 4
  },
  {
    "season": "2013-14",
    "team": "Melbourne Stars",
    "played": 10,
    "won": 3,
    "lost": 7,
    "tied": 0,
    "no_result": 0,
    "points": 6,
    "net_run_rate": -0.42,
    "position": 5
  },
  {
    "season": "2013-14",
    "team": "Adelaide Strikers",
    "played": 10,
    "won": 3,
    "lost": 7,
    "tied": 0,
    "no_result": 0,
    "points": 6,
    "net_run_rate": -0.72,
    "position": 6
  },
  {
    "season": "2014-15",
    "team": "Perth Scorchers",
    "played": 14,
    "won": 10,
    "lost": 4,
    "tied": 0,
    "no_result": 0,
    "points": 20,
    "net_run_rate": 0.76,
    "position": 1
  },
  {
    "season": "2014-15",
    "team": "Sydney Sixers",
    "played": 14,
    "won": 9,
    "lost": 5,
    "tied": 0,
    "no_result": 0,
    "points": 18,
    "net_run_rate": 0.42,
    "position": 2
  },
  {
    "season": "2014-15",
    "team": "Melbourne Stars",
    "played": 14,
    "won": 8,
    "lost": 6,
    "tied": 0,
    "no_result": 0,
    "points": 16,
    "net_run_rate": 0.18,
    "position": 3
  },
  {
    "season": "2014-15",
    "team": "Adelaide Strikers",
    "played": 14,
    "won": 7,
    "lost": 7,
    "tied": 0,
    "no_result": 0,
    "points": 14,
    "net_run_rate": -0.02,
    "position": 4
  },
  {
    "season": "2014-15",
    "team": "Hobart Hurricanes",
    "played": 14,
    "won": 5,
    "lost": 9,
    "tied": 0,
    "no_result": 0,
    "points": 10,
    "net_run_rate": -0.35,
    "position": 5
  },
  {
    "season": "2014-15",
    "team": "Brisbane Heat",
    "played": 14,
    "won": 4,
    "lost": 10,
    "tied": 0,
    "no_result": 0,
    "points": 8,
    "net_run_rate": -0.52,
    "position": 6
  },
  {
    "season": "2014-15",
    "team": "Melbourne Renegades",
    "played": 14,
    "won": 3,
    "lost": 11,
    "tied": 0,
    "no_result": 0,
    "points": 6,
    "net_run_rate": -0.61,
    "position": 7
  },
  {
    "season": "2014-15",
    "team": "Sydney Thunder",
    "played": 14,
    "won": 2,
    "lost": 12,
    "tied": 0,
    "no_result": 0,
    "points": 4,
    "net_run_rate": -0.83,
    "position": 8
  },
  {
    "season": "2015-16",
    "team": "Sydney Thunder",
    "played": 14,
    "won": 9,
    "lost": 5,
    "tied": 0,
    "no_result": 0,
    "points": 18,
    "net_run_rate": 0.41,
    "position": 1
  },
  {
    "season": "2015-16",
    "team": "Adelaide Strikers",
    "played": 14,
    "won": 8,
    "lost": 6,
    "tied": 0,
    "no_result": 0,
    "points": 16,
    "net_run_rate": 0.22,
    "position": 2
  },
  {
    "season": "2015-16",
    "team": "Perth Scorchers",
    "played": 14,
    "won": 8,
    "lost": 6,
    "tied": 0,
    "no_result": 0,
    "points": 16,
    "net_run_rate": 0.18,
    "position": 3
  },
  {
    "season": "2015-16",
    "team": "Sydney Sixers",
    "played": 14,
    "won": 7,
    "lost": 7,
    "tied": 0,
    "no_result": 0,
    "points": 14,
    "net_run_rate": -0.08,
    "position": 4
  },
  {
    "season": "2015-16",
    "team": "Brisbane Heat",
    "played": 14,
    "won": 6,
    "lost": 8,
    "tied": 0,
    "no_result": 0,
    "points": 12,
    "net_run_rate": -0.18,
    "position": 5
  },
  {
    "season": "2015-16",
    "team": "Melbourne Renegades",
    "played": 14,
    "won": 6,
    "lost": 8,
    "tied": 0,
    "no_result": 0,
    "points": 12,
    "net_run_rate": -0.31,
    "position": 6
  },
  {
    "season": "2015-16",
    "team": "Melbourne Stars",
    "played": 14,
    "won": 5,
    "lost": 9,
    "tied": 0,
    "no_result": 0,
    "points": 10,
    "net_run_rate": -0.24,
    "position": 7
  },
  {
    "season": "2015-16",
    "team": "Hobart Hurricanes",
    "played": 14,
    "won": 5,
    "lost": 9,
    "tied": 0,
    "no_result": 0,
    "points": 10,
    "net_run_rate": -0.38,
    "position": 8
  },
  {
    "season": "2016-17",
    "team": "Perth Scorchers",
    "played": 14,
    "won": 10,
    "lost": 4,
    "tied": 0,
    "no_result": 0,
    "points": 20,
    "net_run_rate": 0.65,
    "position": 1
  },
  {
    "season": "2016-17",
    "team": "Sydney Sixers",
    "played": 14,
    "won": 8,
    "lost": 6,
    "tied": 0,
    "no_result": 0,
    "points": 16,
    "net_run_rate": 0.31,
    "position": 2
  },
  {
    "season": "2016-17",
    "team": "Adelaide Strikers",
    "played": 14,
    "won": 8,
    "lost": 6,
    "tied": 0,
    "no_result": 0,
    "points": 16,
    "net_run_rate": 0.14,
    "position": 3
  },
  {
    "season": "2016-17",
    "team": "Hobart Hurricanes",
    "played": 14,
    "won": 7,
    "lost": 7,
    "tied": 0,
    "no_result": 0,
    "points": 14,
    "net_run_rate": 0.01,
    "position": 4
  },
  {
    "season": "2016-17",
    "team": "Brisbane Heat",
    "played": 14,
    "won": 6,
    "lost": 8,
    "tied": 0,
    "no_result": 0,
    "points": 12,
    "net_run_rate": -0.22,
    "position": 5
  },
  {
    "season": "2016-17",
    "team": "Sydney Thunder",
    "played": 14,
    "won": 5,
    "lost": 9,
    "tied": 0,
    "no_result": 0,
    "points": 10,
    "net_run_rate": -0.38,
    "position": 6
  },
  {
    "season": "2016-17",
    "team": "Melbourne Renegades",
    "played": 14,
    "won": 4,
    "lost": 10,
    "tied": 0,
    "no_result": 0,
    "points": 8,
    "net_run_rate": -0.42,
    "position": 7
  },
  {
    "season": "2016-17",
    "team": "Melbourne Stars",
    "played": 14,
    "won": 4,
    "lost": 10,
    "tied": 0,
    "no_result": 0,
    "points": 8,
    "net_run_rate": -0.48,
    "position": 8
  },
  {
    "season": "2017-18",
    "team": "Adelaide Strikers",
    "played": 14,
    "won": 9,
    "lost": 5,
    "tied": 0,
    "no_result": 0,
    "points": 18,
    "net_run_rate": 0.52,
    "position": 1
  },
  {
    "season": "2017-18",
    "team": "Hobart Hurricanes",
    "played": 14,
    "won": 9,
    "lost": 5,
    "tied": 0,
    "no_result": 0,
    "points": 18,
    "net_run_rate": 0.44,
    "position": 2
  },
  {
    "season": "2017-18",
    "team": "Sydney Sixers",
    "played": 14,
    "won": 8,
    "lost": 6,
    "tied": 0,
    "no_result": 0,
    "points": 16,
    "net_run_rate": 0.21,
    "position": 3
  },
  {
    "season": "2017-18",
    "team": "Melbourne Stars",
    "played": 14,
    "won": 8,
    "lost": 6,
    "tied": 0,
    "no_result": 0,
    "points": 16,
    "net_run_rate": 0.12,
    "position": 4
  },
  {
    "season": "2017-18",
    "team": "Perth Scorchers",
    "played": 14,
    "won": 7,
    "lost": 7,
    "tied": 0,
    "no_result": 0,
    "points": 14,
    "net_run_rate": -0.04,
    "position": 5
  },
  {
    "season": "2017-18",
    "team": "Brisbane Heat",
    "played": 14,
    "won": 6,
    "lost": 8,
    "tied": 0,
    "no_result": 0,
    "points": 12,
    "net_run_rate": -0.28,
    "position": 6
  },
  {
    "season": "2017-18",
    "team": "Sydney Thunder",
    "played": 14,
    "won": 4,
    "lost": 10,
    "tied": 0,
    "no_result": 0,
    "points": 8,
    "net_run_rate": -0.42,
    "position": 7
  },
  {
    "season": "2017-18",
    "team": "Melbourne Renegades",
    "played": 14,
    "won": 3,
    "lost": 11,
    "tied": 0,
    "no_result": 0,
    "points": 6,
    "net_run_rate": -0.72,
    "position": 8
  },
  {
    "season": "2018-19",
    "team": "Melbourne Renegades",
    "played": 14,
    "won": 9,
    "lost": 5,
    "tied": 0,
    "no_result": 0,
    "points": 18,
    "net_run_rate": 0.31,
    "position": 1
  },
  {
    "season": "2018-19",
    "team": "Sydney Sixers",
    "played": 14,
    "won": 9,
    "lost": 5,
    "tied": 0,
    "no_result": 0,
    "points": 18,
    "net_run_rate": 0.44,
    "position": 2
  },
  {
    "season": "2018-19",
    "team": "Brisbane Heat",
    "played": 14,
    "won": 8,
    "lost": 6,
    "tied": 0,
    "no_result": 0,
    "points": 16,
    "net_run_rate": 0.19,
    "position": 3
  },
  {
    "season": "2018-19",
    "team": "Perth Scorchers",
    "played": 14,
    "won": 7,
    "lost": 7,
    "tied": 0,
    "no_result": 0,
    "points": 14,
    "net_run_rate": 0.02,
    "position": 4
  },
  {
    "season": "2018-19",
    "team": "Hobart Hurricanes",
    "played": 14,
    "won": 6,
    "lost": 8,
    "tied": 0,
    "no_result": 0,
    "points": 12,
    "net_run_rate": -0.11,
    "position": 5
  },
  {
    "season": "2018-19",
    "team": "Melbourne Stars",
    "played": 14,
    "won": 6,
    "lost": 8,
    "tied": 0,
    "no_result": 0,
    "points": 12,
    "net_run_rate": -0.18,
    "position": 6
  },
  {
    "season": "2018-19",
    "team": "Adelaide Strikers",
    "played": 14,
    "won": 4,
    "lost": 10,
    "tied": 0,
    "no_result": 0,
    "points": 8,
    "net_run_rate": -0.41,
    "position": 7
  },
  {
    "season": "2018-19",
    "team": "Sydney Thunder",
    "played": 14,
    "won": 3,
    "lost": 11,
    "tied": 0,
    "no_result": 0,
    "points": 6,
    "net_run_rate": -0.58,
    "position": 8
  },
  {
    "season": "2019-20",
    "team": "Sydney Sixers",
    "played": 14,
    "won": 11,
    "lost": 3,
    "tied": 0,
    "no_result": 0,
    "points": 22,
    "net_run_rate": 0.81,
    "position": 1
  },
  {
    "season": "2019-20",
    "team": "Melbourne Stars",
    "played": 14,
    "won": 9,
    "lost": 5,
    "tied": 0,
    "no_result": 0,
    "points": 18,
    "net_run_rate": 0.44,
    "position": 2
  },
  {
    "season": "2019-20",
    "team": "Brisbane Heat",
    "played": 14,
    "won": 8,
    "lost": 6,
    "tied": 0,
    "no_result": 0,
    "points": 16,
    "net_run_rate": 0.21,
    "position": 3
  },
  {
    "season": "2019-20",
    "team": "Perth Scorchers",
    "played": 14,
    "won": 7,
    "lost": 7,
    "tied": 0,
    "no_result": 0,
    "points": 14,
    "net_run_rate": 0.02,
    "position": 4
  },
  {
    "season": "2019-20",
    "team": "Hobart Hurricanes",
    "played": 14,
    "won": 6,
    "lost": 8,
    "tied": 0,
    "no_result": 0,
    "points": 12,
    "net_run_rate": -0.14,
    "position": 5
  },
  {
    "season": "2019-20",
    "team": "Adelaide Strikers",
    "played": 14,
    "won": 5,
    "lost": 9,
    "tied": 0,
    "no_result": 0,
    "points": 10,
    "net_run_rate": -0.31,
    "position": 6
  },
  {
    "season": "2019-20",
    "team": "Melbourne Renegades",
    "played": 14,
    "won": 4,
    "lost": 10,
    "tied": 0,
    "no_result": 0,
    "points": 8,
    "net_run_rate": -0.52,
    "position": 7
  },
  {
    "season": "2019-20",
    "team": "Sydney Thunder",
    "played": 14,
    "won": 2,
    "lost": 12,
    "tied": 0,
    "no_result": 0,
    "points": 4,
    "net_run_rate": -0.78,
    "position": 8
  },
  {
    "season": "2020-21",
    "team": "Sydney Sixers",
    "played": 14,
    "won": 10,
    "lost": 4,
    "tied": 0,
    "no_result": 0,
    "points": 20,
    "net_run_rate": 0.72,
    "position": 1
  },
  {
    "season": "2020-21",
    "team": "Perth Scorchers",
    "played": 14,
    "won": 9,
    "lost": 5,
    "tied": 0,
    "no_result": 0,
    "points": 18,
    "net_run_rate": 0.41,
    "position": 2
  },
  {
    "season": "2020-21",
    "team": "Brisbane Heat",
    "played": 14,
    "won": 8,
    "lost": 6,
    "tied": 0,
    "no_result": 0,
    "points": 16,
    "net_run_rate": 0.18,
    "position": 3
  },
  {
    "season": "2020-21",
    "team": "Hobart Hurricanes",
    "played": 14,
    "won": 7,
    "lost": 7,
    "tied": 0,
    "no_result": 0,
    "points": 14,
    "net_run_rate": 0.04,
    "position": 4
  },
  {
    "season": "2020-21",
    "team": "Adelaide Strikers",
    "played": 14,
    "won": 6,
    "lost": 8,
    "tied": 0,
    "no_result": 0,
    "points": 12,
    "net_run_rate": -0.08,
    "position": 5
  },
  {
    "season": "2020-21",
    "team": "Melbourne Stars",
    "played": 14,
    "won": 5,
    "lost": 9,
    "tied": 0,
    "no_result": 0,
    "points": 10,
    "net_run_rate": -0.28,
    "position": 6
  },
  {
    "season": "2020-21",
    "team": "Melbourne Renegades",
    "played": 14,
    "won": 4,
    "lost": 10,
    "tied": 0,
    "no_result": 0,
    "points": 8,
    "net_run_rate": -0.44,
    "position": 7
  },
  {
    "season": "2020-21",
    "team": "Sydney Thunder",
    "played": 14,
    "won": 3,
    "lost": 11,
    "tied": 0,
    "no_result": 0,
    "points": 6,
    "net_run_rate": -0.62,
    "position": 8
  },
  {
    "season": "2021-22",
    "team": "Perth Scorchers",
    "played": 14,
    "won": 10,
    "lost": 4,
    "tied": 0,
    "no_result": 0,
    "points": 20,
    "net_run_rate": 0.68,
    "position": 1
  },
  {
    "season": "2021-22",
    "team": "Sydney Sixers",
    "played": 14,
    "won": 9,
    "lost": 5,
    "tied": 0,
    "no_result": 0,
    "points": 18,
    "net_run_rate": 0.38,
    "position": 2
  },
  {
    "season": "2021-22",
    "team": "Hobart Hurricanes",
    "played": 14,
    "won": 8,
    "lost": 6,
    "tied": 0,
    "no_result": 0,
    "points": 16,
    "net_run_rate": 0.22,
    "position": 3
  },
  {
    "season": "2021-22",
    "team": "Melbourne Stars",
    "played": 14,
    "won": 7,
    "lost": 7,
    "tied": 0,
    "no_result": 0,
    "points": 14,
    "net_run_rate": 0.01,
    "position": 4
  },
  {
    "season": "2021-22",
    "team": "Adelaide Strikers",
    "played": 14,
    "won": 6,
    "lost": 8,
    "tied": 0,
    "no_result": 0,
    "points": 12,
    "net_run_rate": -0.12,
    "position": 5
  },
  {
    "season": "2021-22",
    "team": "Brisbane Heat",
    "played": 14,
    "won": 5,
    "lost": 9,
    "tied": 0,
    "no_result": 0,
    "points": 10,
    "net_run_rate": -0.32,
    "position": 6
  },
  {
    "season": "2021-22",
    "team": "Sydney Thunder",
    "played": 14,
    "won": 4,
    "lost": 10,
    "tied": 0,
    "no_result": 0,
    "points": 8,
    "net_run_rate": -0.48,
    "position": 7
  },
  {
    "season": "2021-22",
    "team": "Melbourne Renegades",
    "played": 14,
    "won": 3,
    "lost": 11,
    "tied": 0,
    "no_result": 0,
    "points": 6,
    "net_run_rate": -0.68,
    "position": 8
  },
  {
    "season": "2022-23",
    "team": "Brisbane Heat",
    "played": 14,
    "won": 9,
    "lost": 5,
    "tied": 0,
    "no_result": 0,
    "points": 18,
    "net_run_rate": 0.44,
    "position": 1
  },
  {
    "season": "2022-23",
    "team": "Sydney Sixers",
    "played": 14,
    "won": 9,
    "lost": 5,
    "tied": 0,
    "no_result": 0,
    "points": 18,
    "net_run_rate": 0.36,
    "position": 2
  },
  {
    "season": "2022-23",
    "team": "Perth Scorchers",
    "played": 14,
    "won": 8,
    "lost": 6,
    "tied": 0,
    "no_result": 0,
    "points": 16,
    "net_run_rate": 0.28,
    "position": 3
  },
  {
    "season": "2022-23",
    "team": "Adelaide Strikers",
    "played": 14,
    "won": 7,
    "lost": 7,
    "tied": 0,
    "no_result": 0,
    "points": 14,
    "net_run_rate": 0.04,
    "position": 4
  },
  {
    "season": "2022-23",
    "team": "Hobart Hurricanes",
    "played": 14,
    "won": 6,
    "lost": 8,
    "tied": 0,
    "no_result": 0,
    "points": 12,
    "net_run_rate": -0.14,
    "position": 5
  },
  {
    "season": "2022-23",
    "team": "Melbourne Stars",
    "played": 14,
    "won": 5,
    "lost": 9,
    "tied": 0,
    "no_result": 0,
    "points": 10,
    "net_run_rate": -0.31,
    "position": 6
  },
  {
    "season": "2022-23",
    "team": "Sydney Thunder",
    "played": 14,
    "won": 4,
    "lost": 10,
    "tied": 0,
    "no_result": 0,
    "points": 8,
    "net_run_rate": -0.44,
    "position": 7
  },
  {
    "season": "2022-23",
    "team": "Melbourne Renegades",
    "played": 14,
    "won": 4,
    "lost": 10,
    "tied": 0,
    "no_result": 0,
    "points": 8,
    "net_run_rate": -0.58,
    "position": 8
  },
  {
    "season": "2023-24",
    "team": "Sydney Sixers",
    "played": 14,
    "won": 10,
    "lost": 4,
    "tied": 0,
    "no_result": 0,
    "points": 20,
    "net_run_rate": 0.62,
    "position": 1
  },
  {
    "season": "2023-24",
    "team": "Perth Scorchers",
    "played": 14,
    "won": 9,
    "lost": 5,
    "tied": 0,
    "no_result": 0,
    "points": 18,
    "net_run_rate": 0.44,
    "position": 2
  },
  {
    "season": "2023-24",
    "team": "Brisbane Heat",
    "played": 14,
    "won": 8,
    "lost": 6,
    "tied": 0,
    "no_result": 0,
    "points": 16,
    "net_run_rate": 0.18,
    "position": 3
  },
  {
    "season": "2023-24",
    "team": "Adelaide Strikers",
    "played": 14,
    "won": 7,
    "lost": 7,
    "tied": 0,
    "no_result": 0,
    "points": 14,
    "net_run_rate": 0.02,
    "position": 4
  },
  {
    "season": "2023-24",
    "team": "Melbourne Stars",
    "played": 14,
    "won": 6,
    "lost": 8,
    "tied": 0,
    "no_result": 0,
    "points": 12,
    "net_run_rate": -0.14,
    "position": 5
  },
  {
    "season": "2023-24",
    "team": "Hobart Hurricanes",
    "played": 14,
    "won": 5,
    "lost": 9,
    "tied": 0,
    "no_result": 0,
    "points": 10,
    "net_run_rate": -0.28,
    "position": 6
  },
  {
    "season": "2023-24",
    "team": "Melbourne Renegades",
    "played": 14,
    "won": 4,
    "lost": 10,
    "tied": 0,
    "no_result": 0,
    "points": 8,
    "net_run_rate": -0.44,
    "position": 7
  },
  {
    "season": "2023-24",
    "team": "Sydney Thunder",
    "played": 14,
    "won": 3,
    "lost": 11,
    "tied": 0,
    "no_result": 0,
    "points": 6,
    "net_run_rate": -0.62,
    "position": 8
  }
];
const D_RISING = [
  {
    "player": "Travis Head",
    "dob": "1993-12-29",
    "debut_age": 21,
    "matches_test": 52,
    "matches_odi": 69,
    "matches_t20": 45,
    "runs_test": 3786,
    "avg_test": 44.54,
    "wickets_test": 0,
    "role": "Batter",
    "state": "South Australia",
    "debut_year": 2015
  },
  {
    "player": "Marnus Labuschagne",
    "dob": "1994-06-23",
    "debut_age": 24,
    "matches_test": 58,
    "matches_odi": 70,
    "matches_t20": 18,
    "runs_test": 4599,
    "avg_test": 52.27,
    "wickets_test": 50,
    "role": "Batter",
    "state": "Queensland",
    "debut_year": 2018
  },
  {
    "player": "Cameron Green",
    "dob": "1999-06-03",
    "debut_age": 21,
    "matches_test": 27,
    "matches_odi": 42,
    "matches_t20": 22,
    "runs_test": 1590,
    "avg_test": 30.58,
    "wickets_test": 39,
    "role": "All-rounder",
    "state": "Western Australia",
    "debut_year": 2020
  },
  {
    "player": "Pat Cummins",
    "dob": "1993-05-08",
    "debut_age": 18,
    "matches_test": 68,
    "matches_odi": 102,
    "matches_t20": 56,
    "runs_test": 0,
    "avg_test": 0.0,
    "wickets_test": 280,
    "role": "Bowler",
    "state": "New South Wales",
    "debut_year": 2011
  },
  {
    "player": "Mitchell Starc",
    "dob": "1990-01-30",
    "debut_age": 21,
    "matches_test": 85,
    "matches_odi": 117,
    "matches_t20": 62,
    "runs_test": 0,
    "avg_test": 0.0,
    "wickets_test": 310,
    "role": "Bowler",
    "state": "New South Wales",
    "debut_year": 2010
  },
  {
    "player": "Josh Hazlewood",
    "dob": "1991-01-08",
    "debut_age": 24,
    "matches_test": 55,
    "matches_odi": 77,
    "matches_t20": 39,
    "runs_test": 0,
    "avg_test": 0.0,
    "wickets_test": 220,
    "role": "Bowler",
    "state": "New South Wales",
    "debut_year": 2014
  },
  {
    "player": "Nathan Lyon",
    "dob": "1987-11-20",
    "debut_age": 23,
    "matches_test": 139,
    "matches_odi": 0,
    "matches_t20": 0,
    "runs_test": 0,
    "avg_test": 0.0,
    "wickets_test": 530,
    "role": "Bowler",
    "state": "South Australia",
    "debut_year": 2011
  },
  {
    "player": "Steve Smith",
    "dob": "1989-06-02",
    "debut_age": 21,
    "matches_test": 110,
    "matches_odi": 156,
    "matches_t20": 50,
    "runs_test": 9490,
    "avg_test": 59.31,
    "wickets_test": 0,
    "role": "Batter",
    "state": "New South Wales",
    "debut_year": 2010
  },
  {
    "player": "David Warner",
    "dob": "1986-10-27",
    "debut_age": 24,
    "matches_test": 112,
    "matches_odi": 161,
    "matches_t20": 99,
    "runs_test": 8786,
    "avg_test": 44.59,
    "wickets_test": 0,
    "role": "Batter",
    "state": "New South Wales",
    "debut_year": 2009
  },
  {
    "player": "Usman Khawaja",
    "dob": "1986-12-18",
    "debut_age": 24,
    "matches_test": 68,
    "matches_odi": 40,
    "matches_t20": 9,
    "runs_test": 5552,
    "avg_test": 49.57,
    "wickets_test": 0,
    "role": "Batter",
    "state": "Queensland",
    "debut_year": 2011
  },
  {
    "player": "Matt Short",
    "dob": "1997-10-01",
    "debut_age": 25,
    "matches_test": 5,
    "matches_odi": 21,
    "matches_t20": 31,
    "runs_test": 312,
    "avg_test": 36.11,
    "wickets_test": 0,
    "role": "Batter",
    "state": "Victoria",
    "debut_year": 2022
  },
  {
    "player": "Jake Fraser-McGurk",
    "dob": "2001-06-21",
    "debut_age": 22,
    "matches_test": 3,
    "matches_odi": 15,
    "matches_t20": 22,
    "runs_test": 88,
    "avg_test": 22.11,
    "wickets_test": 0,
    "role": "Batter",
    "state": "Victoria",
    "debut_year": 2023
  },
  {
    "player": "Spencer Johnson",
    "dob": "1995-07-15",
    "debut_age": 28,
    "matches_test": 3,
    "matches_odi": 18,
    "matches_t20": 22,
    "runs_test": 0,
    "avg_test": 0.0,
    "wickets_test": 22,
    "role": "Bowler",
    "state": "South Australia",
    "debut_year": 2023
  },
  {
    "player": "Josh Inglis",
    "dob": "1995-03-04",
    "debut_age": 27,
    "matches_test": 8,
    "matches_odi": 41,
    "matches_t20": 38,
    "runs_test": 400,
    "avg_test": 32.11,
    "wickets_test": 0,
    "role": "Wicketkeeper",
    "state": "Western Australia",
    "debut_year": 2021
  }
];
const D_HTH = [
  {
    "id": 826,
    "country": "England",
    "test_win_rate": 51.2,
    "test_matches": 356,
    "odi_win_rate": 57.3,
    "t20_win_rate": 52.1,
    "lat": 51.5,
    "lon": -0.1
  },
  {
    "id": 356,
    "country": "India",
    "test_win_rate": 44.1,
    "test_matches": 108,
    "odi_win_rate": 52.8,
    "t20_win_rate": 48.3,
    "lat": 20.6,
    "lon": 78.9
  },
  {
    "id": 554,
    "country": "New Zealand",
    "test_win_rate": 62.3,
    "test_matches": 56,
    "odi_win_rate": 65.1,
    "t20_win_rate": 58.9,
    "lat": -40.9,
    "lon": 174.9
  },
  {
    "id": 710,
    "country": "South Africa",
    "test_win_rate": 53.7,
    "test_matches": 97,
    "odi_win_rate": 61.2,
    "t20_win_rate": 54.4,
    "lat": -30.6,
    "lon": 22.9
  },
  {
    "id": 586,
    "country": "Pakistan",
    "test_win_rate": 61.8,
    "test_matches": 66,
    "odi_win_rate": 67.4,
    "t20_win_rate": 56.7,
    "lat": 30.4,
    "lon": 69.3
  },
  {
    "id": 144,
    "country": "Sri Lanka",
    "test_win_rate": 69.2,
    "test_matches": 30,
    "odi_win_rate": 72.1,
    "t20_win_rate": 61.8,
    "lat": 7.9,
    "lon": 80.7
  },
  {
    "id": 716,
    "country": "Zimbabwe",
    "test_win_rate": 81.3,
    "test_matches": 4,
    "odi_win_rate": 83.2,
    "t20_win_rate": 75.0,
    "lat": -20.0,
    "lon": 30.0
  },
  {
    "id": 50,
    "country": "Bangladesh",
    "test_win_rate": 90.5,
    "test_matches": 8,
    "odi_win_rate": 76.4,
    "t20_win_rate": 65.4,
    "lat": 23.7,
    "lon": 90.4
  },
  {
    "id": 586,
    "country": "West Indies",
    "test_win_rate": 62.1,
    "test_matches": 109,
    "odi_win_rate": 71.3,
    "t20_win_rate": 63.2,
    "lat": 13.1,
    "lon": -59.6
  }
];
const D_RANKING_ALL = [
  { "year": 2007, "format": "Test", "rank": 1 },
  { "year": 2008, "format": "Test", "rank": 2 },
  { "year": 2009, "format": "Test", "rank": 2 },
  { "year": 2010, "format": "Test", "rank": 3 },
  { "year": 2011, "format": "Test", "rank": 4 },
  { "year": 2012, "format": "Test", "rank": 2 },
  { "year": 2013, "format": "Test", "rank": 1 },
  { "year": 2014, "format": "Test", "rank": 2 },
  { "year": 2015, "format": "Test", "rank": 2 },
  { "year": 2016, "format": "Test", "rank": 3 },
  { "year": 2017, "format": "Test", "rank": 1 },
  { "year": 2018, "format": "Test", "rank": 5 },
  { "year": 2019, "format": "Test", "rank": 5 },
  { "year": 2020, "format": "Test", "rank": 3 },
  { "year": 2021, "format": "Test", "rank": 1 },
  { "year": 2022, "format": "Test", "rank": 1 },
  { "year": 2023, "format": "Test", "rank": 2 },
  { "year": 2024, "format": "Test", "rank": 1 },
  { "year": 2007, "format": "ODI", "rank": 2 },
  { "year": 2008, "format": "ODI", "rank": 1 },
  { "year": 2009, "format": "ODI", "rank": 2 },
  { "year": 2010, "format": "ODI", "rank": 3 },
  { "year": 2011, "format": "ODI", "rank": 2 },
  { "year": 2012, "format": "ODI", "rank": 3 },
  { "year": 2013, "format": "ODI", "rank": 4 },
  { "year": 2014, "format": "ODI", "rank": 3 },
  { "year": 2015, "format": "ODI", "rank": 1 },
  { "year": 2016, "format": "ODI", "rank": 2 },
  { "year": 2017, "format": "ODI", "rank": 2 },
  { "year": 2018, "format": "ODI", "rank": 3 },
  { "year": 2019, "format": "ODI", "rank": 4 },
  { "year": 2020, "format": "ODI", "rank": 3 },
  { "year": 2021, "format": "ODI", "rank": 2 },
  { "year": 2022, "format": "ODI", "rank": 3 },
  { "year": 2023, "format": "ODI", "rank": 1 },
  { "year": 2024, "format": "ODI", "rank": 2 },
  { "year": 2007, "format": "T20I", "rank": 3 },
  { "year": 2008, "format": "T20I", "rank": 4 },
  { "year": 2009, "format": "T20I", "rank": 3 },
  { "year": 2010, "format": "T20I", "rank": 2 },
  { "year": 2011, "format": "T20I", "rank": 3 },
  { "year": 2012, "format": "T20I", "rank": 4 },
  { "year": 2013, "format": "T20I", "rank": 3 },
  { "year": 2014, "format": "T20I", "rank": 4 },
  { "year": 2015, "format": "T20I", "rank": 3 },
  { "year": 2016, "format": "T20I", "rank": 5 },
  { "year": 2017, "format": "T20I", "rank": 4 },
  { "year": 2018, "format": "T20I", "rank": 3 },
  { "year": 2019, "format": "T20I", "rank": 4 },
  { "year": 2020, "format": "T20I", "rank": 3 },
  { "year": 2021, "format": "T20I", "rank": 1 },
  { "year": 2022, "format": "T20I", "rank": 2 },
  { "year": 2023, "format": "T20I", "rank": 3 },
  { "year": 2024, "format": "T20I", "rank": 2 }
];
const D_RANK_ANNOTATIONS = [
  { "year": 2015, "rank": 0.6, "label": "ODI WC Win", "format": "ODI" },
  { "year": 2018, "rank": 5.2, "label": "Cape Town scandal", "format": "Test" },
  { "year": 2021, "rank": 0.6, "label": "T20 WC Win", "format": "T20I" },
  { "year": 2023, "rank": 0.6, "label": "ODI WC Win", "format": "ODI" },
  { "year": 2013, "rank": 0.6, "label": "Ashes 5-0", "format": "Test" }
];
const CAL_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const CAL_YEARS = Array.from({ length: 15 }, (_, i) => 2010 + i);
const D_CALENDAR = [
  {
    "year": 2010,
    "month": "Jan",
    "month_num": 1,
    "matches": 7,
    "wins": 2,
    "losses": 0,
    "draws": 5,
    "win_pct": 29
  },
  {
    "year": 2010,
    "month": "Feb",
    "month_num": 2,
    "matches": 7,
    "wins": 4,
    "losses": 1,
    "draws": 2,
    "win_pct": 57
  },
  {
    "year": 2010,
    "month": "Mar",
    "month_num": 3,
    "matches": 3,
    "wins": 1,
    "losses": 2,
    "draws": 0,
    "win_pct": 33
  },
  {
    "year": 2010,
    "month": "May",
    "month_num": 5,
    "matches": 4,
    "wins": 1,
    "losses": 3,
    "draws": 0,
    "win_pct": 25
  },
  {
    "year": 2010,
    "month": "Sep",
    "month_num": 9,
    "matches": 1,
    "wins": 0,
    "losses": 0,
    "draws": 1,
    "win_pct": 0
  },
  {
    "year": 2010,
    "month": "Oct",
    "month_num": 10,
    "matches": 6,
    "wins": 3,
    "losses": 3,
    "draws": 0,
    "win_pct": 50
  },
  {
    "year": 2010,
    "month": "Nov",
    "month_num": 11,
    "matches": 3,
    "wins": 2,
    "losses": 1,
    "draws": 0,
    "win_pct": 67
  },
  {
    "year": 2010,
    "month": "Dec",
    "month_num": 12,
    "matches": 8,
    "wins": 3,
    "losses": 1,
    "draws": 4,
    "win_pct": 38
  },
  {
    "year": 2011,
    "month": "Jan",
    "month_num": 1,
    "matches": 7,
    "wins": 5,
    "losses": 1,
    "draws": 1,
    "win_pct": 71
  },
  {
    "year": 2011,
    "month": "Feb",
    "month_num": 2,
    "matches": 4,
    "wins": 2,
    "losses": 0,
    "draws": 2,
    "win_pct": 50
  },
  {
    "year": 2011,
    "month": "Mar",
    "month_num": 3,
    "matches": 8,
    "wins": 5,
    "losses": 0,
    "draws": 3,
    "win_pct": 62
  },
  {
    "year": 2011,
    "month": "May",
    "month_num": 5,
    "matches": 3,
    "wins": 1,
    "losses": 1,
    "draws": 1,
    "win_pct": 33
  },
  {
    "year": 2011,
    "month": "Jun",
    "month_num": 6,
    "matches": 2,
    "wins": 2,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2011,
    "month": "Aug",
    "month_num": 8,
    "matches": 3,
    "wins": 3,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2011,
    "month": "Sep",
    "month_num": 9,
    "matches": 3,
    "wins": 1,
    "losses": 2,
    "draws": 0,
    "win_pct": 33
  },
  {
    "year": 2011,
    "month": "Oct",
    "month_num": 10,
    "matches": 4,
    "wins": 3,
    "losses": 0,
    "draws": 1,
    "win_pct": 75
  },
  {
    "year": 2011,
    "month": "Nov",
    "month_num": 11,
    "matches": 7,
    "wins": 2,
    "losses": 0,
    "draws": 5,
    "win_pct": 29
  },
  {
    "year": 2011,
    "month": "Dec",
    "month_num": 12,
    "matches": 7,
    "wins": 3,
    "losses": 2,
    "draws": 2,
    "win_pct": 43
  },
  {
    "year": 2012,
    "month": "Jan",
    "month_num": 1,
    "matches": 2,
    "wins": 0,
    "losses": 0,
    "draws": 2,
    "win_pct": 0
  },
  {
    "year": 2012,
    "month": "Feb",
    "month_num": 2,
    "matches": 5,
    "wins": 4,
    "losses": 1,
    "draws": 0,
    "win_pct": 80
  },
  {
    "year": 2012,
    "month": "Mar",
    "month_num": 3,
    "matches": 7,
    "wins": 4,
    "losses": 1,
    "draws": 2,
    "win_pct": 57
  },
  {
    "year": 2012,
    "month": "Apr",
    "month_num": 4,
    "matches": 2,
    "wins": 1,
    "losses": 0,
    "draws": 1,
    "win_pct": 50
  },
  {
    "year": 2012,
    "month": "May",
    "month_num": 5,
    "matches": 2,
    "wins": 2,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2012,
    "month": "Jun",
    "month_num": 6,
    "matches": 4,
    "wins": 2,
    "losses": 2,
    "draws": 0,
    "win_pct": 50
  },
  {
    "year": 2012,
    "month": "Jul",
    "month_num": 7,
    "matches": 1,
    "wins": 0,
    "losses": 1,
    "draws": 0,
    "win_pct": 0
  },
  {
    "year": 2012,
    "month": "Aug",
    "month_num": 8,
    "matches": 3,
    "wins": 2,
    "losses": 0,
    "draws": 1,
    "win_pct": 67
  },
  {
    "year": 2012,
    "month": "Sep",
    "month_num": 9,
    "matches": 2,
    "wins": 0,
    "losses": 0,
    "draws": 2,
    "win_pct": 0
  },
  {
    "year": 2012,
    "month": "Oct",
    "month_num": 10,
    "matches": 8,
    "wins": 3,
    "losses": 2,
    "draws": 3,
    "win_pct": 38
  },
  {
    "year": 2012,
    "month": "Nov",
    "month_num": 11,
    "matches": 5,
    "wins": 4,
    "losses": 0,
    "draws": 1,
    "win_pct": 80
  },
  {
    "year": 2012,
    "month": "Dec",
    "month_num": 12,
    "matches": 3,
    "wins": 3,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2013,
    "month": "Jan",
    "month_num": 1,
    "matches": 3,
    "wins": 3,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2013,
    "month": "Feb",
    "month_num": 2,
    "matches": 5,
    "wins": 5,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2013,
    "month": "Mar",
    "month_num": 3,
    "matches": 4,
    "wins": 2,
    "losses": 0,
    "draws": 2,
    "win_pct": 50
  },
  {
    "year": 2013,
    "month": "Apr",
    "month_num": 4,
    "matches": 4,
    "wins": 3,
    "losses": 1,
    "draws": 0,
    "win_pct": 75
  },
  {
    "year": 2013,
    "month": "May",
    "month_num": 5,
    "matches": 4,
    "wins": 4,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2013,
    "month": "Jun",
    "month_num": 6,
    "matches": 1,
    "wins": 0,
    "losses": 1,
    "draws": 0,
    "win_pct": 0
  },
  {
    "year": 2013,
    "month": "Oct",
    "month_num": 10,
    "matches": 3,
    "wins": 3,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2013,
    "month": "Nov",
    "month_num": 11,
    "matches": 8,
    "wins": 8,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2013,
    "month": "Dec",
    "month_num": 12,
    "matches": 6,
    "wins": 2,
    "losses": 3,
    "draws": 1,
    "win_pct": 33
  },
  {
    "year": 2014,
    "month": "Jan",
    "month_num": 1,
    "matches": 5,
    "wins": 5,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2014,
    "month": "Feb",
    "month_num": 2,
    "matches": 6,
    "wins": 2,
    "losses": 0,
    "draws": 4,
    "win_pct": 33
  },
  {
    "year": 2014,
    "month": "Mar",
    "month_num": 3,
    "matches": 7,
    "wins": 6,
    "losses": 1,
    "draws": 0,
    "win_pct": 86
  },
  {
    "year": 2014,
    "month": "Apr",
    "month_num": 4,
    "matches": 2,
    "wins": 0,
    "losses": 1,
    "draws": 1,
    "win_pct": 0
  },
  {
    "year": 2014,
    "month": "May",
    "month_num": 5,
    "matches": 3,
    "wins": 1,
    "losses": 1,
    "draws": 1,
    "win_pct": 33
  },
  {
    "year": 2014,
    "month": "Jul",
    "month_num": 7,
    "matches": 2,
    "wins": 2,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2014,
    "month": "Aug",
    "month_num": 8,
    "matches": 4,
    "wins": 1,
    "losses": 2,
    "draws": 1,
    "win_pct": 25
  },
  {
    "year": 2014,
    "month": "Sep",
    "month_num": 9,
    "matches": 4,
    "wins": 2,
    "losses": 0,
    "draws": 2,
    "win_pct": 50
  },
  {
    "year": 2014,
    "month": "Oct",
    "month_num": 10,
    "matches": 4,
    "wins": 2,
    "losses": 2,
    "draws": 0,
    "win_pct": 50
  },
  {
    "year": 2014,
    "month": "Nov",
    "month_num": 11,
    "matches": 8,
    "wins": 7,
    "losses": 0,
    "draws": 1,
    "win_pct": 88
  },
  {
    "year": 2014,
    "month": "Dec",
    "month_num": 12,
    "matches": 6,
    "wins": 4,
    "losses": 1,
    "draws": 1,
    "win_pct": 67
  },
  {
    "year": 2015,
    "month": "Jan",
    "month_num": 1,
    "matches": 2,
    "wins": 0,
    "losses": 1,
    "draws": 1,
    "win_pct": 0
  },
  {
    "year": 2015,
    "month": "Feb",
    "month_num": 2,
    "matches": 8,
    "wins": 5,
    "losses": 1,
    "draws": 2,
    "win_pct": 62
  },
  {
    "year": 2015,
    "month": "Mar",
    "month_num": 3,
    "matches": 2,
    "wins": 0,
    "losses": 2,
    "draws": 0,
    "win_pct": 0
  },
  {
    "year": 2015,
    "month": "Jun",
    "month_num": 6,
    "matches": 3,
    "wins": 1,
    "losses": 2,
    "draws": 0,
    "win_pct": 33
  },
  {
    "year": 2015,
    "month": "Jul",
    "month_num": 7,
    "matches": 1,
    "wins": 0,
    "losses": 1,
    "draws": 0,
    "win_pct": 0
  },
  {
    "year": 2015,
    "month": "Aug",
    "month_num": 8,
    "matches": 4,
    "wins": 2,
    "losses": 1,
    "draws": 1,
    "win_pct": 50
  },
  {
    "year": 2015,
    "month": "Sep",
    "month_num": 9,
    "matches": 4,
    "wins": 4,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2015,
    "month": "Oct",
    "month_num": 10,
    "matches": 6,
    "wins": 3,
    "losses": 2,
    "draws": 1,
    "win_pct": 50
  },
  {
    "year": 2015,
    "month": "Nov",
    "month_num": 11,
    "matches": 5,
    "wins": 4,
    "losses": 1,
    "draws": 0,
    "win_pct": 80
  },
  {
    "year": 2015,
    "month": "Dec",
    "month_num": 12,
    "matches": 6,
    "wins": 5,
    "losses": 0,
    "draws": 1,
    "win_pct": 83
  },
  {
    "year": 2016,
    "month": "Jan",
    "month_num": 1,
    "matches": 3,
    "wins": 1,
    "losses": 0,
    "draws": 2,
    "win_pct": 33
  },
  {
    "year": 2016,
    "month": "Feb",
    "month_num": 2,
    "matches": 4,
    "wins": 1,
    "losses": 1,
    "draws": 2,
    "win_pct": 25
  },
  {
    "year": 2016,
    "month": "Mar",
    "month_num": 3,
    "matches": 6,
    "wins": 3,
    "losses": 0,
    "draws": 3,
    "win_pct": 50
  },
  {
    "year": 2016,
    "month": "Jun",
    "month_num": 6,
    "matches": 1,
    "wins": 0,
    "losses": 0,
    "draws": 1,
    "win_pct": 0
  },
  {
    "year": 2016,
    "month": "Jul",
    "month_num": 7,
    "matches": 2,
    "wins": 0,
    "losses": 2,
    "draws": 0,
    "win_pct": 0
  },
  {
    "year": 2016,
    "month": "Aug",
    "month_num": 8,
    "matches": 1,
    "wins": 1,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2016,
    "month": "Sep",
    "month_num": 9,
    "matches": 1,
    "wins": 0,
    "losses": 1,
    "draws": 0,
    "win_pct": 0
  },
  {
    "year": 2016,
    "month": "Oct",
    "month_num": 10,
    "matches": 3,
    "wins": 2,
    "losses": 1,
    "draws": 0,
    "win_pct": 67
  },
  {
    "year": 2016,
    "month": "Nov",
    "month_num": 11,
    "matches": 3,
    "wins": 1,
    "losses": 0,
    "draws": 2,
    "win_pct": 33
  },
  {
    "year": 2016,
    "month": "Dec",
    "month_num": 12,
    "matches": 7,
    "wins": 5,
    "losses": 1,
    "draws": 1,
    "win_pct": 71
  },
  {
    "year": 2017,
    "month": "Jan",
    "month_num": 1,
    "matches": 5,
    "wins": 5,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2017,
    "month": "Feb",
    "month_num": 2,
    "matches": 8,
    "wins": 8,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2017,
    "month": "Mar",
    "month_num": 3,
    "matches": 7,
    "wins": 7,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2017,
    "month": "May",
    "month_num": 5,
    "matches": 3,
    "wins": 3,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2017,
    "month": "Jul",
    "month_num": 7,
    "matches": 1,
    "wins": 0,
    "losses": 0,
    "draws": 1,
    "win_pct": 0
  },
  {
    "year": 2017,
    "month": "Aug",
    "month_num": 8,
    "matches": 4,
    "wins": 4,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2017,
    "month": "Sep",
    "month_num": 9,
    "matches": 3,
    "wins": 1,
    "losses": 1,
    "draws": 1,
    "win_pct": 33
  },
  {
    "year": 2017,
    "month": "Oct",
    "month_num": 10,
    "matches": 5,
    "wins": 3,
    "losses": 0,
    "draws": 2,
    "win_pct": 60
  },
  {
    "year": 2017,
    "month": "Nov",
    "month_num": 11,
    "matches": 5,
    "wins": 2,
    "losses": 0,
    "draws": 3,
    "win_pct": 40
  },
  {
    "year": 2017,
    "month": "Dec",
    "month_num": 12,
    "matches": 7,
    "wins": 6,
    "losses": 0,
    "draws": 1,
    "win_pct": 86
  },
  {
    "year": 2018,
    "month": "Jan",
    "month_num": 1,
    "matches": 2,
    "wins": 0,
    "losses": 0,
    "draws": 2,
    "win_pct": 0
  },
  {
    "year": 2018,
    "month": "Feb",
    "month_num": 2,
    "matches": 5,
    "wins": 5,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2018,
    "month": "Mar",
    "month_num": 3,
    "matches": 3,
    "wins": 2,
    "losses": 0,
    "draws": 1,
    "win_pct": 67
  },
  {
    "year": 2018,
    "month": "Apr",
    "month_num": 4,
    "matches": 1,
    "wins": 1,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2018,
    "month": "May",
    "month_num": 5,
    "matches": 3,
    "wins": 2,
    "losses": 1,
    "draws": 0,
    "win_pct": 67
  },
  {
    "year": 2018,
    "month": "Jun",
    "month_num": 6,
    "matches": 2,
    "wins": 1,
    "losses": 1,
    "draws": 0,
    "win_pct": 50
  },
  {
    "year": 2018,
    "month": "Jul",
    "month_num": 7,
    "matches": 1,
    "wins": 0,
    "losses": 1,
    "draws": 0,
    "win_pct": 0
  },
  {
    "year": 2018,
    "month": "Aug",
    "month_num": 8,
    "matches": 1,
    "wins": 0,
    "losses": 0,
    "draws": 1,
    "win_pct": 0
  },
  {
    "year": 2018,
    "month": "Sep",
    "month_num": 9,
    "matches": 2,
    "wins": 0,
    "losses": 0,
    "draws": 2,
    "win_pct": 0
  },
  {
    "year": 2018,
    "month": "Oct",
    "month_num": 10,
    "matches": 6,
    "wins": 5,
    "losses": 0,
    "draws": 1,
    "win_pct": 83
  },
  {
    "year": 2018,
    "month": "Nov",
    "month_num": 11,
    "matches": 2,
    "wins": 2,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2018,
    "month": "Dec",
    "month_num": 12,
    "matches": 8,
    "wins": 4,
    "losses": 0,
    "draws": 4,
    "win_pct": 50
  },
  {
    "year": 2019,
    "month": "Jan",
    "month_num": 1,
    "matches": 6,
    "wins": 2,
    "losses": 1,
    "draws": 3,
    "win_pct": 33
  },
  {
    "year": 2019,
    "month": "Feb",
    "month_num": 2,
    "matches": 5,
    "wins": 2,
    "losses": 1,
    "draws": 2,
    "win_pct": 40
  },
  {
    "year": 2019,
    "month": "Mar",
    "month_num": 3,
    "matches": 6,
    "wins": 6,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2019,
    "month": "Apr",
    "month_num": 4,
    "matches": 4,
    "wins": 1,
    "losses": 3,
    "draws": 0,
    "win_pct": 25
  },
  {
    "year": 2019,
    "month": "May",
    "month_num": 5,
    "matches": 4,
    "wins": 3,
    "losses": 1,
    "draws": 0,
    "win_pct": 75
  },
  {
    "year": 2019,
    "month": "Jun",
    "month_num": 6,
    "matches": 1,
    "wins": 1,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2019,
    "month": "Jul",
    "month_num": 7,
    "matches": 2,
    "wins": 1,
    "losses": 0,
    "draws": 1,
    "win_pct": 50
  },
  {
    "year": 2019,
    "month": "Aug",
    "month_num": 8,
    "matches": 2,
    "wins": 1,
    "losses": 1,
    "draws": 0,
    "win_pct": 50
  },
  {
    "year": 2019,
    "month": "Oct",
    "month_num": 10,
    "matches": 2,
    "wins": 1,
    "losses": 0,
    "draws": 1,
    "win_pct": 50
  },
  {
    "year": 2019,
    "month": "Nov",
    "month_num": 11,
    "matches": 2,
    "wins": 2,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2019,
    "month": "Dec",
    "month_num": 12,
    "matches": 6,
    "wins": 4,
    "losses": 0,
    "draws": 2,
    "win_pct": 67
  },
  {
    "year": 2020,
    "month": "Jan",
    "month_num": 1,
    "matches": 4,
    "wins": 1,
    "losses": 1,
    "draws": 2,
    "win_pct": 25
  },
  {
    "year": 2020,
    "month": "Feb",
    "month_num": 2,
    "matches": 4,
    "wins": 3,
    "losses": 0,
    "draws": 1,
    "win_pct": 75
  },
  {
    "year": 2020,
    "month": "Mar",
    "month_num": 3,
    "matches": 5,
    "wins": 4,
    "losses": 0,
    "draws": 1,
    "win_pct": 80
  },
  {
    "year": 2020,
    "month": "Apr",
    "month_num": 4,
    "matches": 4,
    "wins": 3,
    "losses": 0,
    "draws": 1,
    "win_pct": 75
  },
  {
    "year": 2020,
    "month": "May",
    "month_num": 5,
    "matches": 1,
    "wins": 1,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2020,
    "month": "Jul",
    "month_num": 7,
    "matches": 4,
    "wins": 2,
    "losses": 1,
    "draws": 1,
    "win_pct": 50
  },
  {
    "year": 2020,
    "month": "Aug",
    "month_num": 8,
    "matches": 2,
    "wins": 2,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2020,
    "month": "Sep",
    "month_num": 9,
    "matches": 2,
    "wins": 0,
    "losses": 2,
    "draws": 0,
    "win_pct": 0
  },
  {
    "year": 2020,
    "month": "Oct",
    "month_num": 10,
    "matches": 7,
    "wins": 4,
    "losses": 3,
    "draws": 0,
    "win_pct": 57
  },
  {
    "year": 2020,
    "month": "Nov",
    "month_num": 11,
    "matches": 4,
    "wins": 1,
    "losses": 0,
    "draws": 3,
    "win_pct": 25
  },
  {
    "year": 2020,
    "month": "Dec",
    "month_num": 12,
    "matches": 7,
    "wins": 5,
    "losses": 1,
    "draws": 1,
    "win_pct": 71
  },
  {
    "year": 2021,
    "month": "Jan",
    "month_num": 1,
    "matches": 2,
    "wins": 0,
    "losses": 1,
    "draws": 1,
    "win_pct": 0
  },
  {
    "year": 2021,
    "month": "Feb",
    "month_num": 2,
    "matches": 8,
    "wins": 4,
    "losses": 2,
    "draws": 2,
    "win_pct": 50
  },
  {
    "year": 2021,
    "month": "Mar",
    "month_num": 3,
    "matches": 3,
    "wins": 3,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2021,
    "month": "Apr",
    "month_num": 4,
    "matches": 4,
    "wins": 4,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2021,
    "month": "Jul",
    "month_num": 7,
    "matches": 1,
    "wins": 0,
    "losses": 1,
    "draws": 0,
    "win_pct": 0
  },
  {
    "year": 2021,
    "month": "Aug",
    "month_num": 8,
    "matches": 4,
    "wins": 2,
    "losses": 1,
    "draws": 1,
    "win_pct": 50
  },
  {
    "year": 2021,
    "month": "Sep",
    "month_num": 9,
    "matches": 1,
    "wins": 0,
    "losses": 1,
    "draws": 0,
    "win_pct": 0
  },
  {
    "year": 2021,
    "month": "Oct",
    "month_num": 10,
    "matches": 4,
    "wins": 1,
    "losses": 2,
    "draws": 1,
    "win_pct": 25
  },
  {
    "year": 2021,
    "month": "Nov",
    "month_num": 11,
    "matches": 3,
    "wins": 3,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2021,
    "month": "Dec",
    "month_num": 12,
    "matches": 7,
    "wins": 2,
    "losses": 2,
    "draws": 3,
    "win_pct": 29
  },
  {
    "year": 2022,
    "month": "Jan",
    "month_num": 1,
    "matches": 8,
    "wins": 7,
    "losses": 1,
    "draws": 0,
    "win_pct": 88
  },
  {
    "year": 2022,
    "month": "Feb",
    "month_num": 2,
    "matches": 6,
    "wins": 3,
    "losses": 1,
    "draws": 2,
    "win_pct": 50
  },
  {
    "year": 2022,
    "month": "Mar",
    "month_num": 3,
    "matches": 8,
    "wins": 4,
    "losses": 1,
    "draws": 3,
    "win_pct": 50
  },
  {
    "year": 2022,
    "month": "Apr",
    "month_num": 4,
    "matches": 3,
    "wins": 1,
    "losses": 0,
    "draws": 2,
    "win_pct": 33
  },
  {
    "year": 2022,
    "month": "May",
    "month_num": 5,
    "matches": 2,
    "wins": 1,
    "losses": 0,
    "draws": 1,
    "win_pct": 50
  },
  {
    "year": 2022,
    "month": "Jun",
    "month_num": 6,
    "matches": 2,
    "wins": 0,
    "losses": 2,
    "draws": 0,
    "win_pct": 0
  },
  {
    "year": 2022,
    "month": "Aug",
    "month_num": 8,
    "matches": 3,
    "wins": 1,
    "losses": 1,
    "draws": 1,
    "win_pct": 33
  },
  {
    "year": 2022,
    "month": "Sep",
    "month_num": 9,
    "matches": 1,
    "wins": 0,
    "losses": 1,
    "draws": 0,
    "win_pct": 0
  },
  {
    "year": 2022,
    "month": "Oct",
    "month_num": 10,
    "matches": 4,
    "wins": 3,
    "losses": 0,
    "draws": 1,
    "win_pct": 75
  },
  {
    "year": 2022,
    "month": "Nov",
    "month_num": 11,
    "matches": 3,
    "wins": 1,
    "losses": 2,
    "draws": 0,
    "win_pct": 33
  },
  {
    "year": 2022,
    "month": "Dec",
    "month_num": 12,
    "matches": 3,
    "wins": 2,
    "losses": 1,
    "draws": 0,
    "win_pct": 67
  },
  {
    "year": 2023,
    "month": "Jan",
    "month_num": 1,
    "matches": 4,
    "wins": 1,
    "losses": 2,
    "draws": 1,
    "win_pct": 25
  },
  {
    "year": 2023,
    "month": "Feb",
    "month_num": 2,
    "matches": 4,
    "wins": 4,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2023,
    "month": "Mar",
    "month_num": 3,
    "matches": 2,
    "wins": 0,
    "losses": 1,
    "draws": 1,
    "win_pct": 0
  },
  {
    "year": 2023,
    "month": "Apr",
    "month_num": 4,
    "matches": 1,
    "wins": 1,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2023,
    "month": "Jun",
    "month_num": 6,
    "matches": 4,
    "wins": 4,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2023,
    "month": "Jul",
    "month_num": 7,
    "matches": 2,
    "wins": 1,
    "losses": 0,
    "draws": 1,
    "win_pct": 50
  },
  {
    "year": 2023,
    "month": "Aug",
    "month_num": 8,
    "matches": 3,
    "wins": 3,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2023,
    "month": "Sep",
    "month_num": 9,
    "matches": 2,
    "wins": 0,
    "losses": 2,
    "draws": 0,
    "win_pct": 0
  },
  {
    "year": 2023,
    "month": "Oct",
    "month_num": 10,
    "matches": 5,
    "wins": 2,
    "losses": 1,
    "draws": 2,
    "win_pct": 40
  },
  {
    "year": 2023,
    "month": "Nov",
    "month_num": 11,
    "matches": 4,
    "wins": 4,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2023,
    "month": "Dec",
    "month_num": 12,
    "matches": 7,
    "wins": 4,
    "losses": 2,
    "draws": 1,
    "win_pct": 57
  },
  {
    "year": 2024,
    "month": "Jan",
    "month_num": 1,
    "matches": 7,
    "wins": 2,
    "losses": 5,
    "draws": 0,
    "win_pct": 29
  },
  {
    "year": 2024,
    "month": "Feb",
    "month_num": 2,
    "matches": 4,
    "wins": 3,
    "losses": 1,
    "draws": 0,
    "win_pct": 75
  },
  {
    "year": 2024,
    "month": "Mar",
    "month_num": 3,
    "matches": 4,
    "wins": 4,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2024,
    "month": "Apr",
    "month_num": 4,
    "matches": 4,
    "wins": 2,
    "losses": 0,
    "draws": 2,
    "win_pct": 50
  },
  {
    "year": 2024,
    "month": "May",
    "month_num": 5,
    "matches": 3,
    "wins": 3,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2024,
    "month": "Jun",
    "month_num": 6,
    "matches": 1,
    "wins": 1,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2024,
    "month": "Jul",
    "month_num": 7,
    "matches": 4,
    "wins": 1,
    "losses": 2,
    "draws": 1,
    "win_pct": 25
  },
  {
    "year": 2024,
    "month": "Aug",
    "month_num": 8,
    "matches": 2,
    "wins": 0,
    "losses": 1,
    "draws": 1,
    "win_pct": 0
  },
  {
    "year": 2024,
    "month": "Sep",
    "month_num": 9,
    "matches": 4,
    "wins": 3,
    "losses": 1,
    "draws": 0,
    "win_pct": 75
  },
  {
    "year": 2024,
    "month": "Oct",
    "month_num": 10,
    "matches": 5,
    "wins": 5,
    "losses": 0,
    "draws": 0,
    "win_pct": 100
  },
  {
    "year": 2024,
    "month": "Nov",
    "month_num": 11,
    "matches": 6,
    "wins": 5,
    "losses": 0,
    "draws": 1,
    "win_pct": 83
  },
  {
    "year": 2024,
    "month": "Dec",
    "month_num": 12,
    "matches": 7,
    "wins": 2,
    "losses": 2,
    "draws": 3,
    "win_pct": 29
  }
];
const D_CALENDAR_DISPLAY = [];
CAL_YEARS.forEach((y) => {
  CAL_MONTHS.forEach((m, idx) => {
    const found = D_CALENDAR.find((d) => d.year === y && d.month === m);
    if (found) {
      D_CALENDAR_DISPLAY.push({
        ...found,
        no_play: false,
        label: String(found.win_pct)
      });
    } else {
      D_CALENDAR_DISPLAY.push({
        year: y,
        month: m,
        month_num: idx + 1,
        matches: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        win_pct: null,
        no_play: true,
        label: "None"
      });
    }
  });
});
const D_BOX = [
  {
    "player": "Don Bradman",
    "min_runs": 0,
    "q1": 22,
    "median": 62,
    "mean": 100,
    "q3": 110,
    "max_runs": 334
  },
  {
    "player": "Steve Smith",
    "min_runs": 1,
    "q1": 13,
    "median": 37,
    "mean": 59,
    "q3": 65,
    "max_runs": 239
  },
  {
    "player": "Ricky Ponting",
    "min_runs": 3,
    "q1": 11,
    "median": 32,
    "mean": 52,
    "q3": 57,
    "max_runs": 257
  },
  {
    "player": "Greg Chappell",
    "min_runs": 5,
    "q1": 12,
    "median": 33,
    "mean": 54,
    "q3": 59,
    "max_runs": 247
  },
  {
    "player": "Matthew Hayden",
    "min_runs": 0,
    "q1": 11,
    "median": 31,
    "mean": 51,
    "q3": 56,
    "max_runs": 380
  },
  {
    "player": "David Warner",
    "min_runs": 2,
    "q1": 10,
    "median": 28,
    "mean": 45,
    "q3": 49,
    "max_runs": 335
  },
  {
    "player": "Allan Border",
    "min_runs": 11,
    "q1": 11,
    "median": 31,
    "mean": 51,
    "q3": 56,
    "max_runs": 205
  },
  {
    "player": "Michael Clarke",
    "min_runs": 8,
    "q1": 11,
    "median": 30,
    "mean": 49,
    "q3": 54,
    "max_runs": 329
  }
];
const D_CAPTAINS = [
  {
    "captain": "Ricky Ponting",
    "matches": 168,
    "win_pct": 62,
    "batting_avg": 51.85,
    "wc_titles": 2,
    "ashes_series": 4,
    "test_runs": 13378,
    "era": "1995-2012",
    "photo": "ponting"
  },
  {
    "captain": "Steve Waugh",
    "matches": 168,
    "win_pct": 58,
    "batting_avg": 51.06,
    "wc_titles": 1,
    "ashes_series": 3,
    "test_runs": 10927,
    "era": "1985-2004",
    "photo": "waugh"
  },
  {
    "captain": "Allan Border",
    "matches": 156,
    "win_pct": 32,
    "batting_avg": 50.56,
    "wc_titles": 1,
    "ashes_series": 2,
    "test_runs": 11174,
    "era": "1978-1994",
    "photo": "border"
  },
  {
    "captain": "Michael Clarke",
    "matches": 115,
    "win_pct": 53,
    "batting_avg": 49.1,
    "wc_titles": 1,
    "ashes_series": 2,
    "test_runs": 8643,
    "era": "2004-2015",
    "photo": "clarke"
  },
  {
    "captain": "Pat Cummins",
    "matches": 68,
    "win_pct": 61,
    "batting_avg": 15.2,
    "wc_titles": 2,
    "ashes_series": 2,
    "test_runs": 850,
    "era": "2021-present",
    "photo": "cummins"
  },
  {
    "captain": "Mark Taylor",
    "matches": 104,
    "win_pct": 42,
    "batting_avg": 43.49,
    "wc_titles": 0,
    "ashes_series": 2,
    "test_runs": 7525,
    "era": "1989-1999",
    "photo": "taylor"
  }
];
const D_RADAR = [
  { "captain": "Ricky Ponting", "metric": "Win %", "value": 85 },
  { "captain": "Ricky Ponting", "metric": "Batting Avg", "value": 90 },
  { "captain": "Ricky Ponting", "metric": "WC Titles", "value": 100 },
  { "captain": "Ricky Ponting", "metric": "Ashes Wins", "value": 100 },
  { "captain": "Ricky Ponting", "metric": "Tests Led", "value": 100 },
  { "captain": "Ricky Ponting", "metric": "Runs Scored", "value": 100 },
  { "captain": "Steve Waugh", "metric": "Win %", "value": 78 },
  { "captain": "Steve Waugh", "metric": "Batting Avg", "value": 88 },
  { "captain": "Steve Waugh", "metric": "WC Titles", "value": 50 },
  { "captain": "Steve Waugh", "metric": "Ashes Wins", "value": 75 },
  { "captain": "Steve Waugh", "metric": "Tests Led", "value": 100 },
  { "captain": "Steve Waugh", "metric": "Runs Scored", "value": 92 },
  { "captain": "Allan Border", "metric": "Win %", "value": 42 },
  { "captain": "Allan Border", "metric": "Batting Avg", "value": 87 },
  { "captain": "Allan Border", "metric": "WC Titles", "value": 50 },
  { "captain": "Allan Border", "metric": "Ashes Wins", "value": 50 },
  { "captain": "Allan Border", "metric": "Tests Led", "value": 98 },
  { "captain": "Allan Border", "metric": "Runs Scored", "value": 94 },
  { "captain": "Michael Clarke", "metric": "Win %", "value": 72 },
  { "captain": "Michael Clarke", "metric": "Batting Avg", "value": 84 },
  { "captain": "Michael Clarke", "metric": "WC Titles", "value": 50 },
  { "captain": "Michael Clarke", "metric": "Ashes Wins", "value": 50 },
  { "captain": "Michael Clarke", "metric": "Tests Led", "value": 72 },
  { "captain": "Michael Clarke", "metric": "Runs Scored", "value": 78 },
  { "captain": "Pat Cummins", "metric": "Win %", "value": 82 },
  { "captain": "Pat Cummins", "metric": "Batting Avg", "value": 22 },
  { "captain": "Pat Cummins", "metric": "WC Titles", "value": 100 },
  { "captain": "Pat Cummins", "metric": "Ashes Wins", "value": 50 },
  { "captain": "Pat Cummins", "metric": "Tests Led", "value": 42 },
  { "captain": "Pat Cummins", "metric": "Runs Scored", "value": 8 },
  { "captain": "Mark Taylor", "metric": "Win %", "value": 55 },
  { "captain": "Mark Taylor", "metric": "Batting Avg", "value": 74 },
  { "captain": "Mark Taylor", "metric": "WC Titles", "value": 0 },
  { "captain": "Mark Taylor", "metric": "Ashes Wins", "value": 50 },
  { "captain": "Mark Taylor", "metric": "Tests Led", "value": 64 },
  { "captain": "Mark Taylor", "metric": "Runs Scored", "value": 68 }
];
const D_BBL_STATE = [
  {
    "state": "New South Wales",
    "abbr": "NSW",
    "teams": "Sydney Sixers, Sydney Thunder",
    "titles": 6,
    "finals": 18,
    "avg_points": 13.2
  },
  {
    "state": "Western Australia",
    "abbr": "WA",
    "teams": "Perth Scorchers",
    "titles": 5,
    "finals": 9,
    "avg_points": 15.1
  },
  {
    "state": "Victoria",
    "abbr": "VIC",
    "teams": "Melbourne Stars, Melbourne Renegades",
    "titles": 1,
    "finals": 7,
    "avg_points": 11.4
  },
  {
    "state": "Queensland",
    "abbr": "QLD",
    "teams": "Brisbane Heat",
    "titles": 1,
    "finals": 5,
    "avg_points": 11.8
  },
  {
    "state": "South Australia",
    "abbr": "SA",
    "teams": "Adelaide Strikers",
    "titles": 1,
    "finals": 4,
    "avg_points": 12.1
  },
  {
    "state": "Tasmania",
    "abbr": "TAS",
    "teams": "Hobart Hurricanes",
    "titles": 0,
    "finals": 3,
    "avg_points": 11.2
  }
];
const D_ASHES_GRID = [
  {
    "decade": "1880s",
    "series": "1882",
    "winner": "Australia",
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 0
  },
  {
    "decade": "1880s",
    "series": "1882-83",
    "winner": "Draw",
    "location": "Australia",
    "aus_wins": 2,
    "eng_wins": 2
  },
  {
    "decade": "1880s",
    "series": "1884",
    "winner": "England",
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 1
  },
  {
    "decade": "1880s",
    "series": "1884-85",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 3,
    "eng_wins": 2
  },
  {
    "decade": "1880s",
    "series": "1886",
    "winner": "England",
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 3
  },
  {
    "decade": "1880s",
    "series": "1886-87",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 2,
    "eng_wins": 0
  },
  {
    "decade": "1880s",
    "series": "1888",
    "winner": "England",
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 2
  },
  {
    "decade": "1890s",
    "series": "1890",
    "winner": "England",
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 2
  },
  {
    "decade": "1890s",
    "series": "1891-92",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 2,
    "eng_wins": 1
  },
  {
    "decade": "1890s",
    "series": "1893",
    "winner": "England",
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 1
  },
  {
    "decade": "1890s",
    "series": "1894-95",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 3,
    "eng_wins": 2
  },
  {
    "decade": "1890s",
    "series": "1896",
    "winner": "England",
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 2
  },
  {
    "decade": "1890s",
    "series": "1897-98",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 4,
    "eng_wins": 1
  },
  {
    "decade": "1900s",
    "series": "1899",
    "winner": "England",
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 1
  },
  {
    "decade": "1900s",
    "series": "1901-02",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 4,
    "eng_wins": 1
  },
  {
    "decade": "1900s",
    "series": "1902",
    "winner": "Australia",
    "location": "England",
    "aus_wins": 2,
    "eng_wins": 1
  },
  {
    "decade": "1900s",
    "series": "1903-04",
    "winner": "England",
    "location": "Australia",
    "aus_wins": 2,
    "eng_wins": 3
  },
  {
    "decade": "1900s",
    "series": "1905",
    "winner": "England",
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 2
  },
  {
    "decade": "1900s",
    "series": "1907-08",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 4,
    "eng_wins": 1
  },
  {
    "decade": "1910s",
    "series": "1909",
    "winner": "Australia",
    "location": "England",
    "aus_wins": 2,
    "eng_wins": 1
  },
  {
    "decade": "1910s",
    "series": "1911-12",
    "winner": "England",
    "location": "Australia",
    "aus_wins": 1,
    "eng_wins": 4
  },
  {
    "decade": "1910s",
    "series": "1912",
    "winner": "England",
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 1
  },
  {
    "decade": "1920s",
    "series": "1920-21",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 5,
    "eng_wins": 0
  },
  {
    "decade": "1920s",
    "series": "1921",
    "winner": "Australia",
    "location": "England",
    "aus_wins": 3,
    "eng_wins": 0
  },
  {
    "decade": "1920s",
    "series": "1924-25",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 4,
    "eng_wins": 1
  },
  {
    "decade": "1920s",
    "series": "1926",
    "winner": "England",
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 1
  },
  {
    "decade": "1920s",
    "series": "1928-29",
    "winner": "England",
    "location": "Australia",
    "aus_wins": 1,
    "eng_wins": 4
  },
  {
    "decade": "1930s",
    "series": "1930",
    "winner": "Australia",
    "location": "England",
    "aus_wins": 2,
    "eng_wins": 1
  },
  {
    "decade": "1930s",
    "series": "1932-33",
    "winner": "England",
    "location": "Australia",
    "aus_wins": 1,
    "eng_wins": 4
  },
  {
    "decade": "1930s",
    "series": "1934",
    "winner": "Australia",
    "location": "England",
    "aus_wins": 2,
    "eng_wins": 1
  },
  {
    "decade": "1930s",
    "series": "1936-37",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 3,
    "eng_wins": 2
  },
  {
    "decade": "1930s",
    "series": "1938",
    "winner": "Draw",
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 1
  },
  {
    "decade": "1940s",
    "series": "1946-47",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 3,
    "eng_wins": 0
  },
  {
    "decade": "1940s",
    "series": "1948",
    "winner": "Australia",
    "location": "England",
    "aus_wins": 4,
    "eng_wins": 0
  },
  {
    "decade": "1950s",
    "series": "1950-51",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 4,
    "eng_wins": 1
  },
  {
    "decade": "1950s",
    "series": "1953",
    "winner": "England",
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 1
  },
  {
    "decade": "1950s",
    "series": "1954-55",
    "winner": "England",
    "location": "Australia",
    "aus_wins": 1,
    "eng_wins": 3
  },
  {
    "decade": "1950s",
    "series": "1956",
    "winner": "England",
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 2
  },
  {
    "decade": "1950s",
    "series": "1958-59",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 4,
    "eng_wins": 0
  },
  {
    "decade": "1960s",
    "series": "1961",
    "winner": "Australia",
    "location": "England",
    "aus_wins": 2,
    "eng_wins": 1
  },
  {
    "decade": "1960s",
    "series": "1962-63",
    "winner": "Draw",
    "location": "Australia",
    "aus_wins": 1,
    "eng_wins": 1
  },
  {
    "decade": "1960s",
    "series": "1964",
    "winner": "Australia",
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 0
  },
  {
    "decade": "1960s",
    "series": "1965-66",
    "winner": "Draw",
    "location": "Australia",
    "aus_wins": 1,
    "eng_wins": 1
  },
  {
    "decade": "1960s",
    "series": "1968",
    "winner": "Draw",
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 1
  },
  {
    "decade": "1970s",
    "series": "1970-71",
    "winner": "England",
    "location": "Australia",
    "aus_wins": 0,
    "eng_wins": 2
  },
  {
    "decade": "1970s",
    "series": "1972",
    "winner": "Draw",
    "location": "England",
    "aus_wins": 2,
    "eng_wins": 2
  },
  {
    "decade": "1970s",
    "series": "1974-75",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 4,
    "eng_wins": 1
  },
  {
    "decade": "1970s",
    "series": "1975",
    "winner": "Australia",
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 0
  },
  {
    "decade": "1970s",
    "series": "1977",
    "winner": "England",
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 3
  },
  {
    "decade": "1970s",
    "series": "1978-79",
    "winner": "England",
    "location": "Australia",
    "aus_wins": 1,
    "eng_wins": 5
  },
  {
    "decade": "1980s",
    "series": "1979-80",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 3,
    "eng_wins": 0
  },
  {
    "decade": "1980s",
    "series": "1981",
    "winner": "England",
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 3
  },
  {
    "decade": "1980s",
    "series": "1982-83",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 2,
    "eng_wins": 1
  },
  {
    "decade": "1980s",
    "series": "1985",
    "winner": "England",
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 3
  },
  {
    "decade": "1980s",
    "series": "1986-87",
    "winner": "England",
    "location": "Australia",
    "aus_wins": 1,
    "eng_wins": 2
  },
  {
    "decade": "1980s",
    "series": "1989",
    "winner": "Australia",
    "location": "England",
    "aus_wins": 4,
    "eng_wins": 0
  },
  {
    "decade": "1990s",
    "series": "1990-91",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 3,
    "eng_wins": 0
  },
  {
    "decade": "1990s",
    "series": "1993",
    "winner": "Australia",
    "location": "England",
    "aus_wins": 4,
    "eng_wins": 1
  },
  {
    "decade": "1990s",
    "series": "1994-95",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 3,
    "eng_wins": 1
  },
  {
    "decade": "1990s",
    "series": "1997",
    "winner": "Australia",
    "location": "England",
    "aus_wins": 3,
    "eng_wins": 2
  },
  {
    "decade": "1990s",
    "series": "1998-99",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 3,
    "eng_wins": 1
  },
  {
    "decade": "2000s",
    "series": "2001",
    "winner": "Australia",
    "location": "England",
    "aus_wins": 4,
    "eng_wins": 1
  },
  {
    "decade": "2000s",
    "series": "2002-03",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 4,
    "eng_wins": 1
  },
  {
    "decade": "2000s",
    "series": "2005",
    "winner": "England",
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 2
  },
  {
    "decade": "2000s",
    "series": "2006-07",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 5,
    "eng_wins": 0
  },
  {
    "decade": "2000s",
    "series": "2009",
    "winner": "England",
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 2
  },
  {
    "decade": "2010s",
    "series": "2010-11",
    "winner": "England",
    "location": "Australia",
    "aus_wins": 0,
    "eng_wins": 3
  },
  {
    "decade": "2010s",
    "series": "2013",
    "winner": "England",
    "location": "England",
    "aus_wins": 0,
    "eng_wins": 3
  },
  {
    "decade": "2010s",
    "series": "2013-14",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 5,
    "eng_wins": 0
  },
  {
    "decade": "2010s",
    "series": "2015",
    "winner": "England",
    "location": "England",
    "aus_wins": 1,
    "eng_wins": 3
  },
  {
    "decade": "2010s",
    "series": "2017-18",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 4,
    "eng_wins": 0
  },
  {
    "decade": "2020s",
    "series": "2019",
    "winner": "Draw",
    "location": "England",
    "aus_wins": 2,
    "eng_wins": 2
  },
  {
    "decade": "2020s",
    "series": "2021-22",
    "winner": "Australia",
    "location": "Australia",
    "aus_wins": 4,
    "eng_wins": 0
  },
  {
    "decade": "2020s",
    "series": "2023",
    "winner": "Draw",
    "location": "England",
    "aus_wins": 2,
    "eng_wins": 2
  }
];
const D_BBL_DOTS = [
  {
    "id": 0,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 147.732,
    "lat": -34.899,
    "color": "#ff69b4"
  },
  {
    "id": 1,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 145.93,
    "lat": -34.513,
    "color": "#ff69b4"
  },
  {
    "id": 2,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 150.579,
    "lat": -34.491,
    "color": "#ff69b4"
  },
  {
    "id": 3,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 147.565,
    "lat": -31.026,
    "color": "#ff69b4"
  },
  {
    "id": 4,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 148.809,
    "lat": -28.993,
    "color": "#ff69b4"
  },
  {
    "id": 5,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 148.414,
    "lat": -33.127,
    "color": "#ff69b4"
  },
  {
    "id": 6,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 122.359,
    "lat": -29.966,
    "color": "#f47920"
  },
  {
    "id": 7,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 125.824,
    "lat": -27.764,
    "color": "#f47920"
  },
  {
    "id": 8,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 119.657,
    "lat": -23.447,
    "color": "#f47920"
  },
  {
    "id": 9,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 116.827,
    "lat": -23.752,
    "color": "#f47920"
  },
  {
    "id": 10,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 125.2,
    "lat": -28.257,
    "color": "#f47920"
  },
  {
    "id": 11,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 146.734,
    "lat": -37.114,
    "color": "#00a650"
  },
  {
    "id": 12,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 145.872,
    "lat": -37.293,
    "color": "#00a650"
  },
  {
    "id": 13,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 144.013,
    "lat": -37.892,
    "color": "#00a650"
  },
  {
    "id": 14,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 142.038,
    "lat": -38.089,
    "color": "#00a650"
  },
  {
    "id": 15,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 149.875,
    "lat": -21.52,
    "color": "#e4002b"
  },
  {
    "id": 16,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 143.545,
    "lat": -16.397,
    "color": "#e4002b"
  },
  {
    "id": 17,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 145.266,
    "lat": -15.326,
    "color": "#e4002b"
  },
  {
    "id": 18,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 134.36,
    "lat": -32.842,
    "color": "#005aab"
  },
  {
    "id": 19,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 138.866,
    "lat": -33.392,
    "color": "#005aab"
  },
  {
    "id": 20,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 137.835,
    "lat": -29.046,
    "color": "#005aab"
  },
  {
    "id": 21,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 146.914,
    "lat": -35.868,
    "color": "#e5002b"
  },
  {
    "id": 22,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 145.301,
    "lat": -38.589,
    "color": "#e5002b"
  },
  {
    "id": 23,
    "season": "2011-12",
    "season_idx": 0,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 142.117,
    "lat": -37.279,
    "color": "#e5002b"
  },
  {
    "id": 24,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 124.836,
    "lat": -31.864,
    "color": "#f47920"
  },
  {
    "id": 25,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 120.105,
    "lat": -31.796,
    "color": "#f47920"
  },
  {
    "id": 26,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 118.718,
    "lat": -32.921,
    "color": "#f47920"
  },
  {
    "id": 27,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 118.956,
    "lat": -25.672,
    "color": "#f47920"
  },
  {
    "id": 28,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 117.41,
    "lat": -21.979,
    "color": "#f47920"
  },
  {
    "id": 29,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 115.665,
    "lat": -30.04,
    "color": "#f47920"
  },
  {
    "id": 30,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 118.091,
    "lat": -27.343,
    "color": "#f47920"
  },
  {
    "id": 31,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 124.166,
    "lat": -28.047,
    "color": "#f47920"
  },
  {
    "id": 32,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 146.34,
    "lat": -16.089,
    "color": "#e4002b"
  },
  {
    "id": 33,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 139.571,
    "lat": -16.905,
    "color": "#e4002b"
  },
  {
    "id": 34,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 145.196,
    "lat": -18.539,
    "color": "#e4002b"
  },
  {
    "id": 35,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 145.296,
    "lat": -23.284,
    "color": "#e4002b"
  },
  {
    "id": 36,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 139.158,
    "lat": -26.989,
    "color": "#e4002b"
  },
  {
    "id": 37,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 140.09,
    "lat": -26.513,
    "color": "#e4002b"
  },
  {
    "id": 38,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 145.664,
    "lat": -34.839,
    "color": "#ff69b4"
  },
  {
    "id": 39,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 148.988,
    "lat": -30.335,
    "color": "#ff69b4"
  },
  {
    "id": 40,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 150.884,
    "lat": -29.731,
    "color": "#ff69b4"
  },
  {
    "id": 41,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 145.438,
    "lat": -29.921,
    "color": "#ff69b4"
  },
  {
    "id": 42,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 145.988,
    "lat": -35.921,
    "color": "#ff69b4"
  },
  {
    "id": 43,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 146.802,
    "lat": -31.814,
    "color": "#ff69b4"
  },
  {
    "id": 44,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.143,
    "lat": -42.681,
    "color": "#6f2082"
  },
  {
    "id": 45,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.197,
    "lat": -41.226,
    "color": "#6f2082"
  },
  {
    "id": 46,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.198,
    "lat": -42.206,
    "color": "#6f2082"
  },
  {
    "id": 47,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.113,
    "lat": -42.978,
    "color": "#6f2082"
  },
  {
    "id": 48,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 147.639,
    "lat": -40.985,
    "color": "#6f2082"
  },
  {
    "id": 49,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 145.608,
    "lat": -37.504,
    "color": "#00a650"
  },
  {
    "id": 50,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 144.22,
    "lat": -37.766,
    "color": "#00a650"
  },
  {
    "id": 51,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 145.272,
    "lat": -36.74,
    "color": "#00a650"
  },
  {
    "id": 52,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 133.985,
    "lat": -26.258,
    "color": "#005aab"
  },
  {
    "id": 53,
    "season": "2012-13",
    "season_idx": 1,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 137.266,
    "lat": -32.814,
    "color": "#005aab"
  },
  {
    "id": 54,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 124.711,
    "lat": -23.56,
    "color": "#f47920"
  },
  {
    "id": 55,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 117.997,
    "lat": -28.851,
    "color": "#f47920"
  },
  {
    "id": 56,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 124.018,
    "lat": -31.878,
    "color": "#f47920"
  },
  {
    "id": 57,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 120.254,
    "lat": -19.507,
    "color": "#f47920"
  },
  {
    "id": 58,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 118.075,
    "lat": -25.956,
    "color": "#f47920"
  },
  {
    "id": 59,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 125.886,
    "lat": -20.756,
    "color": "#f47920"
  },
  {
    "id": 60,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 124.458,
    "lat": -25.535,
    "color": "#f47920"
  },
  {
    "id": 61,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 147.789,
    "lat": -42.584,
    "color": "#6f2082"
  },
  {
    "id": 62,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 147.645,
    "lat": -42.218,
    "color": "#6f2082"
  },
  {
    "id": 63,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.975,
    "lat": -41.734,
    "color": "#6f2082"
  },
  {
    "id": 64,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.847,
    "lat": -41.572,
    "color": "#6f2082"
  },
  {
    "id": 65,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.813,
    "lat": -40.83,
    "color": "#6f2082"
  },
  {
    "id": 66,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 147.0,
    "lat": -42.144,
    "color": "#6f2082"
  },
  {
    "id": 67,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 147.539,
    "lat": -29.4,
    "color": "#ff69b4"
  },
  {
    "id": 68,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 147.263,
    "lat": -31.164,
    "color": "#ff69b4"
  },
  {
    "id": 69,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 150.055,
    "lat": -28.783,
    "color": "#ff69b4"
  },
  {
    "id": 70,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 146.046,
    "lat": -31.18,
    "color": "#ff69b4"
  },
  {
    "id": 71,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 145.873,
    "lat": -31.379,
    "color": "#ff69b4"
  },
  {
    "id": 72,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 149.757,
    "lat": -30.556,
    "color": "#ff69b4"
  },
  {
    "id": 73,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 148.395,
    "lat": -25.763,
    "color": "#e4002b"
  },
  {
    "id": 74,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 148.326,
    "lat": -24.162,
    "color": "#e4002b"
  },
  {
    "id": 75,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 142.799,
    "lat": -27.427,
    "color": "#e4002b"
  },
  {
    "id": 76,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 144.381,
    "lat": -28.982,
    "color": "#e4002b"
  },
  {
    "id": 77,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 141.726,
    "lat": -19.588,
    "color": "#e4002b"
  },
  {
    "id": 78,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 145.738,
    "lat": -38.198,
    "color": "#00a650"
  },
  {
    "id": 79,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 145.924,
    "lat": -37.368,
    "color": "#00a650"
  },
  {
    "id": 80,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 143.026,
    "lat": -36.454,
    "color": "#00a650"
  },
  {
    "id": 81,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 137.411,
    "lat": -30.32,
    "color": "#005aab"
  },
  {
    "id": 82,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 135.748,
    "lat": -28.802,
    "color": "#005aab"
  },
  {
    "id": 83,
    "season": "2013-14",
    "season_idx": 2,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 136.554,
    "lat": -27.35,
    "color": "#005aab"
  },
  {
    "id": 84,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 124.227,
    "lat": -30.196,
    "color": "#f47920"
  },
  {
    "id": 85,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 115.247,
    "lat": -31.528,
    "color": "#f47920"
  },
  {
    "id": 86,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 118.69,
    "lat": -24.873,
    "color": "#f47920"
  },
  {
    "id": 87,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 126.534,
    "lat": -27.165,
    "color": "#f47920"
  },
  {
    "id": 88,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 119.431,
    "lat": -25.199,
    "color": "#f47920"
  },
  {
    "id": 89,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 126.38,
    "lat": -24.768,
    "color": "#f47920"
  },
  {
    "id": 90,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 118.542,
    "lat": -22.407,
    "color": "#f47920"
  },
  {
    "id": 91,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 126.902,
    "lat": -21.889,
    "color": "#f47920"
  },
  {
    "id": 92,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 119.781,
    "lat": -30.588,
    "color": "#f47920"
  },
  {
    "id": 93,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 120.53,
    "lat": -31.201,
    "color": "#f47920"
  },
  {
    "id": 94,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 145.545,
    "lat": -32.928,
    "color": "#ff69b4"
  },
  {
    "id": 95,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 151.302,
    "lat": -30.885,
    "color": "#ff69b4"
  },
  {
    "id": 96,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 147.845,
    "lat": -28.865,
    "color": "#ff69b4"
  },
  {
    "id": 97,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 145.931,
    "lat": -34.499,
    "color": "#ff69b4"
  },
  {
    "id": 98,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 146.689,
    "lat": -31.919,
    "color": "#ff69b4"
  },
  {
    "id": 99,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 151.618,
    "lat": -33.439,
    "color": "#ff69b4"
  },
  {
    "id": 100,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 151.113,
    "lat": -29.004,
    "color": "#ff69b4"
  },
  {
    "id": 101,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 148.333,
    "lat": -29.357,
    "color": "#ff69b4"
  },
  {
    "id": 102,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 151.614,
    "lat": -32.689,
    "color": "#ff69b4"
  },
  {
    "id": 103,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 142.847,
    "lat": -38.476,
    "color": "#00a650"
  },
  {
    "id": 104,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 143.198,
    "lat": -37.32,
    "color": "#00a650"
  },
  {
    "id": 105,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 142.077,
    "lat": -37.711,
    "color": "#00a650"
  },
  {
    "id": 106,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 144.471,
    "lat": -37.693,
    "color": "#00a650"
  },
  {
    "id": 107,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 145.669,
    "lat": -36.991,
    "color": "#00a650"
  },
  {
    "id": 108,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 144.665,
    "lat": -36.799,
    "color": "#00a650"
  },
  {
    "id": 109,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 144.915,
    "lat": -37.458,
    "color": "#00a650"
  },
  {
    "id": 110,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 142.83,
    "lat": -36.936,
    "color": "#00a650"
  },
  {
    "id": 111,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 131.88,
    "lat": -34.639,
    "color": "#005aab"
  },
  {
    "id": 112,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 134.239,
    "lat": -32.7,
    "color": "#005aab"
  },
  {
    "id": 113,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 137.544,
    "lat": -33.415,
    "color": "#005aab"
  },
  {
    "id": 114,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 135.013,
    "lat": -28.045,
    "color": "#005aab"
  },
  {
    "id": 115,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 134.842,
    "lat": -26.946,
    "color": "#005aab"
  },
  {
    "id": 116,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 132.437,
    "lat": -33.282,
    "color": "#005aab"
  },
  {
    "id": 117,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 133.704,
    "lat": -31.348,
    "color": "#005aab"
  },
  {
    "id": 118,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.679,
    "lat": -42.724,
    "color": "#6f2082"
  },
  {
    "id": 119,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.677,
    "lat": -41.516,
    "color": "#6f2082"
  },
  {
    "id": 120,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.958,
    "lat": -41.244,
    "color": "#6f2082"
  },
  {
    "id": 121,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.244,
    "lat": -41.573,
    "color": "#6f2082"
  },
  {
    "id": 122,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 147.174,
    "lat": -41.22,
    "color": "#6f2082"
  },
  {
    "id": 123,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 139.802,
    "lat": -27.789,
    "color": "#e4002b"
  },
  {
    "id": 124,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 147.11,
    "lat": -19.947,
    "color": "#e4002b"
  },
  {
    "id": 125,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 139.999,
    "lat": -16.808,
    "color": "#e4002b"
  },
  {
    "id": 126,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 146.603,
    "lat": -20.39,
    "color": "#e4002b"
  },
  {
    "id": 127,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 145.803,
    "lat": -36.867,
    "color": "#e5002b"
  },
  {
    "id": 128,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 143.7,
    "lat": -38.542,
    "color": "#e5002b"
  },
  {
    "id": 129,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 143.712,
    "lat": -36.825,
    "color": "#e5002b"
  },
  {
    "id": 130,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Sydney Thunder",
    "state": "NSW",
    "lon": 146.004,
    "lat": -35.063,
    "color": "#f0b429"
  },
  {
    "id": 131,
    "season": "2014-15",
    "season_idx": 3,
    "team": "Sydney Thunder",
    "state": "NSW",
    "lon": 145.389,
    "lat": -32.528,
    "color": "#f0b429"
  },
  {
    "id": 132,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Sydney Thunder",
    "state": "NSW",
    "lon": 152.233,
    "lat": -30.654,
    "color": "#f0b429"
  },
  {
    "id": 133,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Sydney Thunder",
    "state": "NSW",
    "lon": 144.6,
    "lat": -33.485,
    "color": "#f0b429"
  },
  {
    "id": 134,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Sydney Thunder",
    "state": "NSW",
    "lon": 149.957,
    "lat": -35.724,
    "color": "#f0b429"
  },
  {
    "id": 135,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Sydney Thunder",
    "state": "NSW",
    "lon": 150.859,
    "lat": -34.617,
    "color": "#f0b429"
  },
  {
    "id": 136,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Sydney Thunder",
    "state": "NSW",
    "lon": 148.051,
    "lat": -30.157,
    "color": "#f0b429"
  },
  {
    "id": 137,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Sydney Thunder",
    "state": "NSW",
    "lon": 151.494,
    "lat": -35.859,
    "color": "#f0b429"
  },
  {
    "id": 138,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Sydney Thunder",
    "state": "NSW",
    "lon": 151.038,
    "lat": -29.497,
    "color": "#f0b429"
  },
  {
    "id": 139,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Sydney Thunder",
    "state": "NSW",
    "lon": 151.209,
    "lat": -30.308,
    "color": "#f0b429"
  },
  {
    "id": 140,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Sydney Thunder",
    "state": "NSW",
    "lon": 147.485,
    "lat": -33.993,
    "color": "#f0b429"
  },
  {
    "id": 141,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 131.865,
    "lat": -31.035,
    "color": "#005aab"
  },
  {
    "id": 142,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 133.905,
    "lat": -33.412,
    "color": "#005aab"
  },
  {
    "id": 143,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 139.049,
    "lat": -26.19,
    "color": "#005aab"
  },
  {
    "id": 144,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 137.977,
    "lat": -32.043,
    "color": "#005aab"
  },
  {
    "id": 145,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 132.489,
    "lat": -30.725,
    "color": "#005aab"
  },
  {
    "id": 146,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 132.078,
    "lat": -31.463,
    "color": "#005aab"
  },
  {
    "id": 147,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 136.352,
    "lat": -31.827,
    "color": "#005aab"
  },
  {
    "id": 148,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 134.176,
    "lat": -31.73,
    "color": "#005aab"
  },
  {
    "id": 149,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 124.949,
    "lat": -32.516,
    "color": "#f47920"
  },
  {
    "id": 150,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 124.767,
    "lat": -24.456,
    "color": "#f47920"
  },
  {
    "id": 151,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 121.576,
    "lat": -23.289,
    "color": "#f47920"
  },
  {
    "id": 152,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 115.222,
    "lat": -20.917,
    "color": "#f47920"
  },
  {
    "id": 153,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 118.465,
    "lat": -27.406,
    "color": "#f47920"
  },
  {
    "id": 154,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 121.147,
    "lat": -20.383,
    "color": "#f47920"
  },
  {
    "id": 155,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 117.734,
    "lat": -25.662,
    "color": "#f47920"
  },
  {
    "id": 156,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 126.9,
    "lat": -30.03,
    "color": "#f47920"
  },
  {
    "id": 157,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 149.682,
    "lat": -35.189,
    "color": "#ff69b4"
  },
  {
    "id": 158,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 149.037,
    "lat": -33.022,
    "color": "#ff69b4"
  },
  {
    "id": 159,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 149.024,
    "lat": -36.27,
    "color": "#ff69b4"
  },
  {
    "id": 160,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 146.116,
    "lat": -29.295,
    "color": "#ff69b4"
  },
  {
    "id": 161,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 145.938,
    "lat": -34.096,
    "color": "#ff69b4"
  },
  {
    "id": 162,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 152.414,
    "lat": -34.463,
    "color": "#ff69b4"
  },
  {
    "id": 163,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 149.138,
    "lat": -33.055,
    "color": "#ff69b4"
  },
  {
    "id": 164,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 138.039,
    "lat": -19.99,
    "color": "#e4002b"
  },
  {
    "id": 165,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 144.036,
    "lat": -15.883,
    "color": "#e4002b"
  },
  {
    "id": 166,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 149.72,
    "lat": -27.964,
    "color": "#e4002b"
  },
  {
    "id": 167,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 145.059,
    "lat": -24.222,
    "color": "#e4002b"
  },
  {
    "id": 168,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 139.585,
    "lat": -16.163,
    "color": "#e4002b"
  },
  {
    "id": 169,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 139.092,
    "lat": -21.973,
    "color": "#e4002b"
  },
  {
    "id": 170,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 143.163,
    "lat": -36.981,
    "color": "#e5002b"
  },
  {
    "id": 171,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 143.042,
    "lat": -36.136,
    "color": "#e5002b"
  },
  {
    "id": 172,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 144.182,
    "lat": -38.095,
    "color": "#e5002b"
  },
  {
    "id": 173,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 146.003,
    "lat": -38.296,
    "color": "#e5002b"
  },
  {
    "id": 174,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 145.691,
    "lat": -37.955,
    "color": "#e5002b"
  },
  {
    "id": 175,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 146.205,
    "lat": -37.93,
    "color": "#e5002b"
  },
  {
    "id": 176,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 145.257,
    "lat": -36.683,
    "color": "#00a650"
  },
  {
    "id": 177,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 144.523,
    "lat": -36.088,
    "color": "#00a650"
  },
  {
    "id": 178,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 144.716,
    "lat": -37.996,
    "color": "#00a650"
  },
  {
    "id": 179,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 144.622,
    "lat": -36.639,
    "color": "#00a650"
  },
  {
    "id": 180,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 144.105,
    "lat": -37.127,
    "color": "#00a650"
  },
  {
    "id": 181,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.217,
    "lat": -42.599,
    "color": "#6f2082"
  },
  {
    "id": 182,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 147.301,
    "lat": -42.398,
    "color": "#6f2082"
  },
  {
    "id": 183,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.567,
    "lat": -41.296,
    "color": "#6f2082"
  },
  {
    "id": 184,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.089,
    "lat": -43.108,
    "color": "#6f2082"
  },
  {
    "id": 185,
    "season": "2015-16",
    "season_idx": 4,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.186,
    "lat": -42.745,
    "color": "#6f2082"
  },
  {
    "id": 186,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 115.6,
    "lat": -28.9,
    "color": "#f47920"
  },
  {
    "id": 187,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 118.219,
    "lat": -20.076,
    "color": "#f47920"
  },
  {
    "id": 188,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 118.059,
    "lat": -24.918,
    "color": "#f47920"
  },
  {
    "id": 189,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 118.544,
    "lat": -22.84,
    "color": "#f47920"
  },
  {
    "id": 190,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 116.369,
    "lat": -28.176,
    "color": "#f47920"
  },
  {
    "id": 191,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 116.708,
    "lat": -28.729,
    "color": "#f47920"
  },
  {
    "id": 192,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 118.125,
    "lat": -26.666,
    "color": "#f47920"
  },
  {
    "id": 193,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 126.323,
    "lat": -32.619,
    "color": "#f47920"
  },
  {
    "id": 194,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 117.779,
    "lat": -24.484,
    "color": "#f47920"
  },
  {
    "id": 195,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 125.018,
    "lat": -27.686,
    "color": "#f47920"
  },
  {
    "id": 196,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 147.371,
    "lat": -33.956,
    "color": "#ff69b4"
  },
  {
    "id": 197,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 147.502,
    "lat": -32.193,
    "color": "#ff69b4"
  },
  {
    "id": 198,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 150.738,
    "lat": -36.328,
    "color": "#ff69b4"
  },
  {
    "id": 199,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 145.908,
    "lat": -34.723,
    "color": "#ff69b4"
  },
  {
    "id": 200,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 149.466,
    "lat": -30.416,
    "color": "#ff69b4"
  },
  {
    "id": 201,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 145.064,
    "lat": -36.494,
    "color": "#ff69b4"
  },
  {
    "id": 202,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 145.412,
    "lat": -33.013,
    "color": "#ff69b4"
  },
  {
    "id": 203,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 150.035,
    "lat": -28.719,
    "color": "#ff69b4"
  },
  {
    "id": 204,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 134.458,
    "lat": -30.763,
    "color": "#005aab"
  },
  {
    "id": 205,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 138.509,
    "lat": -27.323,
    "color": "#005aab"
  },
  {
    "id": 206,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 138.734,
    "lat": -32.372,
    "color": "#005aab"
  },
  {
    "id": 207,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 137.197,
    "lat": -26.916,
    "color": "#005aab"
  },
  {
    "id": 208,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 133.686,
    "lat": -32.565,
    "color": "#005aab"
  },
  {
    "id": 209,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 138.943,
    "lat": -32.803,
    "color": "#005aab"
  },
  {
    "id": 210,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 134.109,
    "lat": -33.975,
    "color": "#005aab"
  },
  {
    "id": 211,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 138.51,
    "lat": -28.787,
    "color": "#005aab"
  },
  {
    "id": 212,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.729,
    "lat": -42.139,
    "color": "#6f2082"
  },
  {
    "id": 213,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.334,
    "lat": -43.16,
    "color": "#6f2082"
  },
  {
    "id": 214,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 147.231,
    "lat": -43.014,
    "color": "#6f2082"
  },
  {
    "id": 215,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.15,
    "lat": -41.43,
    "color": "#6f2082"
  },
  {
    "id": 216,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.847,
    "lat": -41.365,
    "color": "#6f2082"
  },
  {
    "id": 217,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 147.706,
    "lat": -41.511,
    "color": "#6f2082"
  },
  {
    "id": 218,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.277,
    "lat": -40.969,
    "color": "#6f2082"
  },
  {
    "id": 219,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 141.851,
    "lat": -15.051,
    "color": "#e4002b"
  },
  {
    "id": 220,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 145.26,
    "lat": -21.516,
    "color": "#e4002b"
  },
  {
    "id": 221,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 148.458,
    "lat": -27.518,
    "color": "#e4002b"
  },
  {
    "id": 222,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 141.438,
    "lat": -18.148,
    "color": "#e4002b"
  },
  {
    "id": 223,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 138.817,
    "lat": -16.046,
    "color": "#e4002b"
  },
  {
    "id": 224,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 143.445,
    "lat": -22.139,
    "color": "#e4002b"
  },
  {
    "id": 225,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Sydney Thunder",
    "state": "NSW",
    "lon": 152.469,
    "lat": -35.819,
    "color": "#f0b429"
  },
  {
    "id": 226,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Sydney Thunder",
    "state": "NSW",
    "lon": 144.659,
    "lat": -31.995,
    "color": "#f0b429"
  },
  {
    "id": 227,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Sydney Thunder",
    "state": "NSW",
    "lon": 149.574,
    "lat": -29.6,
    "color": "#f0b429"
  },
  {
    "id": 228,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Sydney Thunder",
    "state": "NSW",
    "lon": 146.039,
    "lat": -29.434,
    "color": "#f0b429"
  },
  {
    "id": 229,
    "season": "2016-17",
    "season_idx": 5,
    "team": "Sydney Thunder",
    "state": "NSW",
    "lon": 149.761,
    "lat": -31.87,
    "color": "#f0b429"
  },
  {
    "id": 230,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 131.657,
    "lat": -27.007,
    "color": "#005aab"
  },
  {
    "id": 231,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 133.245,
    "lat": -28.322,
    "color": "#005aab"
  },
  {
    "id": 232,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 139.446,
    "lat": -34.873,
    "color": "#005aab"
  },
  {
    "id": 233,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 134.938,
    "lat": -25.614,
    "color": "#005aab"
  },
  {
    "id": 234,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 133.795,
    "lat": -26.621,
    "color": "#005aab"
  },
  {
    "id": 235,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 138.052,
    "lat": -28.093,
    "color": "#005aab"
  },
  {
    "id": 236,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 139.487,
    "lat": -27.943,
    "color": "#005aab"
  },
  {
    "id": 237,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 132.337,
    "lat": -26.581,
    "color": "#005aab"
  },
  {
    "id": 238,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 137.514,
    "lat": -31.138,
    "color": "#005aab"
  },
  {
    "id": 239,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.289,
    "lat": -42.554,
    "color": "#6f2082"
  },
  {
    "id": 240,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.579,
    "lat": -42.6,
    "color": "#6f2082"
  },
  {
    "id": 241,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 147.96,
    "lat": -42.82,
    "color": "#6f2082"
  },
  {
    "id": 242,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.822,
    "lat": -42.903,
    "color": "#6f2082"
  },
  {
    "id": 243,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 147.246,
    "lat": -41.212,
    "color": "#6f2082"
  },
  {
    "id": 244,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.752,
    "lat": -42.261,
    "color": "#6f2082"
  },
  {
    "id": 245,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 147.665,
    "lat": -41.765,
    "color": "#6f2082"
  },
  {
    "id": 246,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.653,
    "lat": -40.808,
    "color": "#6f2082"
  },
  {
    "id": 247,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 147.309,
    "lat": -42.464,
    "color": "#6f2082"
  },
  {
    "id": 248,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 148.083,
    "lat": -32.499,
    "color": "#ff69b4"
  },
  {
    "id": 249,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 149.576,
    "lat": -32.824,
    "color": "#ff69b4"
  },
  {
    "id": 250,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 145.692,
    "lat": -33.867,
    "color": "#ff69b4"
  },
  {
    "id": 251,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 145.53,
    "lat": -32.48,
    "color": "#ff69b4"
  },
  {
    "id": 252,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 149.409,
    "lat": -31.685,
    "color": "#ff69b4"
  },
  {
    "id": 253,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 145.065,
    "lat": -32.054,
    "color": "#ff69b4"
  },
  {
    "id": 254,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 150.751,
    "lat": -31.917,
    "color": "#ff69b4"
  },
  {
    "id": 255,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 147.202,
    "lat": -30.217,
    "color": "#ff69b4"
  },
  {
    "id": 256,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 143.998,
    "lat": -36.32,
    "color": "#00a650"
  },
  {
    "id": 257,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 142.053,
    "lat": -38.435,
    "color": "#00a650"
  },
  {
    "id": 258,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 144.289,
    "lat": -38.449,
    "color": "#00a650"
  },
  {
    "id": 259,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 142.976,
    "lat": -35.9,
    "color": "#00a650"
  },
  {
    "id": 260,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 145.883,
    "lat": -37.804,
    "color": "#00a650"
  },
  {
    "id": 261,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 142.573,
    "lat": -36.506,
    "color": "#00a650"
  },
  {
    "id": 262,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 145.54,
    "lat": -38.18,
    "color": "#00a650"
  },
  {
    "id": 263,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 144.775,
    "lat": -36.777,
    "color": "#00a650"
  },
  {
    "id": 264,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 116.068,
    "lat": -31.438,
    "color": "#f47920"
  },
  {
    "id": 265,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 115.302,
    "lat": -21.275,
    "color": "#f47920"
  },
  {
    "id": 266,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 118.573,
    "lat": -28.313,
    "color": "#f47920"
  },
  {
    "id": 267,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 115.514,
    "lat": -23.918,
    "color": "#f47920"
  },
  {
    "id": 268,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 118.001,
    "lat": -25.408,
    "color": "#f47920"
  },
  {
    "id": 269,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 119.193,
    "lat": -28.126,
    "color": "#f47920"
  },
  {
    "id": 270,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 115.516,
    "lat": -28.449,
    "color": "#f47920"
  },
  {
    "id": 271,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 148.952,
    "lat": -15.795,
    "color": "#e4002b"
  },
  {
    "id": 272,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 148.967,
    "lat": -17.089,
    "color": "#e4002b"
  },
  {
    "id": 273,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 147.732,
    "lat": -20.207,
    "color": "#e4002b"
  },
  {
    "id": 274,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 145.258,
    "lat": -18.943,
    "color": "#e4002b"
  },
  {
    "id": 275,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 149.526,
    "lat": -20.548,
    "color": "#e4002b"
  },
  {
    "id": 276,
    "season": "2017-18",
    "season_idx": 6,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 144.689,
    "lat": -18.801,
    "color": "#e4002b"
  },
  {
    "id": 277,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 146.225,
    "lat": -37.098,
    "color": "#e5002b"
  },
  {
    "id": 278,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 142.103,
    "lat": -36.882,
    "color": "#e5002b"
  },
  {
    "id": 279,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 143.72,
    "lat": -38.315,
    "color": "#e5002b"
  },
  {
    "id": 280,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 142.229,
    "lat": -37.098,
    "color": "#e5002b"
  },
  {
    "id": 281,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 146.775,
    "lat": -37.026,
    "color": "#e5002b"
  },
  {
    "id": 282,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 146.17,
    "lat": -38.181,
    "color": "#e5002b"
  },
  {
    "id": 283,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 143.645,
    "lat": -35.834,
    "color": "#e5002b"
  },
  {
    "id": 284,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 145.444,
    "lat": -36.52,
    "color": "#e5002b"
  },
  {
    "id": 285,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Melbourne Renegades",
    "state": "VIC",
    "lon": 143.478,
    "lat": -36.696,
    "color": "#e5002b"
  },
  {
    "id": 286,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 147.245,
    "lat": -34.911,
    "color": "#ff69b4"
  },
  {
    "id": 287,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 145.761,
    "lat": -35.096,
    "color": "#ff69b4"
  },
  {
    "id": 288,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 145.24,
    "lat": -33.372,
    "color": "#ff69b4"
  },
  {
    "id": 289,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 151.44,
    "lat": -32.142,
    "color": "#ff69b4"
  },
  {
    "id": 290,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 147.481,
    "lat": -31.368,
    "color": "#ff69b4"
  },
  {
    "id": 291,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 151.878,
    "lat": -34.428,
    "color": "#ff69b4"
  },
  {
    "id": 292,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 151.848,
    "lat": -28.646,
    "color": "#ff69b4"
  },
  {
    "id": 293,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 147.314,
    "lat": -35.995,
    "color": "#ff69b4"
  },
  {
    "id": 294,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 149.948,
    "lat": -29.148,
    "color": "#ff69b4"
  },
  {
    "id": 295,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 142.413,
    "lat": -24.612,
    "color": "#e4002b"
  },
  {
    "id": 296,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 140.843,
    "lat": -27.261,
    "color": "#e4002b"
  },
  {
    "id": 297,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 145.969,
    "lat": -24.95,
    "color": "#e4002b"
  },
  {
    "id": 298,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 149.199,
    "lat": -23.29,
    "color": "#e4002b"
  },
  {
    "id": 299,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 139.547,
    "lat": -19.662,
    "color": "#e4002b"
  },
  {
    "id": 300,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 149.779,
    "lat": -27.185,
    "color": "#e4002b"
  },
  {
    "id": 301,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 149.641,
    "lat": -19.739,
    "color": "#e4002b"
  },
  {
    "id": 302,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 147.213,
    "lat": -15.763,
    "color": "#e4002b"
  },
  {
    "id": 303,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 121.577,
    "lat": -25.509,
    "color": "#f47920"
  },
  {
    "id": 304,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 116.709,
    "lat": -27.242,
    "color": "#f47920"
  },
  {
    "id": 305,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 121.629,
    "lat": -29.288,
    "color": "#f47920"
  },
  {
    "id": 306,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 120.211,
    "lat": -27.625,
    "color": "#f47920"
  },
  {
    "id": 307,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 125.052,
    "lat": -28.161,
    "color": "#f47920"
  },
  {
    "id": 308,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 125.755,
    "lat": -29.801,
    "color": "#f47920"
  },
  {
    "id": 309,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 122.815,
    "lat": -26.003,
    "color": "#f47920"
  },
  {
    "id": 310,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.905,
    "lat": -41.329,
    "color": "#6f2082"
  },
  {
    "id": 311,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 147.966,
    "lat": -42.896,
    "color": "#6f2082"
  },
  {
    "id": 312,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 147.434,
    "lat": -43.032,
    "color": "#6f2082"
  },
  {
    "id": 313,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.065,
    "lat": -40.903,
    "color": "#6f2082"
  },
  {
    "id": 314,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 147.895,
    "lat": -40.975,
    "color": "#6f2082"
  },
  {
    "id": 315,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.066,
    "lat": -41.423,
    "color": "#6f2082"
  },
  {
    "id": 316,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 146.886,
    "lat": -38.506,
    "color": "#00a650"
  },
  {
    "id": 317,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 146.141,
    "lat": -36.527,
    "color": "#00a650"
  },
  {
    "id": 318,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 146.661,
    "lat": -37.347,
    "color": "#00a650"
  },
  {
    "id": 319,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 145.216,
    "lat": -36.414,
    "color": "#00a650"
  },
  {
    "id": 320,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 144.483,
    "lat": -36.545,
    "color": "#00a650"
  },
  {
    "id": 321,
    "season": "2018-19",
    "season_idx": 7,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 143.083,
    "lat": -38.566,
    "color": "#00a650"
  },
  {
    "id": 322,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 146.261,
    "lat": -28.618,
    "color": "#ff69b4"
  },
  {
    "id": 323,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 147.951,
    "lat": -29.395,
    "color": "#ff69b4"
  },
  {
    "id": 324,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 152.262,
    "lat": -29.166,
    "color": "#ff69b4"
  },
  {
    "id": 325,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 148.895,
    "lat": -34.192,
    "color": "#ff69b4"
  },
  {
    "id": 326,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 149.37,
    "lat": -30.338,
    "color": "#ff69b4"
  },
  {
    "id": 327,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 150.279,
    "lat": -36.239,
    "color": "#ff69b4"
  },
  {
    "id": 328,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 144.952,
    "lat": -36.239,
    "color": "#ff69b4"
  },
  {
    "id": 329,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 146.493,
    "lat": -33.352,
    "color": "#ff69b4"
  },
  {
    "id": 330,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 147.471,
    "lat": -30.422,
    "color": "#ff69b4"
  },
  {
    "id": 331,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 150.614,
    "lat": -34.226,
    "color": "#ff69b4"
  },
  {
    "id": 332,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 147.289,
    "lat": -29.373,
    "color": "#ff69b4"
  },
  {
    "id": 333,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 145.457,
    "lat": -38.604,
    "color": "#00a650"
  },
  {
    "id": 334,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 143.648,
    "lat": -36.23,
    "color": "#00a650"
  },
  {
    "id": 335,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 144.681,
    "lat": -38.097,
    "color": "#00a650"
  },
  {
    "id": 336,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 144.075,
    "lat": -36.67,
    "color": "#00a650"
  },
  {
    "id": 337,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 142.888,
    "lat": -37.938,
    "color": "#00a650"
  },
  {
    "id": 338,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 146.204,
    "lat": -37.533,
    "color": "#00a650"
  },
  {
    "id": 339,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 144.062,
    "lat": -35.731,
    "color": "#00a650"
  },
  {
    "id": 340,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 146.79,
    "lat": -37.79,
    "color": "#00a650"
  },
  {
    "id": 341,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 142.001,
    "lat": -38.184,
    "color": "#00a650"
  },
  {
    "id": 342,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 149.706,
    "lat": -19.167,
    "color": "#e4002b"
  },
  {
    "id": 343,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 140.781,
    "lat": -16.34,
    "color": "#e4002b"
  },
  {
    "id": 344,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 148.525,
    "lat": -19.03,
    "color": "#e4002b"
  },
  {
    "id": 345,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 138.213,
    "lat": -21.6,
    "color": "#e4002b"
  },
  {
    "id": 346,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 140.669,
    "lat": -25.419,
    "color": "#e4002b"
  },
  {
    "id": 347,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 142.721,
    "lat": -23.385,
    "color": "#e4002b"
  },
  {
    "id": 348,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 148.611,
    "lat": -23.756,
    "color": "#e4002b"
  },
  {
    "id": 349,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 139.991,
    "lat": -26.819,
    "color": "#e4002b"
  },
  {
    "id": 350,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 120.564,
    "lat": -29.113,
    "color": "#f47920"
  },
  {
    "id": 351,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 125.072,
    "lat": -24.182,
    "color": "#f47920"
  },
  {
    "id": 352,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 123.778,
    "lat": -30.517,
    "color": "#f47920"
  },
  {
    "id": 353,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 121.801,
    "lat": -23.33,
    "color": "#f47920"
  },
  {
    "id": 354,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 115.579,
    "lat": -27.415,
    "color": "#f47920"
  },
  {
    "id": 355,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 123.017,
    "lat": -30.853,
    "color": "#f47920"
  },
  {
    "id": 356,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 126.485,
    "lat": -30.032,
    "color": "#f47920"
  },
  {
    "id": 357,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.353,
    "lat": -41.55,
    "color": "#6f2082"
  },
  {
    "id": 358,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 147.956,
    "lat": -41.344,
    "color": "#6f2082"
  },
  {
    "id": 359,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.596,
    "lat": -42.412,
    "color": "#6f2082"
  },
  {
    "id": 360,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.647,
    "lat": -43.045,
    "color": "#6f2082"
  },
  {
    "id": 361,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.672,
    "lat": -41.691,
    "color": "#6f2082"
  },
  {
    "id": 362,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.742,
    "lat": -40.828,
    "color": "#6f2082"
  },
  {
    "id": 363,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 132.754,
    "lat": -32.555,
    "color": "#005aab"
  },
  {
    "id": 364,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 134.761,
    "lat": -25.461,
    "color": "#005aab"
  },
  {
    "id": 365,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 134.229,
    "lat": -33.155,
    "color": "#005aab"
  },
  {
    "id": 366,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 137.298,
    "lat": -34.138,
    "color": "#005aab"
  },
  {
    "id": 367,
    "season": "2019-20",
    "season_idx": 8,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 135.266,
    "lat": -32.847,
    "color": "#005aab"
  },
  {
    "id": 368,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 152.307,
    "lat": -32.998,
    "color": "#ff69b4"
  },
  {
    "id": 369,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 148.545,
    "lat": -28.851,
    "color": "#ff69b4"
  },
  {
    "id": 370,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 149.719,
    "lat": -28.56,
    "color": "#ff69b4"
  },
  {
    "id": 371,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 147.929,
    "lat": -29.522,
    "color": "#ff69b4"
  },
  {
    "id": 372,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 147.976,
    "lat": -34.284,
    "color": "#ff69b4"
  },
  {
    "id": 373,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 152.186,
    "lat": -31.516,
    "color": "#ff69b4"
  },
  {
    "id": 374,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 145.647,
    "lat": -31.95,
    "color": "#ff69b4"
  },
  {
    "id": 375,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 150.029,
    "lat": -35.414,
    "color": "#ff69b4"
  },
  {
    "id": 376,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 148.368,
    "lat": -32.948,
    "color": "#ff69b4"
  },
  {
    "id": 377,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 145.966,
    "lat": -31.007,
    "color": "#ff69b4"
  },
  {
    "id": 378,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 120.846,
    "lat": -24.659,
    "color": "#f47920"
  },
  {
    "id": 379,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 121.429,
    "lat": -24.395,
    "color": "#f47920"
  },
  {
    "id": 380,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 124.348,
    "lat": -26.225,
    "color": "#f47920"
  },
  {
    "id": 381,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 126.58,
    "lat": -20.368,
    "color": "#f47920"
  },
  {
    "id": 382,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 120.454,
    "lat": -31.302,
    "color": "#f47920"
  },
  {
    "id": 383,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 120.878,
    "lat": -27.666,
    "color": "#f47920"
  },
  {
    "id": 384,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 125.664,
    "lat": -28.599,
    "color": "#f47920"
  },
  {
    "id": 385,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 115.718,
    "lat": -30.265,
    "color": "#f47920"
  },
  {
    "id": 386,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 125.534,
    "lat": -31.296,
    "color": "#f47920"
  },
  {
    "id": 387,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 148.916,
    "lat": -22.985,
    "color": "#e4002b"
  },
  {
    "id": 388,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 144.492,
    "lat": -18.435,
    "color": "#e4002b"
  },
  {
    "id": 389,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 148.41,
    "lat": -27.418,
    "color": "#e4002b"
  },
  {
    "id": 390,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 145.065,
    "lat": -26.357,
    "color": "#e4002b"
  },
  {
    "id": 391,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 149.456,
    "lat": -18.2,
    "color": "#e4002b"
  },
  {
    "id": 392,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 141.046,
    "lat": -24.157,
    "color": "#e4002b"
  },
  {
    "id": 393,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 149.71,
    "lat": -15.586,
    "color": "#e4002b"
  },
  {
    "id": 394,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 147.204,
    "lat": -28.454,
    "color": "#e4002b"
  },
  {
    "id": 395,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.659,
    "lat": -41.752,
    "color": "#6f2082"
  },
  {
    "id": 396,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.62,
    "lat": -41.959,
    "color": "#6f2082"
  },
  {
    "id": 397,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.019,
    "lat": -42.093,
    "color": "#6f2082"
  },
  {
    "id": 398,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.429,
    "lat": -41.211,
    "color": "#6f2082"
  },
  {
    "id": 399,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.04,
    "lat": -41.04,
    "color": "#6f2082"
  },
  {
    "id": 400,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.732,
    "lat": -43.158,
    "color": "#6f2082"
  },
  {
    "id": 401,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.356,
    "lat": -42.798,
    "color": "#6f2082"
  },
  {
    "id": 402,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 139.14,
    "lat": -26.78,
    "color": "#005aab"
  },
  {
    "id": 403,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 138.988,
    "lat": -32.865,
    "color": "#005aab"
  },
  {
    "id": 404,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 138.499,
    "lat": -25.859,
    "color": "#005aab"
  },
  {
    "id": 405,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 133.759,
    "lat": -26.851,
    "color": "#005aab"
  },
  {
    "id": 406,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 134.45,
    "lat": -33.138,
    "color": "#005aab"
  },
  {
    "id": 407,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 136.912,
    "lat": -31.657,
    "color": "#005aab"
  },
  {
    "id": 408,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 143.508,
    "lat": -36.766,
    "color": "#00a650"
  },
  {
    "id": 409,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 145.242,
    "lat": -38.656,
    "color": "#00a650"
  },
  {
    "id": 410,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 142.143,
    "lat": -37.092,
    "color": "#00a650"
  },
  {
    "id": 411,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 142.451,
    "lat": -38.376,
    "color": "#00a650"
  },
  {
    "id": 412,
    "season": "2020-21",
    "season_idx": 9,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 146.673,
    "lat": -35.844,
    "color": "#00a650"
  },
  {
    "id": 413,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 123.541,
    "lat": -20.069,
    "color": "#f47920"
  },
  {
    "id": 414,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 123.28,
    "lat": -20.031,
    "color": "#f47920"
  },
  {
    "id": 415,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 115.042,
    "lat": -27.783,
    "color": "#f47920"
  },
  {
    "id": 416,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 119.385,
    "lat": -28.253,
    "color": "#f47920"
  },
  {
    "id": 417,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 118.235,
    "lat": -28.521,
    "color": "#f47920"
  },
  {
    "id": 418,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 123.925,
    "lat": -19.709,
    "color": "#f47920"
  },
  {
    "id": 419,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 126.065,
    "lat": -27.538,
    "color": "#f47920"
  },
  {
    "id": 420,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 122.237,
    "lat": -29.769,
    "color": "#f47920"
  },
  {
    "id": 421,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 118.705,
    "lat": -20.239,
    "color": "#f47920"
  },
  {
    "id": 422,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 121.462,
    "lat": -31.771,
    "color": "#f47920"
  },
  {
    "id": 423,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 148.354,
    "lat": -30.188,
    "color": "#ff69b4"
  },
  {
    "id": 424,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 149.947,
    "lat": -35.608,
    "color": "#ff69b4"
  },
  {
    "id": 425,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 147.61,
    "lat": -33.933,
    "color": "#ff69b4"
  },
  {
    "id": 426,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 146.267,
    "lat": -34.535,
    "color": "#ff69b4"
  },
  {
    "id": 427,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 151.202,
    "lat": -32.074,
    "color": "#ff69b4"
  },
  {
    "id": 428,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 150.924,
    "lat": -33.327,
    "color": "#ff69b4"
  },
  {
    "id": 429,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 151.236,
    "lat": -36.442,
    "color": "#ff69b4"
  },
  {
    "id": 430,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 147.229,
    "lat": -34.975,
    "color": "#ff69b4"
  },
  {
    "id": 431,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 146.649,
    "lat": -30.619,
    "color": "#ff69b4"
  },
  {
    "id": 432,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.536,
    "lat": -41.093,
    "color": "#6f2082"
  },
  {
    "id": 433,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.738,
    "lat": -41.098,
    "color": "#6f2082"
  },
  {
    "id": 434,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.069,
    "lat": -43.052,
    "color": "#6f2082"
  },
  {
    "id": 435,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.099,
    "lat": -40.831,
    "color": "#6f2082"
  },
  {
    "id": 436,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.408,
    "lat": -43.057,
    "color": "#6f2082"
  },
  {
    "id": 437,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.863,
    "lat": -42.351,
    "color": "#6f2082"
  },
  {
    "id": 438,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.777,
    "lat": -42.444,
    "color": "#6f2082"
  },
  {
    "id": 439,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.717,
    "lat": -42.604,
    "color": "#6f2082"
  },
  {
    "id": 440,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 144.158,
    "lat": -38.361,
    "color": "#00a650"
  },
  {
    "id": 441,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 144.991,
    "lat": -36.278,
    "color": "#00a650"
  },
  {
    "id": 442,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 142.88,
    "lat": -36.789,
    "color": "#00a650"
  },
  {
    "id": 443,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 145.429,
    "lat": -37.75,
    "color": "#00a650"
  },
  {
    "id": 444,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 143.922,
    "lat": -38.281,
    "color": "#00a650"
  },
  {
    "id": 445,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 145.08,
    "lat": -35.765,
    "color": "#00a650"
  },
  {
    "id": 446,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 145.883,
    "lat": -38.056,
    "color": "#00a650"
  },
  {
    "id": 447,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 134.925,
    "lat": -29.904,
    "color": "#005aab"
  },
  {
    "id": 448,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 133.746,
    "lat": -25.368,
    "color": "#005aab"
  },
  {
    "id": 449,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 138.525,
    "lat": -30.537,
    "color": "#005aab"
  },
  {
    "id": 450,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 133.314,
    "lat": -27.473,
    "color": "#005aab"
  },
  {
    "id": 451,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 135.649,
    "lat": -27.851,
    "color": "#005aab"
  },
  {
    "id": 452,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 138.497,
    "lat": -25.284,
    "color": "#005aab"
  },
  {
    "id": 453,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 147.419,
    "lat": -26.127,
    "color": "#e4002b"
  },
  {
    "id": 454,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 144.644,
    "lat": -18.952,
    "color": "#e4002b"
  },
  {
    "id": 455,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 140.097,
    "lat": -15.151,
    "color": "#e4002b"
  },
  {
    "id": 456,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 141.265,
    "lat": -17.122,
    "color": "#e4002b"
  },
  {
    "id": 457,
    "season": "2021-22",
    "season_idx": 10,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 138.177,
    "lat": -27.781,
    "color": "#e4002b"
  },
  {
    "id": 458,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 138.188,
    "lat": -27.773,
    "color": "#e4002b"
  },
  {
    "id": 459,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 138.894,
    "lat": -27.894,
    "color": "#e4002b"
  },
  {
    "id": 460,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 146.679,
    "lat": -16.113,
    "color": "#e4002b"
  },
  {
    "id": 461,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 147.566,
    "lat": -17.544,
    "color": "#e4002b"
  },
  {
    "id": 462,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 147.351,
    "lat": -26.562,
    "color": "#e4002b"
  },
  {
    "id": 463,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 142.625,
    "lat": -28.343,
    "color": "#e4002b"
  },
  {
    "id": 464,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 140.156,
    "lat": -26.257,
    "color": "#e4002b"
  },
  {
    "id": 465,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 143.557,
    "lat": -16.073,
    "color": "#e4002b"
  },
  {
    "id": 466,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 142.254,
    "lat": -19.354,
    "color": "#e4002b"
  },
  {
    "id": 467,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 149.775,
    "lat": -34.042,
    "color": "#ff69b4"
  },
  {
    "id": 468,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 144.842,
    "lat": -34.769,
    "color": "#ff69b4"
  },
  {
    "id": 469,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 146.104,
    "lat": -32.378,
    "color": "#ff69b4"
  },
  {
    "id": 470,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 147.029,
    "lat": -31.285,
    "color": "#ff69b4"
  },
  {
    "id": 471,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 149.398,
    "lat": -35.614,
    "color": "#ff69b4"
  },
  {
    "id": 472,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 151.38,
    "lat": -33.169,
    "color": "#ff69b4"
  },
  {
    "id": 473,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 146.191,
    "lat": -36.23,
    "color": "#ff69b4"
  },
  {
    "id": 474,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 148.344,
    "lat": -35.547,
    "color": "#ff69b4"
  },
  {
    "id": 475,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 150.524,
    "lat": -34.886,
    "color": "#ff69b4"
  },
  {
    "id": 476,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 117.055,
    "lat": -27.034,
    "color": "#f47920"
  },
  {
    "id": 477,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 115.929,
    "lat": -20.263,
    "color": "#f47920"
  },
  {
    "id": 478,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 125.269,
    "lat": -31.875,
    "color": "#f47920"
  },
  {
    "id": 479,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 117.906,
    "lat": -21.336,
    "color": "#f47920"
  },
  {
    "id": 480,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 124.215,
    "lat": -25.5,
    "color": "#f47920"
  },
  {
    "id": 481,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 123.124,
    "lat": -26.83,
    "color": "#f47920"
  },
  {
    "id": 482,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 122.299,
    "lat": -24.328,
    "color": "#f47920"
  },
  {
    "id": 483,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 123.929,
    "lat": -19.394,
    "color": "#f47920"
  },
  {
    "id": 484,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 135.652,
    "lat": -33.701,
    "color": "#005aab"
  },
  {
    "id": 485,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 137.664,
    "lat": -25.259,
    "color": "#005aab"
  },
  {
    "id": 486,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 135.798,
    "lat": -25.662,
    "color": "#005aab"
  },
  {
    "id": 487,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 137.516,
    "lat": -27.493,
    "color": "#005aab"
  },
  {
    "id": 488,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 137.843,
    "lat": -28.921,
    "color": "#005aab"
  },
  {
    "id": 489,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 132.37,
    "lat": -33.648,
    "color": "#005aab"
  },
  {
    "id": 490,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 138.447,
    "lat": -28.576,
    "color": "#005aab"
  },
  {
    "id": 491,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.514,
    "lat": -42.635,
    "color": "#6f2082"
  },
  {
    "id": 492,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 147.624,
    "lat": -42.899,
    "color": "#6f2082"
  },
  {
    "id": 493,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.757,
    "lat": -41.375,
    "color": "#6f2082"
  },
  {
    "id": 494,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.873,
    "lat": -43.161,
    "color": "#6f2082"
  },
  {
    "id": 495,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.155,
    "lat": -41.589,
    "color": "#6f2082"
  },
  {
    "id": 496,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 147.635,
    "lat": -41.764,
    "color": "#6f2082"
  },
  {
    "id": 497,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 142.361,
    "lat": -38.107,
    "color": "#00a650"
  },
  {
    "id": 498,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 144.546,
    "lat": -37.944,
    "color": "#00a650"
  },
  {
    "id": 499,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 142.663,
    "lat": -38.236,
    "color": "#00a650"
  },
  {
    "id": 500,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 145.903,
    "lat": -37.653,
    "color": "#00a650"
  },
  {
    "id": 501,
    "season": "2022-23",
    "season_idx": 11,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 146.258,
    "lat": -35.83,
    "color": "#00a650"
  },
  {
    "id": 502,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 147.247,
    "lat": -31.113,
    "color": "#ff69b4"
  },
  {
    "id": 503,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 146.178,
    "lat": -34.274,
    "color": "#ff69b4"
  },
  {
    "id": 504,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 146.276,
    "lat": -32.443,
    "color": "#ff69b4"
  },
  {
    "id": 505,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 145.313,
    "lat": -30.048,
    "color": "#ff69b4"
  },
  {
    "id": 506,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 150.086,
    "lat": -35.499,
    "color": "#ff69b4"
  },
  {
    "id": 507,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 146.726,
    "lat": -34.443,
    "color": "#ff69b4"
  },
  {
    "id": 508,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 152.053,
    "lat": -29.302,
    "color": "#ff69b4"
  },
  {
    "id": 509,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 146.22,
    "lat": -31.52,
    "color": "#ff69b4"
  },
  {
    "id": 510,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 150.512,
    "lat": -32.326,
    "color": "#ff69b4"
  },
  {
    "id": 511,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Sydney Sixers",
    "state": "NSW",
    "lon": 146.743,
    "lat": -29.699,
    "color": "#ff69b4"
  },
  {
    "id": 512,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 115.171,
    "lat": -19.887,
    "color": "#f47920"
  },
  {
    "id": 513,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 124.04,
    "lat": -24.295,
    "color": "#f47920"
  },
  {
    "id": 514,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 118.266,
    "lat": -31.738,
    "color": "#f47920"
  },
  {
    "id": 515,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 119.67,
    "lat": -25.816,
    "color": "#f47920"
  },
  {
    "id": 516,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 121.876,
    "lat": -30.456,
    "color": "#f47920"
  },
  {
    "id": 517,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 119.464,
    "lat": -30.815,
    "color": "#f47920"
  },
  {
    "id": 518,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 115.291,
    "lat": -25.835,
    "color": "#f47920"
  },
  {
    "id": 519,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 120.782,
    "lat": -24.515,
    "color": "#f47920"
  },
  {
    "id": 520,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Perth Scorchers",
    "state": "WA",
    "lon": 120.207,
    "lat": -23.691,
    "color": "#f47920"
  },
  {
    "id": 521,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 149.315,
    "lat": -23.415,
    "color": "#e4002b"
  },
  {
    "id": 522,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 145.011,
    "lat": -21.724,
    "color": "#e4002b"
  },
  {
    "id": 523,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 143.836,
    "lat": -28.959,
    "color": "#e4002b"
  },
  {
    "id": 524,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 139.006,
    "lat": -20.903,
    "color": "#e4002b"
  },
  {
    "id": 525,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 145.054,
    "lat": -23.838,
    "color": "#e4002b"
  },
  {
    "id": 526,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 142.137,
    "lat": -27.561,
    "color": "#e4002b"
  },
  {
    "id": 527,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 146.129,
    "lat": -19.995,
    "color": "#e4002b"
  },
  {
    "id": 528,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Brisbane Heat",
    "state": "QLD",
    "lon": 139.432,
    "lat": -26.742,
    "color": "#e4002b"
  },
  {
    "id": 529,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 133.452,
    "lat": -32.156,
    "color": "#005aab"
  },
  {
    "id": 530,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 136.002,
    "lat": -27.027,
    "color": "#005aab"
  },
  {
    "id": 531,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 136.03,
    "lat": -27.104,
    "color": "#005aab"
  },
  {
    "id": 532,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 133.972,
    "lat": -31.172,
    "color": "#005aab"
  },
  {
    "id": 533,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 136.853,
    "lat": -26.611,
    "color": "#005aab"
  },
  {
    "id": 534,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 138.814,
    "lat": -27.796,
    "color": "#005aab"
  },
  {
    "id": 535,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Adelaide Strikers",
    "state": "SA",
    "lon": 132.912,
    "lat": -29.102,
    "color": "#005aab"
  },
  {
    "id": 536,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 142.418,
    "lat": -38.148,
    "color": "#00a650"
  },
  {
    "id": 537,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 144.185,
    "lat": -36.829,
    "color": "#00a650"
  },
  {
    "id": 538,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 143.046,
    "lat": -37.418,
    "color": "#00a650"
  },
  {
    "id": 539,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 143.491,
    "lat": -38.381,
    "color": "#00a650"
  },
  {
    "id": 540,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 146.451,
    "lat": -36.215,
    "color": "#00a650"
  },
  {
    "id": 541,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Melbourne Stars",
    "state": "VIC",
    "lon": 145.924,
    "lat": -38.267,
    "color": "#00a650"
  },
  {
    "id": 542,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 147.482,
    "lat": -40.971,
    "color": "#6f2082"
  },
  {
    "id": 543,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.207,
    "lat": -42.607,
    "color": "#6f2082"
  },
  {
    "id": 544,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 145.877,
    "lat": -42.722,
    "color": "#6f2082"
  },
  {
    "id": 545,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.68,
    "lat": -41.444,
    "color": "#6f2082"
  },
  {
    "id": 546,
    "season": "2023-24",
    "season_idx": 12,
    "team": "Hobart Hurricanes",
    "state": "TAS",
    "lon": 146.76,
    "lat": -41.047,
    "color": "#6f2082"
  }
];

const GOLD = "#f0b429",
  GD = "#0a2e1a",
  GM = "#1a5c35",
  GL = "#2d8a52",
  ENG = "#2471a3",
  ENGL = "#5dade2",
  TM = "rgba(232,224,206,0.7)",
  BG = "#060d08";
const CFG = {
  background: "transparent",
  font: "DM Sans",
  title: {
    font: "DM Sans",
    fontSize: 13,
    fontWeight: 600,
    color: "#fff",
    anchor: "start"
  },
  axis: {
    labelFont: "DM Sans",
    labelFontSize: 10,
    labelColor: "rgba(232,224,206,0.5)",
    titleFont: "DM Sans",
    titleFontSize: 10,
    titleColor: "rgba(232,224,206,0.5)",
    gridColor: "rgba(255,255,255,0.05)",
    domainColor: "rgba(255,255,255,0.1)",
    tickColor: "rgba(255,255,255,0.1)"
  },
  legend: {
    labelFont: "DM Sans",
    labelFontSize: 10,
    labelColor: "rgba(232,224,206,0.7)",
    titleFont: "DM Sans",
    titleFontSize: 10,
    titleColor: "rgba(232,224,206,0.5)",
    padding: 4
  },
  view: { stroke: "transparent" },
  mark: { tooltip: true }
};
const E = (id, spec) =>
  vegaEmbed(
    id,
    Object.assign(
      {
        $schema: "https://vega.github.io/schema/vega-lite/v5.json",
        width: "container",
        config: CFG
      },
      spec
    ),
    { actions: false }
  );

// 1. Test combo

// 2. ODI combo

// 1. ISOTYPE — Vega-Lite with tournament filter
const ISO_DATA = [
  {
    nation: "Australia",
    tournament: "ODI WC",
    titles: 6,
    era: "Mixed",
    icon: "🏆"
  },
  {
    nation: "Australia",
    tournament: "T20 WC",
    titles: 2,
    era: "2010s",
    icon: "⚡"
  },
  {
    nation: "Australia",
    tournament: "Champions Trophy",
    titles: 2,
    era: "2000s",
    icon: "🥇"
  },
  {
    nation: "Australia",
    tournament: "Test Championship",
    titles: 1,
    era: "2020s",
    icon: "👑"
  },
  {
    nation: "India",
    tournament: "ODI WC",
    titles: 2,
    era: "Mixed",
    icon: "🏆"
  },
  {
    nation: "India",
    tournament: "T20 WC",
    titles: 2,
    era: "Mixed",
    icon: "⚡"
  },
  {
    nation: "India",
    tournament: "Champions Trophy",
    titles: 3,
    era: "Mixed",
    icon: "🥇"
  },
  {
    nation: "West Indies",
    tournament: "ODI WC",
    titles: 2,
    era: "Pre-2000",
    icon: "🏆"
  },
  {
    nation: "West Indies",
    tournament: "T20 WC",
    titles: 2,
    era: "2010s",
    icon: "⚡"
  },
  {
    nation: "England",
    tournament: "ODI WC",
    titles: 1,
    era: "2010s",
    icon: "🏆"
  },
  {
    nation: "England",
    tournament: "T20 WC",
    titles: 2,
    era: "Mixed",
    icon: "⚡"
  },
  {
    nation: "England",
    tournament: "Champions Trophy",
    titles: 1,
    era: "2000s",
    icon: "🥇"
  },
  {
    nation: "Pakistan",
    tournament: "ODI WC",
    titles: 1,
    era: "Pre-2000",
    icon: "🏆"
  },
  {
    nation: "Pakistan",
    tournament: "T20 WC",
    titles: 1,
    era: "2000s",
    icon: "⚡"
  },
  {
    nation: "Pakistan",
    tournament: "Champions Trophy",
    titles: 2,
    era: "Mixed",
    icon: "🥇"
  },
  {
    nation: "Sri Lanka",
    tournament: "ODI WC",
    titles: 1,
    era: "Pre-2000",
    icon: "🏆"
  },
  {
    nation: "Sri Lanka",
    tournament: "T20 WC",
    titles: 1,
    era: "2010s",
    icon: "⚡"
  },
  {
    nation: "Sri Lanka",
    tournament: "Champions Trophy",
    titles: 1,
    era: "2000s",
    icon: "🥇"
  },
  
  {
    nation: "New Zealand",
    tournament: "Test Championship",
    titles: 1,
    era: "2020s",
    icon: "👑"
  }
];
let isoFilter = "All";
function renderIsotype(filter) {
  isoFilter = filter;
  document
    .querySelectorAll(".iso-fbtn")
    .forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".iso-fbtn").forEach((b) => {
    if (b.dataset.val === filter) b.classList.add("active");
  });

  const filtered =
    filter === "All"
      ? ISO_DATA
      : ISO_DATA.filter((d) => d.tournament === filter);
  const nations = [
    "Australia",
    "India",
    "West Indies",
    "England",
    "Pakistan",
    "Sri Lanka",
    "New Zealand"
  ];
  const tourney_order = [
    "ODI WC",
    "T20 WC",
    "Champions Trophy",
    "Test Championship"
  ];
  const icons = {
    "ODI WC": "🏆",
    "T20 WC": "⚡",
    "Champions Trophy": "🥇",
    "Test Championship": "👑"
  };
  const annotations = {
    "Australia": "6 ODI World Cups — unmatched dominance",
    "India": "Strong all-format spread",
    "New Zealand": "Few titles, but recent Test Championship success",
    "West Indies": "Dominated pre-2000 era"
  };

  const shown = filter === "All" ? tourney_order : [filter];
  const colTemplate =
    filter === "All"
      ? "145px minmax(120px,1fr) minmax(120px,1fr) minmax(150px,1fr) minmax(150px,1fr) 92px"
      : "145px 1fr 92px";

  const el = document.getElementById("c-isotype");
  let h =
    '<div style="font-family:DM Sans,sans-serif;width:100%;overflow:hidden">';

  h += `<div style="display:grid;grid-template-columns:${colTemplate};align-items:end;padding:0 10px 8px 10px;column-gap:14px">`;
  h += `<div style="font-size:10px;font-family:DM Mono,monospace;color:rgba(232,224,206,0.42);letter-spacing:.1em;text-transform:uppercase">Nation</div>`;
  shown.forEach((t) => {
    let shift = 0;

    if (t === "ODI WC") shift = 6;
    if (t === "T20 WC") shift = 11;
    if (t === "Champions Trophy") shift = 7;
    if (t === "Test Championship") shift = 1;

    h += `<div style="
    font-size:10px;
    font-family:DM Mono,monospace;
    color:rgba(232,224,206,0.42);
    text-align:left;
    padding-left:${shift}px
  ">${t}</div>`;
  });
  h += `<div style="font-size:10px;font-family:DM Mono,monospace;color:rgba(232,224,206,0.42);text-align:right;text-transform:uppercase">Total</div></div>`;

  nations.forEach((nation) => {
    const isAus = nation === "Australia";
    const rowCounts = shown.map((t) =>
      filtered
        .filter((d) => d.nation === nation && d.tournament === t)
        .reduce((s, d) => s + d.titles, 0)
    );
    const total = rowCounts.reduce((s, v) => s + v, 0);
    if (total === 0 && filter !== "All") return;

    h += `<div style="display:grid;grid-template-columns:${colTemplate};align-items:center;min-height:58px;background:${isAus ? "rgba(240,180,41,0.08)" : "transparent"};border-left:${isAus ? "2px solid #f0b429" : "2px solid transparent"};border-radius:3px;margin-bottom:5px;padding:0 10px;column-gap:14px">`;
    h += `<div style="font-size:13.5px;font-weight:${isAus ? 700 : 400};color:${isAus ? "#f0b429" : "rgba(232,224,206,0.86)"};white-space:nowrap">${nation}</div>`;

    shown.forEach((t, idx) => {
      const cnt = rowCounts[idx];
      h += `<div style="display:flex;align-items:center;gap:4px;min-width:0;white-space:nowrap;overflow:hidden">`;
      for (let j = 0; j < cnt; j++)
        h += `<span style="font-size:21px;line-height:1;display:inline-block;filter:${isAus ? "" : "grayscale(0.18) opacity(0.78)"}">${icons[t]}</span>`;
      h += `</div>`;
    });

    h += `<div style="text-align:right;min-width:0">`;
    if (total > 0)
      h += `<div style="font-family:DM Mono,monospace;font-size:11px;color:${isAus ? "#f0b429" : "rgba(232,224,206,0.45)"}">${total} total</div>`;
    if (annotations[nation] && filter === "All")
      h += `<div style="font-size:9px;font-style:italic;color:rgba(232,224,206,0.38);line-height:1.3;margin-top:2px">${annotations[nation]}</div>`;
    h += `</div></div>`;
  });

  h += "</div>";
  el.innerHTML = h;
}
renderIsotype("All");

// 3. ICC Rankings — clean overview/detail brush zoom
let rankFormat = "All";
function makeMonthlyRankings(rows) {
  const out = [];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  ["Test", "ODI", "T20I"].forEach((format) => {
    const arr = rows
      .filter((d) => d.format === format)
      .sort((a, b) => a.year - b.year);
    for (let i = 0; i < arr.length - 1; i++) {
      const a = arr[i],
        b = arr[i + 1];
      for (let m = 0; m < 12; m++) {
        const t = m / 12;
        let rank = Math.round(a.rank + (b.rank - a.rank) * t);
        rank = Math.max(1, Math.min(5, rank));
        out.push({
          date: `${a.year}-${String(m + 1).padStart(2, "0")}-01`,
          year: a.year,
          month: monthNames[m],
          monthNum: m + 1,
          format,
          rank,
          isYearPoint: m === 0
        });
      }
    }
    const last = arr[arr.length - 1];
    for (let m = 0; m < 12; m++)
      out.push({
        date: `${last.year}-${String(m + 1).padStart(2, "0")}-01`,
        year: last.year,
        month: monthNames[m],
        monthNum: m + 1,
        format,
        rank: last.rank,
        isYearPoint: m === 0
      });
  });
  return out;
}
const D_RANKING_MONTHLY = makeMonthlyRankings(D_RANKING_ALL);
const D_RANKING_YEARLY = D_RANKING_MONTHLY.filter((d) => d.isYearPoint);
function rankBrushActiveExpr() {
  return "length(data('rankBrush_store')) > 0";
}
function renderRanking(fmt) {
  rankFormat = fmt;
  document
    .querySelectorAll(".rank-fbtn")
    .forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".rank-fbtn").forEach((b) => {
    if (b.dataset.val === fmt) b.classList.add("active");
  });

  const monthly =
    fmt === "All"
      ? D_RANKING_MONTHLY
      : D_RANKING_MONTHLY.filter((d) => d.format === fmt);
  const yearly =
    fmt === "All"
      ? D_RANKING_YEARLY
      : D_RANKING_YEARLY.filter((d) => d.format === fmt);
  const annots = [
    {
      date: "2013-12-01",
      rank: 0.76,
      label: "Ashes 5–0",
      format: "Test",
      col: GOLD,
      dy: -9
    },
    {
      date: "2015-03-01",
      rank: 0.76,
      label: "ODI WC ★",
      format: "ODI",
      col: GM,
      dy: -9
    },
    {
      date: "2018-03-01",
      rank: 5.3,
      label: "Cape Town",
      format: "Test",
      col: "#e74c3c",
      dy: 12
    },
    {
      date: "2021-11-01",
      rank: 0.76,
      label: "T20 WC ★",
      format: "T20I",
      col: ENG,
      dy: -9
    },
    {
      date: "2023-11-01",
      rank: 0.76,
      label: "ODI WC ★",
      format: "ODI",
      col: GM,
      dy: -9
    }
  ].filter((a) => fmt === "All" || a.format === fmt);
  const rules = annots.map((a) => ({
    date: a.date,
    col: a.col,
    format: a.format
  }));
  const active = rankBrushActiveExpr();
  const rankEl = document.getElementById("c-rank");
  const rankWidth = Math.max(
    760,
    Math.min(1120, (rankEl ? rankEl.clientWidth : 1120) - 18)
  );

  rankEl.innerHTML = `<div class="rank-html-legend">
    <span><i style="background:${"#FF0000"}"></i>Test</span>
    <span><i style="background:${GM}"></i>ODI</span>
    <span><i style="background:${ENG}"></i>T20I</span>
  </div><div id="c-rank-vega"></div>`;

  vegaEmbed(
    "#c-rank-vega",
    {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      width: rankWidth,
      padding: { left: 5, right: 18, top: 4, bottom: 2 },
      autosize: { type: "fit", contains: "padding", resize: true },
      config: CFG,
      vconcat: [
        {
          height: 318,
          layer: [
            {
              data: { values: yearly },
              mark: {
                type: "line",
                strokeWidth: 2.9,
                interpolate: "linear",
                clip: true
              },
              encoding: {
                x: {
                  field: "date",
                  type: "temporal",
                  title: null,
                  scale: { domain: { param: "rankBrush", encoding: "x" } },
                  axis: {
                    labelFlush: true,
                    labelOverlap: true,
                    tickCount: { interval: "year", step: 2 }
                  }
                },
                y: {
                  field: "rank",
                  type: "quantitative",
                  title: "ICC Rank (1 = best)",
                  scale: { domain: [5.5, 0.5] },
                  axis: { values: [1, 2, 3, 4, 5], format: "d" }
                },
                color: {
                  field: "format",
                  type: "nominal",
                  scale: {
                    domain: ["Test", "ODI", "T20I"],
                    range: ["#FF0000", GM, ENG]
                  },
                  legend: null
                },
                detail: { field: "format" },
                opacity: {
                  condition: { test: `!(${active})`, value: 1 },
                  value: 0
                },
                tooltip: [
                  { field: "year", title: "Year" },
                  { field: "format", title: "Format" },
                  { field: "rank", title: "Rank" }
                ]
              }
            },
            {
              data: { values: yearly },
              mark: { type: "point", filled: true, size: 44, clip: true },
              encoding: {
                x: {
                  field: "date",
                  type: "temporal",
                  scale: { domain: { param: "rankBrush", encoding: "x" } }
                },
                y: { field: "rank", type: "quantitative" },
                color: {
                  field: "format",
                  type: "nominal",
                  scale: {
                    domain: ["Test", "ODI", "T20I"],
                    range: ["#FF0000", GM, ENG]
                  },
                  legend: null
                },
                opacity: {
                  condition: { test: `!(${active})`, value: 1 },
                  value: 0
                },
                tooltip: [
                  { field: "year", title: "Year" },
                  { field: "format", title: "Format" },
                  { field: "rank", title: "Rank" }
                ]
              }
            },
            {
              data: { values: monthly },
              mark: {
                type: "line",
                strokeWidth: 2.4,
                interpolate: "step-after",
                clip: true
              },
              encoding: {
                x: {
                  field: "date",
                  type: "temporal",
                  title: null,
                  scale: { domain: { param: "rankBrush", encoding: "x" } },
                  axis: { labelFlush: true, labelOverlap: "greedy" }
                },
                y: {
                  field: "rank",
                  type: "quantitative",
                  title: "ICC Rank (1 = best)",
                  scale: { domain: [5.5, 0.5] },
                  axis: { values: [1, 2, 3, 4, 5], format: "d" }
                },
                color: {
                  field: "format",
                  type: "nominal",
                  scale: {
                    domain: ["Test", "ODI", "T20I"],
                    range: ["#FF0000", GM, ENG]
                  },
                  legend: null
                },
                detail: { field: "format" },
                opacity: { condition: { test: active, value: 1 }, value: 0 },
                tooltip: [
                  { field: "month", title: "Month" },
                  { field: "year", title: "Year" },
                  { field: "format", title: "Format" },
                  { field: "rank", title: "Rank" }
                ]
              }
            },
            {
              data: { values: monthly },
              mark: { type: "point", filled: true, size: 18, clip: true },
              encoding: {
                x: {
                  field: "date",
                  type: "temporal",
                  scale: { domain: { param: "rankBrush", encoding: "x" } }
                },
                y: { field: "rank", type: "quantitative" },
                color: {
                  field: "format",
                  type: "nominal",
                  scale: {
                    domain: ["Test", "ODI", "T20I"],
                    range: ["#FF0000", GM, ENG]
                  },
                  legend: null
                },
                opacity: { condition: { test: active, value: 0.72 }, value: 0 },
                tooltip: [
                  { field: "month", title: "Month" },
                  { field: "year", title: "Year" },
                  { field: "format", title: "Format" },
                  { field: "rank", title: "Rank" }
                ]
              }
            },
            {
              data: { values: rules },
              mark: {
                type: "rule",
                strokeDash: [4, 3],
                strokeWidth: 1,
                opacity: 0.3,
                clip: true
              },
              encoding: {
                x: {
                  field: "date",
                  type: "temporal",
                  scale: { domain: { param: "rankBrush", encoding: "x" } }
                },
                color: {
                  field: "col",
                  type: "nominal",
                  scale: null,
                  legend: null
                }
              }
            },
            {
              data: { values: annots },
              mark: {
                type: "text",
                fontSize: 9.5,
                fontStyle: "italic",
                font: "DM Sans",
                clip: true
              },
              encoding: {
                x: {
                  field: "date",
                  type: "temporal",
                  scale: { domain: { param: "rankBrush", encoding: "x" } }
                },
                y: { field: "rank", type: "quantitative" },
                text: { field: "label" },
                color: {
                  field: "col",
                  type: "nominal",
                  scale: null,
                  legend: null
                },
                dy: { field: "dy" }
              }
            }
          ]
        },
        {
          height: 58,
          data: { values: monthly },
          params: [
            {
              name: "rankBrush",
              select: { type: "interval", encodings: ["x"] }
            }
          ],
          mark: {
            type: "line",
            strokeWidth: 1.45,
            interpolate: "step-after",
            point: false,
            clip: true
          },
          encoding: {
            x: {
              field: "date",
              type: "temporal",
              title: "Drag this mini-chart to zoom",
              axis: { labelOverlap: true, labelFlush: true, labelFontSize: 9 }
            },
            y: {
              field: "rank",
              type: "quantitative",
              title: null,
              scale: { domain: [5.5, 0.5] },
              axis: null
            },
            color: {
              field: "format",
              type: "nominal",
              scale: {
                domain: ["Test", "ODI", "T20I"],
                range: ["#FF0000", GM, ENG]
              },
              legend: null
            },
            detail: { field: "format" }
          }
        }
      ],
      resolve: { scale: { color: "independent" } }
    },
    { actions: false }
  );
}
renderRanking("All");

// 4. Calendar heatmap — fixed labels + grey no-match tiles
E("#c-calendar", {
  height: 310,
  data: { values: D_CALENDAR_DISPLAY },
  layer: [
    {
      mark: {
        type: "rect",
        cornerRadius: 3,
        stroke: "rgba(6,13,8,0.55)",
        strokeWidth: 0.5
      },
      encoding: {
        x: {
          field: "year",
          type: "ordinal",
          title: "Year",
          axis: {
            labelAngle: -90,
            labelColor: "rgba(232,224,206,0.55)",
            labelFontSize: 9
          }
        },
        y: {
          field: "month",
          type: "ordinal",
          title: null,
          sort: CAL_MONTHS,
          axis: { labelColor: "rgba(232,224,206,0.62)", labelFontSize: 10 }
        },
        color: {
          condition: { test: "datum.no_play", value: "#000000" },
          field: "win_pct",
          type: "quantitative",
          title: "Win %",
          scale: { domain: [0, 50, 100], range: ["#8b2020", "#3b3b32", GOLD] },
          legend: { orient: "right", gradientLength: 165, offset: 8 }
        },
        tooltip: [
          { field: "year", title: "Year" },
          { field: "month", title: "Month" },
          { field: "matches", title: "Matches" },
          { field: "wins", title: "Wins" },
          { field: "win_pct", title: "Win %" }
        ]
      }
    },
    {
      mark: {
        type: "text",
        fontSize: 7.3,
        font: "DM Mono",
        fontWeight: "600",
        tooltip: false
      },
      encoding: {
        x: { field: "year", type: "ordinal" },
        y: { field: "month", type: "ordinal", sort: CAL_MONTHS },
        text: { field: "label" },
        color: {
          condition: [
            { test: "datum.no_play", value: "rgba(232,224,206,0.48)" },
            { test: "datum.win_pct>=70", value: "#060d08" }
          ],
          value: "rgba(232,224,206,0.9)"
        }
      }
    }
  ]
});

// 5. Ashes waterfall with annotations
const ASHES_ANNOTS = [
  { series: "1950-51", label: "17-year Ashes streak", y: 5.8, dx: -20 },
  {
    series: "2010-11",
    label: "England's iconic win",
    y: 5.8,
    dx: 15
  },
  { series: "2002-03", label: "8 straight series wins", y: 6.2, dx: 0 }
];
let ashesLocation = "all";
function renderAshes(loc) {
  const vals =
    loc === "all" ? D_ASHES : D_ASHES.filter((d) => d.location === loc);
  const annotVals = ASHES_ANNOTS.filter((a) =>
    vals.some((v) => String(v.series) === String(a.series))
  );
  E("#c-ashes", {
    height: 360,
    data: { values: vals },
    layer: [
      {
        mark: { type: "bar", cornerRadiusTopLeft: 2, cornerRadiusTopRight: 2 },
        encoding: {
          x: {
            field: "series",
            type: "ordinal",
            title: "Series",
            axis: {
              labelAngle: -55,
              labelFontSize: 7,
              labelColor: "rgba(232,224,206,0.4)"
            }
          },
          y: {
            field: "aus_wins",
            type: "quantitative",
            title: "AUS wins ↑ / ENG wins ↓",
            scale: { domain: [-6, 6.5] }
          },
          color: {
            condition: [
              { test: "datum.winner==='Australia'", value: GOLD },
              { test: "datum.winner==='Draw'", value: "#555" }
            ],
            value: "#444"
          },
          tooltip: [
            { field: "series" },
            { field: "location" },
            { field: "winner" },
            { field: "margin_label", title: "Result" }
          ]
        }
      },
      {
        transform: [{ calculate: "-datum.eng_wins", as: "eng_neg" }],
        mark: {
          type: "bar",
          cornerRadiusBottomLeft: 2,
          cornerRadiusBottomRight: 2
        },
        encoding: {
          x: { field: "series", type: "ordinal" },
          y: {
            field: "eng_neg",
            type: "quantitative",
            scale: { domain: [-6, 6.5] }
          },
          color: {
            condition: { test: "datum.winner==='England'", value: ENG },
            value: ENGL + "44"
          },
          tooltip: [
            { field: "series" },
            { field: "location" },
            { field: "winner" },
            { field: "margin_label", title: "Result" }
          ]
        }
      },
      {
        data: { values: annotVals },
        mark: {
          type: "rule",
          color: GOLD,
          strokeDash: [3, 3],
          strokeWidth: 1,
          opacity: 0.5
        },
        encoding: { x: { field: "series", type: "ordinal" } }
      },
      {
        data: { values: annotVals },
        mark: {
          type: "text",
          angle: 0,
          align: "center",
          dx: 6,
          dy: -38,
          fontSize: 9,
          font: "DM Sans",
          fontStyle: "italic",
          color: GOLD,
          opacity: 0.8
        },
        encoding: {
          x: { field: "series", type: "ordinal" },
          y: { field: "y", type: "quantitative" },
          text: { field: "label" }
        }
      }
    ]
  });
}
renderAshes("all");
function filterAshes(loc, btn) {
  ashesLocation = loc;
  document
    .querySelectorAll(".fbtn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderAshes(loc === "all" ? "all" : loc);
}

// 6. Bubble map — country fill = win rate, bubble = semi-transparent with gold outline
vegaEmbed(
  "#c-map",
  {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    width: "container",
    height: 440,
    config: {
      background: "transparent",
      view: { stroke: "rgba(240,180,41,0.2)" },
      font: "DM Sans",
      legend: {
        labelFont: "DM Sans",
        labelColor: "rgba(232,224,206,0.6)",
        titleColor: "rgba(232,224,206,0.5)",
        titleFont: "DM Sans"
      }
    },
    projection: { type: "naturalEarth1" },
    layer: [
      {
        data: { sphere: true },
        mark: {
          type: "geoshape",
          fill: "#06120b",
          stroke: "rgba(240,180,41,0.35)",
          strokeWidth: 1.2
        }
      },
      // Base world — all dark
      {
        data: {
          url: "https://cdn.jsdelivr.net/npm/vega-datasets@2/data/world-110m.json",
          format: { type: "topojson", feature: "countries" }
        },
        mark: {
          type: "geoshape",
          fill: "#0a1a0f",
          stroke: "rgba(255,255,255,0.20)",
          strokeWidth: 0.7
        }
      },
      // Opponent countries — filled by win rate
      {
        data: { values: D_HTH },
        transform: [
          {
            lookup: "id",
            from: {
              data: {
                url: "https://cdn.jsdelivr.net/npm/vega-datasets@2/data/world-110m.json",
                format: { type: "topojson", feature: "countries" }
              },
              key: "id"
            },
            as: "geo"
          }
        ],
        mark: {
          type: "geoshape",
          stroke: "rgba(240,180,41,0.5)",
          strokeWidth: 1.2
        },
        encoding: {
          shape: { field: "geo", type: "geojson" },
          color: {
            field: "test_win_rate",
            type: "quantitative",
            scale: { domain: [40, 95], range: ["#1a5c35", "#f0b429"] },
            legend: {
              title: "Win Rate (%)",
              orient: "bottom-right",
              gradientLength: 130,
              offset: 8,
              values: [40, 60, 80, 100]
            }
          },
          tooltip: [
            { field: "country" },
            { field: "test_win_rate", title: "Test Win %", format: ".1f" },
            { field: "test_matches", title: "Tests Played" },
            { field: "odi_win_rate", title: "ODI Win %", format: ".1f" }
          ]
        }
      },
      // Bubbles — semi-transparent fill (so country color shows through) + gold ring
      // Bubble outer black ring
      {
        data: { values: D_HTH },
        transform: [{ calculate: "datum.test_matches", as: "black_matches" }],
        mark: {
          type: "circle",
          opacity: 0.28,
          fill: "transparent",
          stroke: "rgba(255,255,255,0.6)",
          strokeWidth: 4
        },
        encoding: {
          longitude: { field: "lon", type: "quantitative" },
          latitude: { field: "lat", type: "quantitative" },
          size: {
            field: "black_matches",
            type: "quantitative",
            title: "Tests Played",
            scale: { domain: [0, 400], range: [200, 4000] }
          }
        }
      },

      // Bubble inner white ring
      {
        data: { values: D_HTH },
        transform: [{ calculate: "datum.test_matches", as: "legend_matches" }],
        mark: {
          type: "circle",
          opacity: 0.9,
          fill: "transparent",
          stroke: "#ffffff",
          strokeWidth: 1.6
        },
        encoding: {
          longitude: { field: "lon", type: "quantitative" },
          latitude: { field: "lat", type: "quantitative" },
          size: {
            field: "legend_matches",
            type: "quantitative",
            title: "Tests Played",
            scale: { domain: [0, 400], range: [200, 4000] },
            legend: {
              orient: "bottom-left",
              offset: 8,
              symbolFillColor: "transparent",
              symbolStrokeColor: "#ffffff",
              symbolStrokeWidth: 2,
              symbolOpacity: 1
            }
          },
          tooltip: [
            { field: "country" },
            { field: "test_win_rate", title: "Test Win %", format: ".1f" },
            { field: "test_matches", title: "Tests Played" },
            { field: "odi_win_rate", title: "ODI Win %", format: ".1f" }
          ]
        }
      },
      // Country annotations
      {
        data: {
          values: [
            { lon: -0.1, lat: 59.5, label: "Most historic rivalry" },
            { lon: 78.9, lat: 26, label: "" },
            { lon: -59.6, lat: 15.9, label: "Historic dominance" },
            { lon: 174.9, lat: -36, label: "Close regional rival" }
          ]
        },
        mark: {
          type: "text",
          fontSize: 9,
          fontStyle: "italic",
          font: "DM Sans",
          dy: -14,
          color: "#f0b429"
        },
        encoding: {
          longitude: { field: "lon", type: "quantitative" },
          latitude: { field: "lat", type: "quantitative" },
          text: { field: "label" }
        }
      }
    ]
  },
  { actions: false }
);

// 7. Rose chart — loaded from js/rose_chart.json
vegaEmbed("#c-rose", "js/rose_chart.json", { actions: false });

// 8. Box plot with batter type filter + annotations
const D_BOX_TYPED = D_BOX.map((p) => {
  const openers = ["Matthew Hayden", "David Warner", "Mark Taylor"];
  return {
    ...p,
    batter_type: openers.includes(p.player) ? "Opener" : "Middle Order"
  };
});
const BOX_ANNOTS = [
  { player: "Don Bradman", mean: 99, label: "All time great" },
  { player: "Steve Smith", mean: 59, label: "Modern great" }
];
let boxFilter = "All";
function renderBox(filter) {
  boxFilter = filter;
  document
    .querySelectorAll(".box-fbtn")
    .forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".box-fbtn").forEach((b) => {
    if (b.dataset.val === filter) b.classList.add("active");
  });
  const vals =
    filter === "All"
      ? D_BOX_TYPED
      : D_BOX_TYPED.filter((d) => d.batter_type === filter);
  const annotVals = BOX_ANNOTS.filter((a) =>
    vals.some((v) => v.player === a.player)
  );
  E("#c-box", {
    height: 300,
    data: { values: vals },
    layer: [
      {
        mark: { type: "rule", color: "rgba(232,224,206,0.2)" },
        encoding: {
          x: {
            field: "player",
            type: "nominal",
            title: null,
            sort: { field: "mean", order: "descending" },
            axis: {
              labelAngle: -28,
              labelFontSize: 10,
              labelColor: "rgba(232,224,206,0.6)"
            }
          },
          y: { field: "min_runs", type: "quantitative", title: "Innings Runs" },
          y2: { field: "max_runs" }
        }
      },
      {
        mark: { type: "bar", width: 28 },
        encoding: {
          x: {
            field: "player",
            type: "nominal",
            sort: { field: "mean", order: "descending" }
          },
          y: { field: "q1", type: "quantitative" },
          y2: { field: "q3" },
          color: { value: GOLD },
          opacity: { value: 0.75 }
        }
      },
      {
        mark: { type: "tick", color: "#fff", thickness: 3, width: 28 },
        encoding: {
          x: {
            field: "player",
            type: "nominal",
            sort: { field: "mean", order: "descending" }
          },
          y: { field: "median", type: "quantitative" }
        }
      },
      {
        mark: { type: "point", filled: true, color: "#e74c3c", size: 55 },
        encoding: {
          x: {
            field: "player",
            type: "nominal",
            sort: { field: "mean", order: "descending" }
          },
          y: { field: "mean", type: "quantitative" },
          tooltip: [
            { field: "player" },
            { field: "batter_type", title: "Type" },
            { field: "min_runs", title: "Min" },
            { field: "q1", title: "Q1" },
            { field: "median", title: "Median" },
            { field: "mean", title: "Mean" },
            { field: "q3", title: "Q3" },
            { field: "max_runs", title: "Max" }
          ]
        }
      },
      {
        data: { values: annotVals },
        mark: {
          type: "text",
          align: "center",
          dy: -185,
          fontSize: 9,
          font: "DM Sans",
          fontStyle: "italic",
          color: GOLD
        },
        encoding: {
          x: { field: "player", type: "nominal" },
          y: { field: "mean", type: "quantitative" },
          text: { field: "label" }
        }
      }
    ]
  });
}
renderBox("All");

// 9. Home vs Away with clear callout annotations
const HA_ANNOTS = [
  {
    player: "Don Bradman",
    home_avg: 101.22,
    away_avg: 91.4,
    label: "Best average everywhere",
    labelX: 96,
    dy: -18,
    align: "left"
  },
  {
    player: "David Warner",
    home_avg: 53.11,
    away_avg: 37.84,
    label: "Poorer away record",
    labelX: 34,
    dy: 18,
    align: "left"
  },
  {
    player: "Allan Border",
    home_avg: 52.31,
    away_avg: 49.12,
    label: "Most consistent",
    labelX: 43,
    dy: 20,
    align: "left"
  }
];
E("#c-ha", {
  height: 430,
  data: { values: D_HOMEAWAY },
  layer: [
    {
      mark: { type: "rule", color: "rgba(240,180,41,0.25)", strokeWidth: 2 },
      encoding: {
        y: {
          field: "player",
          type: "nominal",
          title: null,
          sort: { field: "home_avg", order: "descending" },
          axis: { labelColor: "rgba(232,224,206,0.75)", labelFontSize: 11 }
        },
        x: {
          field: "away_avg",
          type: "quantitative",
          title: "Batting Average",
          scale: { domain: [30, 110] }
        },
        x2: { field: "home_avg" }
      }
    },
    {
      mark: { type: "point", filled: true, size: 100, color: GM },
      encoding: {
        y: {
          field: "player",
          type: "nominal",
          sort: { field: "home_avg", order: "descending" }
        },
        x: { field: "away_avg", type: "quantitative" },
        tooltip: [
          { field: "player", title: "Player" },
          { field: "away_avg", title: "Away Avg", format: ".2f" },
          { field: "era", title: "Era" }
        ]
      }
    },
    {
      mark: { type: "point", filled: true, size: 100, color: GOLD },
      encoding: {
        y: {
          field: "player",
          type: "nominal",
          sort: { field: "home_avg", order: "descending" }
        },
        x: { field: "home_avg", type: "quantitative" },
        tooltip: [
          { field: "player", title: "Player" },
          { field: "home_avg", title: "Home Avg", format: ".2f" },
          { field: "era", title: "Era" }
        ]
      }
    },
    {
      data: { values: HA_ANNOTS },
      mark: {
        type: "text",
        fontSize: 9,
        font: "DM Sans",
        fontStyle: "italic",
        color: "rgba(240,180,41,0.9)",
        dx: 4
      },
      encoding: {
        y: {
          field: "player",
          type: "nominal",
          sort: { field: "home_avg", order: "descending" }
        },
        x: { field: "labelX", type: "quantitative" },
        text: { field: "label" },
        dy: { field: "dy" },
        align: { field: "align", type: "nominal", scale: null, legend: null }
      }
    }
  ]
});

// 10. Bowling scatter — pace/spin filter + min wickets + annotations
const BOWL_TYPED = D_BOWLING.filter((d) => d.format === "Test").map((p) => {
  const spinners = ["Shane Warne", "Richie Benaud", "Nathan Lyon"];
  return { ...p, bowl_type: spinners.includes(p.player) ? "Spin" : "Pace" };
});
const BOWL_ANNOTS = [
  {
    player: "Shane Warne",
    wickets: 708,
    average: 25.41,
    label: "708 wkts — elite spin",
    labelX: 640,
    labelY: 25.95,
    align: "right",
    dx: -8
  },
  {
    player: "Glenn McGrath",
    wickets: 563,
    average: 21.64,
    label: "Low avg + huge volume",
    labelX: 535,
    labelY: 22.55,
    align: "right",
    dx: -8
  }
];
let bowlType = "All",
  bowlMinWkts = 100;
function renderBowl(type, minW) {
  if (type !== undefined) bowlType = type;
  if (minW !== undefined) bowlMinWkts = minW;
  document
    .querySelectorAll(".bowl-fbtn")
    .forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".bowl-fbtn").forEach((b) => {
    if (b.dataset.val === bowlType) b.classList.add("active");
  });
  document
    .querySelectorAll(".bowl-wfbtn")
    .forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".bowl-wfbtn").forEach((b) => {
    if (parseInt(b.dataset.val) === bowlMinWkts) b.classList.add("active");
  });
  let vals = BOWL_TYPED.filter((d) => d.wickets >= bowlMinWkts);
  if (bowlType !== "All") vals = vals.filter((d) => d.bowl_type === bowlType);
  const annotVals = BOWL_ANNOTS.filter((a) =>
    vals.some((v) => v.player === a.player)
  );
  E("#c-bowl", {
    height: 380,
    data: { values: vals },
    layer: [
      {
        mark: { type: "point", filled: true, size: 160, opacity: 0.9 },
        encoding: {
          x: {
            field: "wickets",
            type: "quantitative",
            title: "Test Wickets",
            scale: { domain: [0, 800] }
          },
          y: {
            field: "average",
            type: "quantitative",
            title: "Bowling Average",
            scale: { domain: [18, 36] }
          },
          color: {
            field: "bowl_type",
            type: "nominal",
            scale: { domain: ["Pace", "Spin"], range: ["#e74c3c", GOLD] },
            legend: { title: "Type", orient: "top-right", offset: 5 }
          },
          tooltip: [
            { field: "player" },
            { field: "wickets" },
            { field: "bowl_type", title: "Type" },
            { field: "average", format: ".2f" },
            { field: "economy", format: ".2f" },
            { field: "five_wickets", title: "5-wkt hauls" },
            { field: "era" }
          ]
        }
      },
      {
        mark: {
          type: "text",
          align: "left",
          dx: 9,
          fontSize: 10,
          font: "DM Sans",
          color: "rgba(232,224,206,0.8)"
        },
        encoding: {
          x: { field: "wickets", type: "quantitative" },
          y: { field: "average", type: "quantitative" },
          text: { field: "player" }
        }
      },
      {
        data: { values: annotVals },
        mark: {
          type: "rule",
          strokeDash: [3, 3],
          strokeWidth: 1,
          color: "rgba(240,180,41,0.38)"
        },
        encoding: {
          x: { field: "wickets", type: "quantitative" },
          x2: { field: "labelX" },
          y: { field: "average", type: "quantitative" },
          y2: { field: "labelY" }
        }
      },
      {
        data: { values: annotVals },
        mark: {
          type: "text",
          fontSize: 9,
          font: "DM Sans",
          fontStyle: "italic",
          color: "rgba(240,180,41,0.86)",
          dy: -4
        },
        encoding: {
          x: { field: "labelX", type: "quantitative" },
          y: { field: "labelY", type: "quantitative" },
          text: { field: "label" },
          align: { field: "align", type: "nominal", scale: null, legend: null },
          dx: { field: "dx" }
        }
      }
    ]
  });
}
renderBowl("All", 100);

// 11. Captain Radar
function renderRadar(captain) {
  document.getElementById("radar-title").textContent =
    captain + " \u2014 Captain Radar";
  const data = D_RADAR.filter((d) => d.captain === captain);
  const metrics = [
    "Win %",
    "Batting Avg",
    "WC Titles",
    "Ashes Wins",
    "Tests Led",
    "Runs Scored"
  ];
  const n = metrics.length,
    cx = 300,
    cy = 190,
    r = 145;
  const pts = data.map((d, i) => {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2,
      rv = (d.value / 100) * r;
    return { x: cx + rv * Math.cos(a), y: cy + rv * Math.sin(a), v: d.value };
  });
  const axPts = metrics.map((_, i) => {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  });
  let gridS = "",
    axS = "",
    labS = "",
    valS = "";
  [0.25, 0.5, 0.75, 1].forEach((lv) => {
    const gp = metrics
      .map((_, i) => {
        const a = (Math.PI * 2 * i) / n - Math.PI / 2;
        return cx + lv * r * Math.cos(a) + "," + (cy + lv * r * Math.sin(a));
      })
      .join(" ");
    gridS += `<polygon points="${gp}" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>`;
    const ly = cy - lv * r - 6;
    gridS += `<text x="${cx + 4}" y="${ly}" font-family="DM Mono" font-size="8" fill="rgba(232,224,206,0.25)">${Math.round(lv * 100)}</text>`;
  });
  axPts.forEach((p, i) => {
    axS += `<line x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}" stroke="rgba(240,180,41,0.15)" stroke-width="1"/>`;
    const lx = cx + (r + 26) * Math.cos((Math.PI * 2 * i) / n - Math.PI / 2),
      ly = cy + (r + 26) * Math.sin((Math.PI * 2 * i) / n - Math.PI / 2);
    const anc = lx < cx - 5 ? "end" : lx > cx + 5 ? "start" : "middle";
    labS += `<text x="${lx}" y="${ly}" text-anchor="${anc}" dominant-baseline="middle" font-family="DM Sans" font-size="11" fill="rgba(232,224,206,0.7)">${metrics[i]}</text>`;
  });
  pts.forEach((p) => {
    valS += `<text x="${p.x}" y="${p.y - 9}" text-anchor="middle" font-family="DM Mono" font-size="9" fill="${GOLD}">${p.v}</text>`;
  });
  document.getElementById("c-radar").innerHTML =
    `<svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:380px">
    ${gridS}${axS}
    <polygon points="${pts.map((p) => p.x + "," + p.y).join(" ")}" fill="${GOLD}" fill-opacity="0.18" stroke="${GOLD}" stroke-width="2"/>
    ${pts.map((p) => `<circle cx="${p.x}" cy="${p.y}" r="5" fill="${GOLD}" stroke="rgba(6,13,8,0.8)" stroke-width="2"/>`).join("")}
    ${labS}${valS}
  </svg>`;
}
function renderCaptainImpact(captain) {
  document.getElementById("captain-impact-title").textContent =
    captain + " — Captaincy Record";

  const c = D_CAPTAINS.find((d) => d.captain === captain);

  const items = [
    { label: "Win rate", value: c.win_pct + "%" },
    { label: "Matches led", value: c.matches },
    { label: "World Cups", value: c.wc_titles },
    { label: "Ashes wins", value: c.ashes_series },
    { label: "Batting avg", value: c.batting_avg },
    { label: "Test runs", value: c.test_runs.toLocaleString() }
  ];

  document.getElementById("captain-impact").innerHTML = items
    .map(
      (d) => `
    <div class="impact-card">
      <div class="impact-num">${d.value}</div>
      <div class="impact-label">${d.label}</div>
    </div>
  `
    )
    .join("");
}

function selectCaptain(name, card) {
  document
    .querySelectorAll(".cap-card")
    .forEach((c) => c.classList.remove("active"));
  card.classList.add("active");
  renderRadar(name);
  renderCaptainImpact(name);
}

renderRadar("Allan Border");
renderCaptainImpact("Allan Border");

// 12. Donut — Vega-Lite direct-label version
const DONUT_DATA = [
  { nation: "Australia", finals: 8 },
  { nation: "India", finals: 3 },
  { nation: "West Indies", finals: 3 },
  { nation: "England", finals: 3 },
  { nation: "Others", finals: 4 },
  { nation: "Pakistan", finals: 2 },
  { nation: "Sri Lanka", finals: 2 },
  { nation: "New Zealand", finals: 2 }
];
E("#c-donut", {
  height: 360,
  data: { values: DONUT_DATA },
  config: { ...CFG, view: { stroke: "transparent" } },
  layer: [
    {
      mark: {
        type: "arc",
        innerRadius: 74,
        outerRadius: 126,
        stroke: "rgba(6,13,8,0.9)",
        strokeWidth: 2
      },
      encoding: {
        theta: { field: "finals", type: "quantitative", stack: true },
        color: {
          field: "nation",
          type: "nominal",
          scale: {
            domain: [
              "Australia",
              "West Indies",
              "India",
              "England",
              "Others",
              "Pakistan",
              "Sri Lanka",
              "New Zealand"
            ],
            range: [
              GOLD,
              "#8b1010",
              "#FF8800",
              "#0b3d91",
              "#555",
              "#01411C",
              "#1a5c9c",
              "#222"
            ]
          },
          legend: null
        },
        tooltip: [
          { field: "nation", title: "Nation" },
          { field: "finals", title: "Finals Reached" }
        ]
      }
    },
    {
      mark: {
        type: "text",
        radius: 156,
        fontSize: 10,
        font: "DM Sans",
        fontWeight: "700",
        stroke: "#060d08",
        strokeWidth: 4
      },
      encoding: {
        theta: { field: "finals", type: "quantitative", stack: true },
        text: { field: "nation" },
        color: {
          field: "nation",
          type: "nominal",
          scale: {
            domain: [
              "Australia",
              "West Indies",
              "India",
              "England",
              "Others",
              "Pakistan",
              "Sri Lanka",
              "New Zealand"
            ],
            range: [
              GOLD,
              "#ff9999",
              "#FFB347",
              "#5dade2",
              "#bbbbbb",
              "#5cff9a",
              "#75c7ff",
              "#e8e0ce"
            ]
          },
          legend: null
        }
      }
    },
    {
      mark: {
        type: "text",
        radius: 156,
        fontSize: 10,
        font: "DM Sans",
        fontWeight: "700"
      },
      encoding: {
        theta: { field: "finals", type: "quantitative", stack: true },
        text: { field: "nation" },
        color: {
          field: "nation",
          type: "nominal",
          scale: {
            domain: [
              "Australia",
              "West Indies",
              "India",
              "England",
              "Others",
              "Pakistan",
              "Sri Lanka",
              "New Zealand"
            ],
            range: [
              GOLD,
              "#ff9999",
              "#FFB347",
              "#5dade2",
              "#bbbbbb",
              "#5cff9a",
              "#75c7ff",
              "#e8e0ce"
            ]
          },
          legend: null
        }
      }
    }
    
  ]
});

// 13. World Cup dot matrix + milestone annotations
const WC_ANNOTS = [
  {
    year: 2004,
    format: "ODI",
    label: "1999–2007: first team to win three titles in a row",
    labelY: "ODI",
    dy: -46,
    dx: 8,
    align: "left"
  },
  {
    year: 2022,
    format: "T20I",
    label: "First T20 WC win",
    labelY: "T20I",
    dy: 36,
    dx: 8,
    align: "left"
  }
];
E("#c-wc", {
  height: 360,
  data: { values: D_WORLDCUPS },
  layer: [
    {
      mark: { type: "point", filled: true, size: 260, opacity: 0.92 },
      encoding: {
        x: {
          field: "year",
          type: "ordinal",
          title: "Year",
          axis: { labelAngle: -38, labelColor: "rgba(232,224,206,0.5)" }
        },
        y: {
          field: "format",
          type: "nominal",
          title: "Format",
          sort: ["ODI", "T20I"]
        },
        color: {
          field: "result",
          type: "nominal",
          scale: {
            domain: [
              "Winner",
              "Runner-up",
              "Semi-final",
              "Quarter-final",
              "Group stage exit"
            ],
            range: [GOLD, GM, GL, "#4a8a5a", "#444"]
          },
          legend: { title: "Result", orient: "right", offset: 8 }
        },
        tooltip: [
          { field: "year", title: "Year" },
          { field: "tournament", title: "Tournament" },
          { field: "result", title: "Result" },
          { field: "captain", title: "Captain" },
          { field: "venue", title: "Venue" }
        ]
      }
    },
    {
      data: { values: [{ year: 1999, year2: 2007, format: "ODI" }] },
      mark: {
        type: "rule",
        strokeDash: [2, 2],
        strokeWidth: 1,
        color: "rgba(240,180,41,0.45)"
      },
      encoding: {
        x: { field: "year", type: "ordinal" },
        x2: { field: "year2" },
        y: { field: "format", type: "nominal", sort: ["ODI", "T20I"] },
        dy: { value: -28 }
      }
    },
    {
      data: { values: WC_ANNOTS },
      mark: {
        type: "text",
        fontSize: 9,
        font: "DM Sans",
        fontStyle: "italic",
        color: GOLD
      },
      encoding: {
        x: { field: "year", type: "ordinal" },
        y: { field: "labelY", type: "nominal", sort: ["ODI", "T20I"] },
        text: { field: "label" },
        dy: { field: "dy" },
        dx: { field: "dx" },
        align: { field: "align", type: "nominal", scale: null, legend: null }
      }
    }
  ]
});

// 14. BBL line — state filter + annotations
const BBL_STATES = {
  "NSW": ["Sydney Sixers", "Sydney Thunder"],
  "WA": ["Perth Scorchers"],
  "VIC": ["Melbourne Stars", "Melbourne Renegades"],
  "QLD": ["Brisbane Heat"],
  "SA": ["Adelaide Strikers"],
  "TAS": ["Hobart Hurricanes"]
};
const BBL_LINE_ANNOTS = [
  {
    season: "2019-20",
    points: 22,
    label: "Sixers peak\n11 wins",
    team: "Sydney Sixers"
  },
  {
    season: "2014-15",
    points: 20,
    label: "Scorchers\npeak",
    team: "Perth Scorchers"
  },
  {
    season: "2015-16",
    points: 18,
    label: "Thunder\nbreakthrough",
    team: "Sydney Thunder"
  },
  {
    season: "2018-19",
    points: 18,
    label: "Renegades\nonly title",
    team: "Melbourne Renegades"
  }
];
let bblStateFilter = "All";
function renderBBLLine(state) {
  bblStateFilter = state;
  document
    .querySelectorAll(".bbl-state-fbtn")
    .forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".bbl-state-fbtn").forEach((b) => {
    if (b.dataset.val === state) b.classList.add("active");
  });
  let teams = state === "All" ? null : BBL_STATES[state];
  const vals = teams ? D_BBL.filter((d) => teams.includes(d.team)) : D_BBL;
  const annotVals = BBL_LINE_ANNOTS.filter(
    (a) => !teams || teams.includes(a.team)
  );
  E("#c-bbl", {
    height: 300,
    data: { values: vals },
    layer: [
      {params:[{name:'bbl_pick',select:{type:'point',fields:['team'],on:'click',clear:'dblclick'},bind:'legend'}],
        mark: {
          type: "line",
          point: { filled: true, size: 36 },
          strokeWidth: 2,
          opacity: 0.85
        },
        encoding: {
          x: {
            field: "season",
            type: "ordinal",
            title: "Season",
            axis: {
              labelAngle: -45,
              labelFontSize: 9,
              labelColor: "rgba(232,224,206,0.4)"
            }
          },
          y: { field: "points", type: "quantitative", title: "Points" },
          color: {
            field: "team",
            type: "nominal",
            scale: {
              domain: [
                "Sydney Sixers",
                "Perth Scorchers",
                "Melbourne Stars",
                "Brisbane Heat",
                "Adelaide Strikers",
                "Melbourne Renegades",
                "Hobart Hurricanes",
                "Sydney Thunder"
              ],
              range: [
                "#ff69b4",
                "#f47920",
                "#00a650",
                "#e4002b",
                "#005aab",
                "#c0392b",
                "#6f2082",
                GOLD
              ]
            },
            legend: { title: "Team", orient: "right", offset: 8, columns: 1 }
          },
          opacity:{
  condition:{param:'bbl_pick',value:1},
  value:0.12
},
strokeWidth:{
  condition:{param:'bbl_pick',value:4},
  value:1.6
},
          tooltip: [
            { field: "team", title: "Team" },
            { field: "season", title: "Season" },
            { field: "won", title: "Won" },
            { field: "lost", title: "Lost" },
            { field: "points", title: "Points" }
          ]
        }
      },
      {
        data: { values: annotVals },
        mark: {
          type: "text",
          align: "left",
          dx: 4,
          dy: -12,
          fontSize: 8.5,
          font: "DM Sans",
          fontStyle: "italic",
          color: "#f0b429",
        },
        encoding: {
          x: { field: "season", type: "ordinal" },
          y: { field: "points", type: "quantitative" },
          text: { field: "label" }
        }
      }
    ]
  });
}
renderBBLLine("All");

let pcFilter = 'All';
// 15. Rising stars — parallel coordinates
(function () {
  const pcWide = [
    { player: "Mitchell Starc", metric: "Batting Avg", value: 12.0 },
    { player: "Mitchell Starc", metric: "Strike Rate", value: 112.8 },
    { player: "Mitchell Starc", metric: "Age", value: 35 },
    { player: "Mitchell Starc", metric: "Tests", value: 95 },
    { player: "Mitchell Starc", metric: "100s", value: 0 },
    { player: "Mitchell Starc", metric: "ICC Rank", value: 14 },
    { player: "Nathan Lyon", metric: "Batting Avg", value: 12.7 },
    { player: "Nathan Lyon", metric: "Strike Rate", value: 52.2 },
    { player: "Nathan Lyon", metric: "Age", value: 37 },
    { player: "Nathan Lyon", metric: "Tests", value: 139 },
    { player: "Nathan Lyon", metric: "100s", value: 0 },
    { player: "Nathan Lyon", metric: "ICC Rank", value: 11 },
    { player: "Marnus Labuschagne", metric: "Batting Avg", value: 51.0 },
    { player: "Marnus Labuschagne", metric: "Strike Rate", value: 52.2 },
    { player: "Marnus Labuschagne", metric: "Age", value: 30 },
    { player: "Marnus Labuschagne", metric: "Tests", value: 55 },
    { player: "Marnus Labuschagne", metric: "100s", value: 11 },
    { player: "Marnus Labuschagne", metric: "ICC Rank", value: 13 },
    { player: "Travis Head", metric: "Batting Avg", value: 43.0 },
    { player: "Travis Head", metric: "Strike Rate", value: 67.0 },
    { player: "Travis Head", metric: "Age", value: 31 },
    { player: "Travis Head", metric: "Tests", value: 52 },
    { player: "Travis Head", metric: "100s", value: 9 },
    { player: "Travis Head", metric: "ICC Rank", value: 7 },
    { player: "Steve Smith", metric: "Batting Avg", value: 59.31 },
    { player: "Steve Smith", metric: "Strike Rate", value: 54.8 },
    { player: "Steve Smith", metric: "Age", value: 36 },
    { player: "Steve Smith", metric: "Tests", value: 110 },
    { player: "Steve Smith", metric: "100s", value: 33 },
    { player: "Steve Smith", metric: "ICC Rank", value: 15 },
    { player: "Cameron Green", metric: "Batting Avg", value: 30.58 },
    { player: "Cameron Green", metric: "Strike Rate", value: 62.3 },
    { player: "Cameron Green", metric: "Age", value: 25 },
    { player: "Cameron Green", metric: "Tests", value: 27 },
    { player: "Cameron Green", metric: "100s", value: 2 },
    { player: "Cameron Green", metric: "ICC Rank", value: 22 },
    { player: "Usman Khawaja", metric: "Batting Avg", value: 49.57 },
    { player: "Usman Khawaja", metric: "Strike Rate", value: 52.4 },
    { player: "Usman Khawaja", metric: "Age", value: 38 },
    { player: "Usman Khawaja", metric: "Tests", value: 68 },
    { player: "Usman Khawaja", metric: "100s", value: 16 },
    { player: "Usman Khawaja", metric: "ICC Rank", value: 10 },
    { player: "Pat Cummins", metric: "Batting Avg", value: 15.2 },
    { player: "Pat Cummins", metric: "Strike Rate", value: 88.4 },
    { player: "Pat Cummins", metric: "Age", value: 32 },
    { player: "Pat Cummins", metric: "Tests", value: 68 },
    { player: "Pat Cummins", metric: "100s", value: 0 },
    { player: "Pat Cummins", metric: "ICC Rank", value: 1 }
  ];
  const ROLES = {
    'Mitchell Starc':'Bowler','Nathan Lyon':'Bowler','Pat Cummins':'Bowler',
    'Marnus Labuschagne':'Batter','Travis Head':'Batter','Steve Smith':'Batter',
    'Usman Khawaja':'Batter','Cameron Green':'Batter'
  };
  const metrics = [
    "Batting Avg",
    "Strike Rate",
    "Age",
    "Tests",
    "100s",
    "ICC Rank"
  ];
  const minMax = {};
  metrics.forEach((m) => {
    const vals = pcWide.filter((d) => d.metric === m).map((d) => d.value);
    minMax[m] = { min: Math.min(...vals), max: Math.max(...vals) };
  });
  const normed = pcWide.map((d) => {
    const mm = minMax[d.metric];
    let norm = (d.value - mm.min) / (mm.max - mm.min || 1);
    if (d.metric === "ICC Rank") norm = 1 - norm;
    return { ...d, norm: Math.round(norm * 1000) / 1000, role: ROLES[d.player] || 'Batter' };
  });
  const topVals = metrics.map((m) => ({
    metric: m,
    label: m === "ICC Rank" ? String(minMax[m].min) : String(minMax[m].max),
    norm: 1
  }));
  const botVals = metrics.map((m) => ({
    metric: m,
    label: m === "ICC Rank" ? String(minMax[m].max) : String(minMax[m].min),
    norm: 0
  }));

  function niceTicks(min, max, n=4) {
    const range = max - min;
    if (range === 0) return Array(n).fill(min);
    const rawStep = range / (n - 1);
    const mag = Math.pow(10, Math.floor(Math.log10(rawStep || 1)));
    const niceStep = [1,2,5,10,20,25,50].map(x=>x*mag).find(s=>s>=rawStep) || mag*10;
    const start = Math.floor(min / niceStep) * niceStep;
    const ticks = [];
    for (let i=0; i<=20 && ticks.length<n; i++) {
      const v = start + i * niceStep;
      if (v >= min && v <= max) ticks.push(v);
    }
    // fallback to evenly spaced integers
    if (ticks.length < n) {
      return Array.from({length:n}, (_,i) => Math.round(min + i*range/(n-1)));
    }
    return ticks;
  }

  const allAxisTicks = metrics.flatMap(m => {
    const mm = minMax[m];
    const ticks = niceTicks(mm.min, mm.max, 4);
    return ticks.map(v => ({
      metric: m,
      label: String(Math.round(v)),
      norm: Math.min(1, Math.max(0,
        m === "ICC Rank"
          ? 1 - (v - mm.min) / (mm.max - mm.min || 1)
          : (v - mm.min) / (mm.max - mm.min || 1)
      ))
    }));
  });

  window.renderPC = function() {
    vegaEmbed(
      "#c-rise",
      {
        $schema: "https://vega.github.io/schema/vega-lite/v5.json",
        width: "container",
        height: 340,
        config: CFG,
        data: { values: normed },
        layer: [
          {
            data: { values: metrics.map(m => ({ metric: m })) },
            mark: { type: "rule", color: "rgba(240,180,41,0.15)", strokeWidth: 1.2 },
            encoding: { x: { field: "metric", type: "nominal", sort: metrics } }
          },
          {
            mark: { type: "line", point: { filled: true, size: 55 }, strokeWidth: 2.2 },
            encoding: {
              x: {
                field: "metric", type: "nominal", title: null, sort: metrics,
                axis: { labelAngle: -55, labelPadding: 6, labelColor: "rgba(232,224,206,0.75)",
                        labelFontSize: 11, domain: false, ticks: false }
              },
              y: {
                field: "norm", type: "quantitative", title: null,
                scale: { domain: [-0.05, 1.1] },
                axis: { labels: false, ticks: false, grid: false, domain: false }
              },
              color: {
                field: "player", type: "nominal",
                scale: {
                  domain: ["Mitchell Starc","Nathan Lyon","Marnus Labuschagne","Travis Head",
                           "Steve Smith","Cameron Green","Usman Khawaja","Pat Cummins"],
                  range: ["#5dade2","#f47920",GOLD,"#ff69b4","#00a650","#2e8b57","#7d3c98","#e74c3c"]
                },
                legend: { title: null, orient: "bottom", columns: 4, labelFontSize: 10,
                          offset: 18, labelColor: "rgba(232,224,206,0.8)", columnPadding: 20 }
              },
              detail: { field: "player", type: "nominal" },
              opacity: {
                condition: {
                  test: pcFilter === 'All' ? 'true' : `datum.role === '${pcFilter}'`,
                  value: 1
                },
                value: pcFilter === 'All' ? 1 : 0.08
              },
              strokeWidth: {
                condition: {
                  test: pcFilter === 'All' ? 'true' : `datum.role === '${pcFilter}'`,
                  value: 3
                },
                value: pcFilter === 'All' ? 2 : 0.5
              },
              tooltip: [
                { field: "player", title: "Player" },
                { field: "metric", title: "Metric" },
                { field: "value", title: "Value" },
                { field: "role", title: "Role" }
              ]
            }
          },
          {
            data: { values: allAxisTicks },
            mark: { type: "text", dy: 12, font: "DM Mono", fontSize: 9,
                    color: "rgba(232,224,206,0.4)" },
            encoding: {
              x: { field: "metric", type: "nominal", sort: metrics },
              y: { field: "norm", type: "quantitative" },
              text: { field: "label" }, tooltip: { value: null }
            }
          },
          {
            data: { values: [{ metric: "ICC Rank", norm: 1.08, txt: "↓ lower = better" }] },
            mark: { type: "text", font: "DM Sans", fontSize: 9.5, fontStyle: "italic",
                    color: "rgba(240,180,41,0.75)", dy: -6 },
            encoding: {
              x: { field: "metric", type: "nominal", sort: metrics },
              y: { field: "norm", type: "quantitative" },
              text: { field: "txt" }
            }
          }
        ]
      },
      { actions: false }
    );
  };
  window.renderPC();
})();
function setPCFilter(val) {
  pcFilter = val;
  document.querySelectorAll('.pc-fbtn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.pc-fbtn').forEach(b => { if(b.dataset.val===val) b.classList.add('active'); });
  window.renderPC();
}

// 16. BBL DOT MAP — 1 dot = 1 win, large map, outside labels + arrows
// ══════════════════════════════════════════════
const TOPOURL =
  "https://cdn.jsdelivr.net/gh/Zedtox/australia-cricket-dynasty@main/STE_2021_AUST_GDA2020.json";
const TOPO_FEATURE = "STE_2021_AUST_GDA2020";
const SEASONS = [
  "2011-12",
  "2012-13",
  "2013-14",
  "2014-15",
  "2015-16",
  "2016-17",
  "2017-18",
  "2018-19",
  "2019-20",
  "2020-21",
  "2021-22",
  "2022-23",
  "2023-24",
  "All"
];
const BBL_ANN = [
  "Sydney Sixers win the inaugural BBL title at the SCG.",
  "Perth Scorchers emerge as the competition's first powerhouse.",
  "Perth Scorchers go back-to-back — the Scorchers dynasty begins.",
  "Perth Scorchers win a third title in four seasons.",
  "Shock result — Sydney Thunder claim their first ever BBL title.",
  "Perth Scorchers cement their status as the BBL's most successful side.",
  "Adelaide Strikers break through for their first title.",
  "Melbourne Renegades win their only title, ending the season bottom the previous year.",
  "Sydney Sixers obliterate the competition — 11 wins from 14 games.",
  "Sydney Sixers back-to-back. Green and Pink dominate the decade.",
  "Perth Scorchers reclaim the throne. Five titles total — tied with the Sixers.",
  "Brisbane Heat claim their breakthrough title in the 2022-23 season.",
  "Sydney Sixers claim a fifth title, matching the Scorchers' all-time record.",
  "Perth Scorchers and Sydney Sixers lead overall with 5 titles each across 13 seasons."
];

let bblCurrentSeason = 13;
let bblPlaying = false;
let bblAllDots = D_BBL_DOTS;
let bblMapView = null;

const BBL_CACHE = {};

for (let i = 0; i <= 13; i++) {
  const dots = getBBLDots(i);
  BBL_CACHE[i] = {
    dots: dots,
    mapData: getBBLMapData(dots)
  };
}

const BBL_LABELS_BY_SEASON = Object.keys(BBL_CACHE).flatMap((i) =>
  BBL_CACHE[i].mapData.labelText.map((d) => ({
    ...d,
    season_idx: Number(i)
  }))
);

const BBL_SEASON_TEXT = SEASONS.map((s, i) => ({
  season_idx: i,
  label: i === 13 ? "All seasons" : s,
  lon: 112.5,
  lat: -13.2
}));

const BBL_SEASON_MAP_ANNOTS = [
  { season_idx: 0,  short_ann: "Sixers win inaugural title" },
  { season_idx: 1,  short_ann: "Scorchers emerge as powerhouse" },
  { season_idx: 2,  short_ann: "Scorchers go back-to-back" },
  { season_idx: 3,  short_ann: "Scorchers win third title" },
  { season_idx: 4,  short_ann: "Thunder claim shock first title" },
  { season_idx: 5,  short_ann: "Scorchers fourth title" },
  { season_idx: 6,  short_ann: "Strikers break through" },
  { season_idx: 7,  short_ann: "Renegades win only title" },
  { season_idx: 8,  short_ann: "Sixers — 11 wins from 14" },
  { season_idx: 9,  short_ann: "Sixers wins back-to-back" },
  { season_idx: 10, short_ann: "Scorchers reclaim throne" },
  { season_idx: 11, short_ann: "Heat claim breakthrough title" },
  { season_idx: 12, short_ann: "Sixers equal Scorchers' 5 titles" },
  { season_idx: 13, short_ann: "Scorchers and Sixers lead with 5 titles" },
];

function getBBLDots(seasonIdx) {
  if (seasonIdx === 13) return bblAllDots;
  return bblAllDots.filter((d) => d.season_idx <= seasonIdx);
}

function seededRandom(seed) {
  let x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

function makeOneWinDots(dots) {
  const stateZones = {
    WA: { lon: [116.2, 127.9], lat: [-31.8, -20.0], cols: 13 },
    SA: { lon: [129.0, 141], lat: [-32.0, -25.6], cols: 11 },
    QLD: { lon: [141.0, 149.2], lat: [-29.6, -18.0], cols: 13 },
    NSW: { lon: [142.0, 151.2], lat: [-35.4, -29.2], cols: 16 },
    VIC: { lon: [142.0, 147.5], lat: [-38.6, -36.2], cols: 15 },
    TAS: { lon: [145.2, 147.7], lat: [-43.2, -40.9], cols: 9 },
    NT: { lon: [131.0, 136.5], lat: [-23.0, -14.0], cols: 8 }
  };

  const grouped = {};
  dots.forEach((d) => {
    const state = d.state || "NSW";
    if (!grouped[state]) grouped[state] = [];
    grouped[state].push(d);
  });

  const output = [];
  Object.entries(grouped).forEach(([state, items]) => {
    const z = stateZones[state];
    if (!z) return;

    const cols = z.cols;
    const rows = Math.ceil(items.length / cols);
    const lonStep = (z.lon[1] - z.lon[0]) / (cols + 1);
    const latStep = (z.lat[1] - z.lat[0]) / (rows + 1);

    items.forEach((d, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const jitterLon = (seededRandom((d.id || 0) + 19) - 0.5) * lonStep * 0.58;
      const jitterLat = (seededRandom((d.id || 0) + 37) - 0.5) * latStep * 0.58;

      let lon = z.lon[0] + (col + 1) * lonStep + jitterLon;
      let lat = z.lat[0] + (row + 1) * latStep + jitterLat;

      if (state === "WA" && lon < 117.8 && lat > -24.0) lon += 1.15;
      if (state === "WA" && lon > 123.8 && lat < -30.0) lon -= 1.0;
      if (state === "QLD" && lon < 142.0 && lat > -18.0) lon += 1.3;
      if (state === "QLD" && lon > 149.0 && lat < -25.0) lon -= 0.8;
      if (state === "NSW" && lon < 145.8 && lat < -34.0) lon += 1.0;
      if (state === "NSW" && lon > 150.8 && lat > -30.2) lon -= 0.6;
      if (state === "VIC" && lon > 146.8 && lat < -38.1) lat += 0.45;
      if (state === "VIC" && lon < 142.4 && lat > -36.7) lon += 0.45;
      if (state === "SA" && lon < 132.8 && lat > -29.0) lon += 0.9;
      if (state === "SA" && lon > 137.6 && lat < -33.2) lon -= 0.7;
      if (state === "TAS" && lon < 145.5 && lat < -42.6) lon += 0.35;
      if (state === "TAS" && lon > 147.4 && lat > -41.3) lon -= 0.35;

      output.push({ ...d, plotLon: lon, plotLat: lat, dotWins: 1 });
    });
  });

  return output;
}

function stateWinSummary(dots) {
  const summary = { WA: 0, SA: 0, QLD: 0, NSW: 0, VIC: 0, TAS: 0, NT: 0 };
  dots.forEach((d) => {
    if (summary[d.state] !== undefined) summary[d.state]++;
  });
  return summary;
}

function getBBLMapData(dots) {
  const displayDots = makeOneWinDots(dots);
  const summary = stateWinSummary(dots);

  const callouts = [
    {
      state: "WA",
      label: "WA",
      wins: summary.WA,
      labelLon: 112.6,
      labelLat: -28.2,
      anchorLon: 117.2,
      anchorLat: -27.3,
      align: "right"
    },
    {
      state: "NT",
      label: "NT",
      wins: 0,
      labelLon: 128.8,
      labelLat: -15.0,
      anchorLon: 133.5,
      anchorLat: -18.8,
      align: "right"
    },
    {
      state: "SA",
      label: "SA",
      wins: summary.SA,
      labelLon: 129.0,
      labelLat: -36.1,
      anchorLon: 134.5,
      anchorLat: -31.4,
      align: "right"
    },
    {
      state: "QLD",
      label: "QLD",
      wins: summary.QLD,
      labelLon: 153.8,
      labelLat: -20.5,
      anchorLon: 146.0,
      anchorLat: -23.0,
      align: "left"
    },
    {
      state: "NSW",
      label: "NSW",
      wins: summary.NSW,
      labelLon: 154.1,
      labelLat: -32.4,
      anchorLon: 149.0,
      anchorLat: -33.4,
      align: "left"
    },
    {
      state: "VIC",
      label: "VIC",
      wins: summary.VIC,
      labelLon: 153.0,
      labelLat: -38.2,
      anchorLon: 145.2,
      anchorLat: -37.6,
      align: "left"
    },
    {
      state: "TAS",
      label: "TAS",
      wins: summary.TAS,
      labelLon: 151.0,
      labelLat: -42.6,
      anchorLon: 146.4,
      anchorLat: -42.2,
      align: "left"
    }
  ];

  const calloutLines = callouts
    .map((d, i) => [
      { group: i, order: 0, lon: d.labelLon, lat: d.labelLat },
      { group: i, order: 1, lon: d.anchorLon, lat: d.anchorLat }
    ])
    .flat();

  const labelText = callouts.map((d) => ({
    ...d,
    labelLine: d.label,
    winsLine: d.state === "NT" ? "No team" : d.wins + " wins",
    labelColor:
      d.state === "WA"
        ? "#f47920"
        : d.state === "QLD"
          ? "#e4002b"
          : d.state === "NSW"
            ? "#ff69b4"
            : d.state === "VIC"
              ? "#00a650"
              : d.state === "SA"
                ? "#005aab"
                : d.state === "TAS"
                  ? "#6f2082"
                  : "rgba(240,180,41,0.95)"
  }));

  return { displayDots, calloutLines, labelText };
}

const bblAllDisplayDots = makeOneWinDots(bblAllDots);

function buildBBLMapSpec() {
  return {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    width: "container",
    height: 600,
    padding: 0,
    autosize: { type: "fit-x", contains: "padding" },
    background: "#060d08",
    config: { view: { stroke: null } },
    projection: {
      type: "mercator",
      center: [134.6, -28.8],
      scale: 760,
      translate: [540, 300]
    },

    params: [{ name: "seasonPick", value: 13 }],

    layer: [
      {
        data: {
          url: "https://cdn.jsdelivr.net/npm/vega-datasets@2/data/world-110m.json",
          format: { type: "topojson", feature: "countries" }
        },
        transform: [{ filter: "datum.id == 36" }],
        mark: {
          type: "geoshape",
          fill: "#082014",
          stroke: "rgba(240,180,41,0.55)",
          strokeWidth: 1
        }
      },
      {
        data: {
          values: [
            { group: "WA-NT-SA", order: 1, lon: 129.0, lat: -15.0 },
            { group: "WA-NT-SA", order: 2, lon: 129.0, lat: -31.77 },

            { group: "NT-QLD", order: 1, lon: 138.0, lat: -16.6 },
            { group: "NT-QLD", order: 2, lon: 138.0, lat: -26.0 },

            { group: "SA-QLD", order: 1, lon: 129.0, lat: -26.0 },
            { group: "SA-QLD", order: 2, lon: 141.0, lat: -26.0 },

            { group: "SA-NSW-VIC", order: 1, lon: 141.0, lat: -26.0 },
            { group: "SA-NSW-VIC", order: 2, lon: 141.0, lat: -38.1 },

            { group: "QLD-NSW", order: 1, lon: 141.0, lat: -29.0 },
            { group: "QLD-NSW", order: 2, lon: 153.6, lat: -29.0 },

            { group: "SA-VIC", order: 1, lon: 141.0, lat: -36.0 },
            { group: "SA-VIC", order: 2, lon: 150.1, lat: -36.0 }
          ]
        },
        mark: {
          type: "line",
          color: "rgba(240,180,41,0.36)",
          strokeWidth: 0.8,
          strokeDash: [5, 4],
          clip: true
        },
        encoding: {
          longitude: { field: "lon", type: "quantitative" },
          latitude: { field: "lat", type: "quantitative" },
          detail: { field: "group" },
          order: { field: "order" }
        }
      },

      {
        data: { values: bblAllDisplayDots },
        mark: {
          type: "circle",
          stroke: "rgba(6,13,8,0.75)",
          strokeWidth: 0.55
        },
        encoding: {
          longitude: { field: "plotLon", type: "quantitative" },
          latitude: { field: "plotLat", type: "quantitative" },
          size: {
            condition: {
              test: "seasonPick == 13 || datum.season_idx <= seasonPick",
              value: 24
            },
            value: 0
          },
          opacity: {
            condition: {
              test: "seasonPick == 13 || datum.season_idx <= seasonPick",
              value: 0.9
            },
            value: 0
          },
          color: {
            field: "team",
            type: "nominal",
            scale: {
              domain: [
                "Sydney Sixers",
                "Perth Scorchers",
                "Melbourne Stars",
                "Brisbane Heat",
                "Adelaide Strikers",
                "Melbourne Renegades",
                "Hobart Hurricanes",
                "Sydney Thunder"
              ],
              range: [
                "#ff69b4",
                "#f47920",
                "#00a650",
                "#e4002b",
                "#005aab",
                "#c0392b",
                "#6f2082",
                "#f0b429"
              ]
            },
            legend: null
          },
          tooltip: [
            { field: "team", title: "Team" },
            { field: "season", title: "Season" },
            { field: "state", title: "State" }
          ]
        }
      },

      {
        data: { values: getBBLMapData(bblAllDots).calloutLines },
        mark: {
          type: "line",
          color: "rgba(240,180,41,0.82)",
          strokeWidth: 1.4
        },
        encoding: {
          longitude: { field: "lon", type: "quantitative" },
          latitude: { field: "lat", type: "quantitative" },
          detail: { field: "group" },
          order: { field: "order" }
        }
      },

      {
        data: { values: BBL_LABELS_BY_SEASON },
        transform: [{ filter: "datum.season_idx == seasonPick" }],
        mark: {
          type: "text",
          font: "DM Mono",
          fontSize: 15,
          fontWeight: "bold",
          dy: -10,
        },
        encoding: {
          longitude: { field: "labelLon", type: "quantitative" },
          latitude: { field: "labelLat", type: "quantitative" },
          text: { field: "labelLine" },
          align: { field: "align", type: "nominal" },
          color: { field: "labelColor", type: "nominal", scale: null }
        }
      },

      {
        data: { values: BBL_LABELS_BY_SEASON },
        transform: [{ filter: "datum.season_idx == seasonPick" }],
        mark: {
          type: "text",
          font: "DM Mono",
          fontSize: 11,
          dy: 12,
          color: "rgba(232,224,206,0.72)"
        },
        encoding: {
          longitude: { field: "labelLon", type: "quantitative" },
          latitude: { field: "labelLat", type: "quantitative" },
          text: { field: "winsLine" },
          align: { field: "align", type: "nominal" }
        }
      },
      {
        data: { values: BBL_SEASON_TEXT },
        transform: [{ filter: "datum.season_idx == seasonPick" }],
        mark: {
          type: "text",
          align: "left",
          baseline: "top",
          font: "DM Mono",
          fontSize: 16,
          fontWeight: "bold",
          color: "rgba(240,180,41,0.95)"
        },
        encoding: {
          longitude: { field: "lon", type: "quantitative" },
          latitude: { field: "lat", type: "quantitative" },
          text: { field: "label" }
        }
      },
      {
        data: { values: BBL_SEASON_MAP_ANNOTS },
        transform: [{ filter: "datum.season_idx == seasonPick" }],
        mark: {
          type: "text",
          align: "center",
          font: "DM Sans",
          fontStyle: "italic",
          fontSize: 12,
          color: "#f0b429",
          stroke: "#060d08",
          strokeWidth: 0,
          dy: 0
        },
        encoding: {
          longitude: { field: "lon", type: "quantitative" },
          latitude: { field: "lat", type: "quantitative" },
          text: { field: "short_ann" }
        },
        transform: [
          { filter: "datum.season_idx == seasonPick" },
          { calculate: "112.5", as: "lon" },
          { calculate: "-16.2", as: "lat" }
        ]
      }
    ]
  };
}

function replaceVegaData(view, name, values) {
  const cs = vega
    .changeset()
    .remove(() => true)
    .insert(values);
  view.change(name, cs);
}

function renderBBLMap() {
  vegaEmbed("#bbl-map-vega", buildBBLMapSpec(), {
    actions: false,
    renderer: "canvas"
  }).then((result) => {
    bblMapView = result.view;
    setBBLSeason(bblCurrentSeason);
  });
}

renderBBLMap();

async function bblAutoPlay() {
  bblPlaying = true;
  document.getElementById("bbl-play-btn").innerHTML = "&#9646;&#9646;";

  for (let i = 0; i <= 13 && bblPlaying; i++) {
    setBBLSeason(i);
    await new Promise((res) => setTimeout(res, i === 13 ? 0 : 800));
    if (!bblPlaying) break;
  }

  bblPlaying = false;
  document.getElementById("bbl-play-btn").innerHTML = "&#9654;";
}

function bblTogglePlay() {
  if (bblPlaying) {
    bblPlaying = false;
    document.getElementById("bbl-play-btn").innerHTML = "&#9654;";
  } else {
    bblAutoPlay();
  }
}

function setBBLSeason(seasonIdx) {
  bblCurrentSeason = Number(seasonIdx);

  document.getElementById("bbl-slider").value = bblCurrentSeason;
  document.getElementById("bbl-season-label").textContent =
    bblCurrentSeason === 13
      ? "All seasons (2011–2024)"
      : SEASONS[bblCurrentSeason];

  document.getElementById("bbl-annotation").textContent =
    BBL_ANN[bblCurrentSeason];

  document.getElementById("bbl-counter").textContent =
    BBL_CACHE[bblCurrentSeason].dots.length +
    (bblCurrentSeason === 13 ? " total wins" : " wins shown");

  if (bblMapView) {
    bblMapView.signal("seasonPick", bblCurrentSeason).runAsync();
  }
}

function bblSliderChange(val) {
  bblPlaying = false;
  document.getElementById("bbl-play-btn").innerHTML = "&#9654;";
  setBBLSeason(parseInt(val));
}
// BBL legend
const TEAM_COLORS = {
  "Sydney Sixers": "#ff69b4",
  "Perth Scorchers": "#f47920",
  "Melbourne Stars": "#00a650",
  "Brisbane Heat": "#e4002b",
  "Adelaide Strikers": "#005aab",
  "Melbourne Renegades": "#c0392b",
  "Hobart Hurricanes": "#6f2082",
  "Sydney Thunder": "#f0b429"
};
const leg = document.getElementById("bbl-legend");
Object.entries(TEAM_COLORS).forEach(([t, c]) => {
  leg.innerHTML += `<div class="bleg"><div class="bleg-dot" style="background:${c}"></div>${t}</div>`;
});

// ── SCROLL ANIMATIONS ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

// ── INIT ──

// ===== Preferred repo structure overrides: load selected charts from readable JSON specs =====
async function embedSpecFile(target, specPath, opts = {}) {
  const spec = await fetch(specPath).then((r) => r.json());
  return vegaEmbed(target, spec, Object.assign({ actions: false }, opts));
}

// Static charts loaded directly from JSON specs.
embedSpecFile("#c-ha", "specs/home_away.json");
embedSpecFile("#c-donut", "specs/donut.json");
embedSpecFile("#c-wc", "specs/world_cups.json");

// Dynamic bowler chart: load the JSON spec, then patch data URLs to filtered values.
async function renderBowl(type, minW) {
  if (type !== undefined) bowlType = type;
  if (minW !== undefined) bowlMinWkts = minW;
  document
    .querySelectorAll(".bowl-fbtn")
    .forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".bowl-fbtn").forEach((b) => {
    if (b.dataset.val === bowlType) b.classList.add("active");
  });
  document
    .querySelectorAll(".bowl-wfbtn")
    .forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".bowl-wfbtn").forEach((b) => {
    if (parseInt(b.dataset.val) === bowlMinWkts) b.classList.add("active");
  });
  const allBowl = await fetch("data/bowling.json").then((r) => r.json());
  const allAnn = await fetch("data/bowling_annotations.json").then((r) =>
    r.json()
  );
  let vals = allBowl.filter((d) => d.wickets >= bowlMinWkts);
  if (bowlType !== "All") vals = vals.filter((d) => d.bowl_type === bowlType);
  const annotVals = allAnn.filter((a) =>
    vals.some((v) => v.player === a.player)
  );
  const spec = await fetch("specs/bowling.json").then((r) => r.json());
  spec.data = { values: vals };
  spec.layer.forEach((layer) => {
    if (layer.data && layer.data.url === "data/bowling_annotations.json")
      layer.data = { values: annotVals };
  });
  return vegaEmbed("#c-bowl", spec, { actions: false });
}
renderBowl("All", 100);

// Ranking chart: load readable JSON spec, filter data by format, and keep brush-domain zoom.
async function renderRanking(fmt) {
  document
    .querySelectorAll(".rank-fbtn")
    .forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".rank-fbtn").forEach((b) => {
    if (b.dataset.val === fmt) b.classList.add("active");
  });

  const yearlyAll = await fetch("data/ranking_yearly.json").then((r) =>
    r.json()
  );
  const monthlyAll = await fetch("data/ranking_monthly.json").then((r) =>
    r.json()
  );
  const annotationsAll = await fetch("data/ranking_annotations.json").then(
    (r) => r.json()
  );

  const yearly =
    fmt === "All" ? yearlyAll : yearlyAll.filter((d) => d.format === fmt);
  const monthly =
    fmt === "All" ? monthlyAll : monthlyAll.filter((d) => d.format === fmt);

  const annotations =
    fmt === "All"
      ? annotationsAll
      : annotationsAll.filter((d) => d.format === fmt || d.format === "All");

  const rankEl = document.getElementById("c-rank");
  rankEl.innerHTML = `<div class="rank-html-legend">
    ${fmt === "All" || fmt === "Test" ? `<span><i style="background:${"#FF0000"}"></i>Test</span>` : ""}
    ${fmt === "All" || fmt === "ODI" ? `<span><i style="background:${GM}"></i>ODI</span>` : ""}
    ${fmt === "All" || fmt === "T20I" ? `<span><i style="background:${ENG}"></i>T20I</span>` : ""}
  </div><div id="c-rank-vega"></div>`;

  const spec = await fetch("specs/ranking.json").then((r) => r.json());

  const patchData = (obj) => {
    if (!obj || typeof obj !== "object") return;

    if (obj.data && obj.data.url === "data/ranking_yearly.json") {
      obj.data = { values: yearly };
    }

    if (obj.data && obj.data.url === "data/ranking_monthly.json") {
      obj.data = { values: monthly };
    }

    if (obj.data && obj.data.url === "data/ranking_annotations.json") {
      obj.data = { values: annotations };
    }

    Object.values(obj).forEach((v) => {
      if (typeof v === "object") patchData(v);
    });
  };

  patchData(spec);

const patchRankingColors = (obj) => {
  if (!obj || typeof obj !== "object") return;

  if (
    obj.color &&
    obj.color.field === "format" &&
    obj.color.scale &&
    Array.isArray(obj.color.scale.range)
  ) {
    obj.color.scale.domain = ["Test", "ODI", "T20I"];
    obj.color.scale.range = ["#FF0000", GM, ENG];
  }

  Object.values(obj).forEach((v) => {
    if (typeof v === "object") patchRankingColors(v);
  });
};

patchRankingColors(spec);

  return vegaEmbed("#c-rank-vega", spec, { actions: false });
}
renderRanking("All");
