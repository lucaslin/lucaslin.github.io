$(function(){
    //From http://www.d3noob.org/2013/01/adding-tooltips-to-d3js-graph.html Accessed April 22, 2013
    var div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    var allList = [
        {
            "Concentration": "African and African American Studies",
            "Category": "Social Sciences",
            "IntroCourse": "AFRAMER 97",
            "Difficulty": 3.29,
            "2000": 19,
            "2001": 15,
            "2002": 14,
            "2003": 8,
            "2004": 11,
            "2005": 9,
            "2006": 11,
            "2007": 15,
            "2008": 21,
            "2009": 19,
            "2010": 11,
            "2011": 13,
            "2012": 30
        }, 
        {
            "Concentration": "Anthropology",
            "Category": "Social Sciences",
            "IntroCourse": "ANTHRO 97z",
            "Difficulty": 3.20,
            "2000": 155,
            "2001": 135,
            "2002": 149,
            "2003": 126,
            "2004": 151,
            "2005": 195,
            "2006": 173,
            "2007": 163,
            "2008": 126,
            "2009": 113,
            "2010": 93,
            "2011": 69,
            "2012": 73
        }, 
        {
            "Concentration": "Applied Mathematics",
            "Category": "Natural Sciences",
            "IntroCourse": "APMATH 21a",
            "Difficulty": 3.43,
            "2000": 130,
            "2001": 127,
            "2002": 125,
            "2003": 104,
            "2004": 101,
            "2005": 103,
            "2006": 114,
            "2007": 121,
            "2008": 101,
            "2009": 159,
            "2010": 177,
            "2011": 196,
            "2012": 221
        }, 
        {
            "Concentration": "Astrophysics",
            "Category": "Natural Sciences",
            "IntroCourse": "ASTRON 16",
            "Difficulty": 3.18,
            "2000": 14,
            "2001": 10,
            "2002": 6,
            "2003": 8,
            "2004": 10,
            "2005": 9,
            "2006": 8,
            "2007": 3,
            "2008": 3,
            "2009": 9,
            "2010": 8,
            "2011": 6,
            "2012": 26
        }, 
        {
            "Concentration": "Biochemical Sciences",
            "Category": "Natural Sciences",
            "IntroCourse": "LIFESCI 1a",
            "Difficulty": 3.45,
            "2000": 262,
            "2001": 254,
            "2002": 241,
            "2003": 234,
            "2004": 225,
            "2005": 245,
            "2006": 209,
            "2007": 0,
            "2008": 0,
            "2009": 0,
            "2010": 0,
            "2011": 0,
            "2012": 1
        }, 
        {
            "Concentration": "Biology",
            "Category": "Natural Sciences",
            "IntroCourse": "LIFESCI 1a",
            "Difficulty": 3.45,
            "2000": 280,
            "2001": 267,
            "2002": 297,
            "2003": 290,
            "2004": 308,
            "2005": 300,
            "2006": 228,
            "2007": 0,
            "2008": 0,
            "2009": 0,
            "2010": 0,
            "2011": 0,
            "2012": 1
        }, 
        {
            "Concentration": "Biomedical Engineering",
            "Category": "Natural Sciences",
            "IntroCourse": "ENG-SCI 53",
            "Difficulty": 3.82,
            "2000": 0,
            "2001": 0,
            "2002": 0,
            "2003": 0,
            "2004": 0,
            "2005": 0,
            "2006": 0,
            "2007": 0,
            "2008": 0,
            "2009": 0,
            "2010": 17,
            "2011": 41,
            "2012": 48
        }, 
        {
            "Concentration": "Chemical and Physical Biology",
            "Category": "Natural Sciences",
            "IntroCourse": "CHEM 17",
            "Difficulty": 4.13,
            "2000": 0,
            "2001": 0,
            "2002": 0,
            "2003": 0,
            "2004": 0,
            "2005": 0,
            "2006": 27,
            "2007": 54,
            "2008": 33,
            "2009": 65,
            "2010": 59,
            "2011": 57,
            "2012": 59
        }, 
        {
            "Concentration": "Chemistry",
            "Category": "Natural Sciences",
            "IntroCourse": "CHEM 17",
            "Difficulty": 4.13,
            "2000": 78,
            "2001": 77,
            "2002": 73,
            "2003": 89,
            "2004": 91,
            "2005": 86,
            "2006": 82,
            "2007": 91,
            "2008": 90,
            "2009": 84,
            "2010": 84,
            "2011": 78,
            "2012": 95
        }, 
        {
            "Concentration": "Chemistry and Physics",
            "Category": "Natural Sciences",
            "IntroCourse": "CHEM 17",
            "Difficulty": 4.13,
            "2000": 37,
            "2001": 44,
            "2002": 38,
            "2003": 39,
            "2004": 45,
            "2005": 45,
            "2006": 45,
            "2007": 34,
            "2008": 36,
            "2009": 27,
            "2010": 31,
            "2011": 37,
            "2012": 45
        }, 
        {
            "Concentration": "Classics",
            "Category": "Humanities",
            "IntroCourse": "CLAS-STDY 97a",
            "Difficulty": 2.87,
            "2000": 41,
            "2001": 38,
            "2002": 37,
            "2003": 34,
            "2004": 48,
            "2005": 41,
            "2006": 37,
            "2007": 30,
            "2008": 34,
            "2009": 41,
            "2010": 42,
            "2011": 36,
            "2012": 43
        }, 
        {
            "Concentration": "Comparative Study of Religion",
            "Category": "Humanities",
            "IntroCourse": "RELIGION 97",
            "Difficulty": 2.99,
            "2000": 43,
            "2001": 47,
            "2002": 54,
            "2003": 41,
            "2004": 34,
            "2005": 22,
            "2006": 18,
            "2007": 26,
            "2008": 34,
            "2009": 30,
            "2010": 29,
            "2011": 23,
            "2012": 24
        }, 
        {
            "Concentration": "Computer Science",
            "Category": "Natural Sciences",
            "IntroCourse": "COMPSCI 50",
            "Difficulty": 3.75,
            "2000": 203,
            "2001": 174,
            "2002": 139,
            "2003": 98,
            "2004": 79,
            "2005": 67,
            "2006": 64,
            "2007": 65,
            "2008": 86,
            "2009": 86,
            "2010": 99,
            "2011": 143,
            "2012": 225
        }, 
        {
            "Concentration": "Earth and Planetary Sciences",
            "Category": "Natural Sciences",
            "IntroCourse": "E-PSCI 21",
            "Difficulty": 2.89,
            "2000": 25,
            "2001": 27,
            "2002": 21,
            "2003": 24,
            "2004": 23,
            "2005": 34,
            "2006": 37,
            "2007": 26,
            "2008": 24,
            "2009": 27,
            "2010": 17,
            "2011": 17,
            "2012": 26
        }, 
        {
            "Concentration": "East Asian Studies",
            "Category": "Humanities",
            "IntroCourse": "EASTD 97ab",
            "Difficulty": 3.36,
            "2000": 43,
            "2001": 39,
            "2002": 48,
            "2003": 32,
            "2004": 26,
            "2005": 21,
            "2006": 25,
            "2007": 32,
            "2008": 40,
            "2009": 32,
            "2010": 31,
            "2011": 41,
            "2012": 61
        }, 
        {
            "Concentration": "Economics",
            "Category": "Social Sciences",
            "IntroCourse": "ECON 10",
            "Difficulty": 3.35,
            "2000": 583,
            "2001": 624,
            "2002": 666,
            "2003": 643,
            "2004": 686,
            "2005": 686,
            "2006": 733,
            "2007": 769,
            "2008": 742,
            "2009": 698,
            "2010": 635,
            "2011": 621,
            "2012": 564
        }, 
        {
            "Concentration": "Electrical Engineering",
            "Category": "Natural Sciences",
            "IntroCourse": "ENG-SCI 50",
            "Difficulty": 3.02,
            "2000": 0,
            "2001": 0,
            "2002": 0,
            "2003": 0,
            "2004": 0,
            "2005": 0,
            "2006": 0,
            "2007": 0,
            "2008": 0,
            "2009": 0,
            "2010": 0,
            "2011": 0,
            "2012": 20
        }, 
        {
            "Concentration": "Engineering Sciences",
            "Category": "Natural Sciences",
            "IntroCourse": "ApMATH 21a",
            "Difficulty": 3.43,
            "2000": 79,
            "2001": 67,
            "2002": 80,
            "2003": 38,
            "2004": 99,
            "2005": 111,
            "2006": 106,
            "2007": 99,
            "2008": 110,
            "2009": 145,
            "2010": 148,
            "2011": 165,
            "2012": 138
        }, 
        {
            "Concentration": "English",
            "Category": "Humanities",
            "IntroCourse": "ENGLISH 40",
            "Difficulty": 3.14,
            "2000": 222,
            "2001": 231,
            "2002": 242,
            "2003": 270,
            "2004": 246,
            "2005": 247,
            "2006": 245,
            "2007": 257,
            "2008": 236,
            "2009": 209,
            "2010": 197,
            "2011": 182,
            "2012": 173
        }, 
        {
            "Concentration": "Environmental Science and Public Policy",
            "Category": "Natural Sciences",
            "IntroCourse": "ESPP 10",
            "Difficulty": 3.24,
            "2000": 87,
            "2001": 82,
            "2002": 77,
            "2003": 56,
            "2004": 46,
            "2005": 52,
            "2006": 67,
            "2007": 53,
            "2008": 52,
            "2009": 45,
            "2010": 48,
            "2011": 40,
            "2012": 42
        }, 
        {
            "Concentration": "Folklore and Mythology",
            "Category": "Humanities",
            "IntroCourse": "FOLKMYTH 97",
            "Difficulty": 3.03,
            "2000": 14,
            "2001": 17,
            "2002": 20,
            "2003": 17,
            "2004": 11,
            "2005": 9,
            "2006": 11,
            "2007": 14,
            "2008": 13,
            "2009": 18,
            "2010": 10,
            "2011": 14,
            "2012": 11
        }, 
        {
            "Concentration": "Germanic Languages and Literatures",
            "Category": "Humanities",
            "IntroCourse": "GERMAN 71",
            "Difficulty": 3.15,
            "2000": 9,
            "2001": 5,
            "2002": 3,
            "2003": 3,
            "2004": 6,
            "2005": 2,
            "2006": 1,
            "2007": 2,
            "2008": 3,
            "2009": 6,
            "2010": 4,
            "2011": 4,
            "2012": 6
        }, 
        {
            "Concentration": "Government",
            "Category": "Social Sciences",
            "IntroCourse": "GOV 20",
            "Difficulty": 3.27,
            "2000": 463,
            "2001": 547,
            "2002": 553,
            "2003": 552,
            "2004": 549,
            "2005": 575,
            "2006": 532,
            "2007": 495,
            "2008": 477,
            "2009": 467,
            "2010": 475,
            "2011": 473,
            "2012": 467
        }, 
        {
            "Concentration": "History",
            "Category": "Social Sciences",
            "IntroCourse": "HIST 97",
            "Difficulty": 4.07,
            "2000": 231,
            "2001": 280,
            "2002": 280,
            "2003": 293,
            "2004": 234,
            "2005": 219,
            "2006": 197,
            "2007": 220,
            "2008": 231,
            "2009": 216,
            "2010": 184,
            "2011": 170,
            "2012": 162
        }, 
        {
            "Concentration": "History and Literature",
            "Category": "Humanities",
            "IntroCourse": "HIST-LIT 97",
            "Difficulty": 3.30,
            "2000": 248,
            "2001": 210,
            "2002": 197,
            "2003": 192,
            "2004": 167,
            "2005": 165,
            "2006": 158,
            "2007": 162,
            "2008": 152,
            "2009": 151,
            "2010": 151,
            "2011": 138,
            "2012": 143
        }, 
        {
            "Concentration": "History and Science",
            "Category": "Social Sciences",
            "IntroCourse": "HISTSCI 97",
            "Difficulty": 2.80,
            "2000": 150,
            "2001": 139,
            "2002": 121,
            "2003": 100,
            "2004": 92,
            "2005": 88,
            "2006": 85,
            "2007": 83,
            "2008": 109,
            "2009": 116,
            "2010": 135,
            "2011": 118,
            "2012": 130
        }, 
        {
            "Concentration": "History of Art and Architecture",
            "Category": "Humanities",
            "IntroCourse": "HAA 10",
            "Difficulty": 2.84,
            "2000": 47,
            "2001": 45,
            "2002": 58,
            "2003": 57,
            "2004": 50,
            "2005": 51,
            "2006": 47,
            "2007": 48,
            "2008": 62,
            "2009": 52,
            "2010": 60,
            "2011": 63,
            "2012": 73
        }, 
        {
            "Concentration": "Human Developmental and Regenerative Biology",
            "Category": "Natural Sciences",
            "IntroCourse": "SCRB 10",
            "Difficulty": 3.45,
            "2000": 0,
            "2001": 0,
            "2002": 0,
            "2003": 0,
            "2004": 0,
            "2005": 0,
            "2006": 0,
            "2007": 0,
            "2008": 0,
            "2009": 50,
            "2010": 95,
            "2011": 141,
            "2012": 142
        }, 
        {
            "Concentration": "Human Evolutionary Biology",
            "Category": "Natural Sciences",
            "IntroCourse": "HEB 97",
            "Difficulty": 3.29,
            "2000": 0,
            "2001": 0,
            "2002": 0,
            "2003": 0,
            "2004": 0,
            "2005": 0,
            "2006": 72,
            "2007": 110,
            "2008": 132,
            "2009": 130,
            "2010": 133,
            "2011": 138,
            "2012": 152
        }, 
        {
            "Concentration": "Linguistics",
            "Category": "Social Sciences",
            "IntroCourse": "LING 101",
            "Difficulty": 2.16,
            "2000": 31,
            "2001": 32,
            "2002": 35,
            "2003": 27,
            "2004": 33,
            "2005": 31,
            "2006": 25,
            "2007": 31,
            "2008": 12,
            "2009": 29,
            "2010": 30,
            "2011": 24,
            "2012": 31
        }, 
        {
            "Concentration": "Literature",
            "Category": "Humanities",
            "IntroCourse": "LIT 97",
            "Difficulty": 3.26,
            "2000": 63,
            "2001": 52,
            "2002": 60,
            "2003": 55,
            "2004": 53,
            "2005": 45,
            "2006": 44,
            "2007": 50,
            "2008": 48,
            "2009": 38,
            "2010": 41,
            "2011": 40,
            "2012": 42
        }, 
        {
            "Concentration": "Mathematics",
            "Category": "Natural Sciences",
            "IntroCourse": "MATH 21a",
            "Difficulty": 3.74,
            "2000": 78,
            "2001": 89,
            "2002": 69,
            "2003": 73,
            "2004": 65,
            "2005": 77,
            "2006": 95,
            "2007": 86,
            "2008": 87,
            "2009": 80,
            "2010": 75,
            "2011": 76,
            "2012": 138
        }, 
        {
            "Concentration": "Mechanical Engineering",
            "Category": "Natural Sciences",
            "IntroCourse": "ENGSCI 96",
            "Difficulty": 3.58,
            "2000": 0,
            "2001": 0,
            "2002": 0,
            "2003": 0,
            "2004": 0,
            "2005": 0,
            "2006": 0,
            "2007": 0,
            "2008": 0,
            "2009": 0,
            "2010": 0,
            "2011": 0,
            "2012": 26
        }, 
        {
            "Concentration": "Molecular and Cellular Biology",
            "Category": "Natural Sciences",
            "IntroCourse": "MCB 52",
            "Difficulty": 3.68,
            "2000": 0,
            "2001": 0,
            "2002": 0,
            "2003": 0,
            "2004": 0,
            "2005": 0,
            "2006": 55,
            "2007": 117,
            "2008": 162,
            "2009": 184,
            "2010": 151,
            "2011": 114,
            "2012": 84
        }, 
        {
            "Concentration": "Music",
            "Category": "Humanities",
            "IntroCourse": "MUSIC 97a",
            "Difficulty": 3.66,
            "2000": 22,
            "2001": 27,
            "2002": 24,
            "2003": 31,
            "2004": 24,
            "2005": 17,
            "2006": 25,
            "2007": 28,
            "2008": 30,
            "2009": 26,
            "2010": 21,
            "2011": 18,
            "2012": 19
        }, 
        {
            "Concentration": "Near Eastern Languages and Civilizations",
            "Category": "Humanities",
            "IntroCourse": "NEC 97r",
            "Difficulty": 2.83,
            "2000": 11,
            "2001": 11,
            "2002": 7,
            "2003": 6,
            "2004": 6,
            "2005": 10,
            "2006": 13,
            "2007": 12,
            "2008": 13,
            "2009": 10,
            "2010": 14,
            "2011": 17,
            "2012": 21
        }, 
        {
            "Concentration": "Neurobiology",
            "Category": "Natural Sciences",
            "IntroCourse": "LIFESCI 1a",
            "Difficulty": 3.45,
            "2000": 0,
            "2001": 0,
            "2002": 0,
            "2003": 0,
            "2004": 0,
            "2005": 0,
            "2006": 52,
            "2007": 111,
            "2008": 157,
            "2009": 207,
            "2010": 227,
            "2011": 253,
            "2012": 229
        }, 
        {
            "Concentration": "Organismic and Evolutionary Biology",
            "Category": "Natural Sciences",
            "IntroCourse": "OEB 10",
            "Difficulty": 2.83,
            "2000": 0,
            "2001": 0,
            "2002": 0,
            "2003": 0,
            "2004": 0,
            "2005": 0,
            "2006": 23,
            "2007": 51,
            "2008": 34,
            "2009": 84,
            "2010": 107,
            "2011": 120,
            "2012": 120
        }, 
        {
            "Concentration": "Philosophy",
            "Category": "Humanities",
            "IntroCourse": "PHIL 3",
            "Difficulty": 2.91,
            "2000": 66,
            "2001": 67,
            "2002": 59,
            "2003": 64,
            "2004": 62,
            "2005": 56,
            "2006": 47,
            "2007": 43,
            "2008": 48,
            "2009": 61,
            "2010": 53,
            "2011": 58,
            "2012": 60
        }, 
        {
            "Concentration": "Physics",
            "Category": "Natural Sciences",
            "IntroCourse": "PHYSICS 11a",
            "Difficulty": 3.57,
            "2000": 93,
            "2001": 87,
            "2002": 90,
            "2003": 88,
            "2004": 78,
            "2005": 74,
            "2006": 75,
            "2007": 70,
            "2008": 79,
            "2009": 64,
            "2010": 57,
            "2011": 38,
            "2012": 101
        }, 
        {
            "Concentration": "Psychology",
            "Category": "Social Sciences",
            "IntroCourse": "SLS 20",
            "Difficulty": 3.22,
            "2000": 328,
            "2001": 328,
            "2002": 318,
            "2003": 388,
            "2004": 352,
            "2005": 347,
            "2006": 336,
            "2007": 292,
            "2008": 288,
            "2009": 284,
            "2010": 294,
            "2011": 282,
            "2012": 272
        }, 
        {
            "Concentration": "Romance Languages and Literatures",
            "Category": "Humanities",
            "IntroCourse": "FRENCH 97",
            "Difficulty": 3.23,
            "2000": 41,
            "2001": 37,
            "2002": 44,
            "2003": 46,
            "2004": 50,
            "2005": 54,
            "2006": 42,
            "2007": 36,
            "2008": 43,
            "2009": 46,
            "2010": 48,
            "2011": 51,
            "2012": 45
        }, 
        {
            "Concentration": "Slavic Languages and Literatures",
            "Category": "Humanities",
            "IntroCourse": "SLAVIC 97",
            "Difficulty": 3.05,
            "2000": 9,
            "2001": 8,
            "2002": 10,
            "2003": 9,
            "2004": 11,
            "2005": 8,
            "2006": 11,
            "2007": 7,
            "2008": 9,
            "2009": 11,
            "2010": 13,
            "2011": 8,
            "2012": 8
        }, 
        {
            "Concentration": "Social Studies",
            "Category": "Social Sciences",
            "IntroCourse": "SOC-STD 10a",
            "Difficulty": 3.91,
            "2000": 290,
            "2001": 282,
            "2002": 293,
            "2003": 298,
            "2004": 307,
            "2005": 305,
            "2006": 326,
            "2007": 312,
            "2008": 296,
            "2009": 311,
            "2010": 297,
            "2011": 322,
            "2012": 305
        }, 
        {
            "Concentration": "Sociology",
            "Category": "Social Sciences",
            "IntroCourse": "SOCIOL 10",
            "Difficulty": 2.46,
            "2000": 82,
            "2001": 83,
            "2002": 80,
            "2003": 75,
            "2004": 78,
            "2005": 73,
            "2006": 79,
            "2007": 94,
            "2008": 144,
            "2009": 155,
            "2010": 186,
            "2011": 164,
            "2012": 150
        }, 
        {
            "Concentration": "South Asian Studies",
            "Category": "Humanities",
            "IntroCourse": "SAS 98r",
            "Difficulty": 3.00,
            "2000": 4,
            "2001": 7,
            "2002": 6,
            "2003": 7,
            "2004": 5,
            "2005": 3,
            "2006": 1,
            "2007": 1,
            "2008": 2,
            "2009": 1,
            "2010": 1,
            "2011": 5,
            "2012": 7
        }, 
        {
            "Concentration": "Statistics",
            "Category": "Natural Sciences",
            "IntroCourse": "STAT 110",
            "Difficulty": 3.91,
            "2000": 4,
            "2001": 3,
            "2002": 9,
            "2003": 8,
            "2004": 8,
            "2005": 4,
            "2006": 7,
            "2007": 11,
            "2008": 17,
            "2009": 28,
            "2010": 48,
            "2011": 60,
            "2012": 95
        }, 
        {
            "Concentration": "Studies of Women, Gender, and Sexuality",
            "Category": "Social Sciences",
            "IntroCourse": "WGS 97",
            "Difficulty": 2.97,
            "2000": 18,
            "2001": 10,
            "2002": 12,
            "2003": 9,
            "2004": 10,
            "2005": 13,
            "2006": 14,
            "2007": 12,
            "2008": 10,
            "2009": 13,
            "2010": 17,
            "2011": 16,
            "2012": 40
        }, 
        {
            "Concentration": "Visual and Environmental Studies",
            "Category": "Humanities",
            "IntroCourse": "VES 10a",
            "Difficulty": 3.23,
            "2000": 58,
            "2001": 59,
            "2002": 67,
            "2003": 82,
            "2004": 90,
            "2005": 90,
            "2006": 84,
            "2007": 84,
            "2008": 80,
            "2009": 83,
            "2010": 69,
            "2011": 65,
            "2012": 59
        }
    ];

    var total = {
        "Concentration": "Total",
        "Category": "",
        "IntroCourse": "",
        "Difficulty": 3.30816326530612,
        "2000": 4661,
        "2001": 4683,
        "2002": 4722,
        "2003": 4614,
        "2004": 4570,
        "2005": 4589,
        "2006": 4686,
        "2007": 4420,
        "2008": 4506,
        "2009": 4710,
        "2010": 4722,
        "2011": 4755,
        "2012": 5053
    };

    var margin = {
            top: 100,
            right: 100,
            bottom: 100,
            left: 100
        },
        w = 768 - margin.left - margin.right,
        h = 900 - margin.top - margin.bottom;

    allList.sort(function(a, b) {
        return b[year] - a[year];
    });
    var cList = allList;
    var c = [];
    var data = [];
    for (var i = 0; i < allList.length; i++) {
        if (cList[i][year] != '0') {
            data.push(allList[i][year]);
            c.push(allList[i].Concentration);
        }
    }

    //From Hidenari Nozaki at http://hdnrnzk.me/2012/07/04/creating-a-bar-graph-using-d3js/, Accessed April 20, 2013 11:56PM
    //Tooltip from http://www.d3noob.org/2013/01/adding-tooltips-to-d3js-graph.html, Accessed April 21, 2013 1:48PM

    var x, y;
    var gap = 2;
    x = d3.scale.linear()
        .domain([0, 769])
        .range([3, w]);

    y = d3.scale.ordinal()
        .domain(d3.range(data.length))
        .rangeBands([0, 750]);

    var left_width = 300;

    chart = d3.select("#mainvis")
        .append('svg')
        .attr('class', 'chart')
        .attr('width', left_width + w + 40)
        .attr('height', 750 + 30)
        .append("g")
        .attr("transform", "translate(10, 20)");

    chart.selectAll("rect")
        .data(allList)
        .enter().append("rect")
        .attr("x", left_width + 2)
        .attr("y", function(d, i) {
            return y(i) + gap;
        })
        .attr("width", function(d) {
            return x(d[year]);
        })
        .attr("height", y.rangeBand())
        .attr("id", function(d) {
            return d.Concentration;
        })
        .attr("class", function(d) {
            return d.Category;
        })
        .on("mouseover", function(d) {
            div.transition()
                .duration(200)
                .style("opacity", .9);
            div.html("<embed src='./img/" + d.Concentration + ".svg'" + " type='image/svg+xml' />" + "<p style='margin-left: 15px;'></p>")
                .style("left", (d3.event.pageX + 20) + "px")
                .style("top", (d3.event.pageY + 20) + "px");
        })
        .on("mouseout", function(d) {
            div.transition()
                .duration(500)
                .style("opacity", 0);
        });

    chart.selectAll("text.student")
        .data(allList)
        .enter().append("text")
        .style("opacity", 0.6)
        .attr("x", function(d) {
            return x(d[year]) + left_width;
        })
        .attr("y", function(d, i) {
            return y(i) + y.rangeBand() / 2;
        })
        .attr("dx", +18)
        .attr("dy", ".36em")
        .attr("text-anchor", "end")
        .attr('class', 'student')
        .text(function(d) {
            return d[year];
        });

    chart.selectAll("text.name")
        .data(allList)
        .enter().append("text")
        .attr("x", left_width / 2 + 130)
        .attr("y", function(d, i) {
            return y(i) + y.rangeBand() / 2;
        })
        .attr("dy", ".36em")
        .attr("text-anchor", "end")
        .attr('class', function(d) {
            return d.Concentration + " name";
        })
        .text(function(d) {
            return d.Concentration;
        });

    chart.selectAll("line")
        .data(x.ticks(10))
        .enter().append("line")
        .attr("x1", function(d) {
            return x(d) + left_width;
        })
        .attr("x2", function(d) {
            return x(d) + left_width;
        })
        .attr("y1", 0)
        .attr("y2", (20 + gap * 2) * c.length);

    chart.selectAll(".rule")
        .data(x.ticks(10))
        .enter().append("text")
        .attr("class", "rule")
        .attr("x", function(d) {
            return x(d) + left_width;
        })
        .attr("y", 0)
        .attr("dy", -6)
        .attr("text-anchor", "middle")
        .attr("font-size", 10)
        .text(String);

    //From http://mbostock.github.io/d3/tutorial/bar-2.html Accessed April 22,2013, 2:38PM
    function update() {

        cList.sort(function(a, b) {
            return b[year] - a[year];
        });
        var c = [];
        var data = [];
        for (var i = 0; i < cList.length; i++) {
            if (cList[i][year] != '0') {
                data.push(cList[i][year]);
                c.push(cList[i].Concentration);
            }
        }

        chart.selectAll("rect")
            .data(cList, function(d) {
                return d.Concentration;
            })
            .transition()
            .duration(1000)
            .attr("y", function(d, i) {
                return y(i) + gap;
            })
            .attr("width", function(d) {
                return x(d[year]);
            })

        chart.selectAll("text.name")
            .data(cList, function(d) {
                return d.Concentration;
            })
            .transition()
            .duration(1000)
            .attr("y", function(d, i) {
                return y(i) + y.rangeBand() / 2;
            })
            .text(function(d) {
                return d.Concentration;
            });

        chart.selectAll("text.student")
            .data(cList, function(d) {
                return d.Concentration;
            })
            .transition()
            .duration(1000)
            .attr("x", function(d) {
                return x(d[year]) + left_width;
            })
            .attr("y", function(d, i) {
                return y(i) + y.rangeBand() / 2;
            })
            .text(function(d) {
                return d[year];
            });

    }
    year = 2000;
    update();

    function getList(category) {
        var list = [];
        //Append Concentrations by Category to List
        for (var i = 0; i < cList.length; i++) {
            if (cList[i].Category == category) {
                list.push(cList[i])
            }
        }
        return list;
    }

    var socialList = getList("Social Sciences");
    var naturalList = getList("Natural Sciences");
    var humanList = getList("Humanities");


    var bioList = [

        {
            "Concentration": "Biochemical Sciences",
            "Category": "Natural Sciences",
            "IntroCourse": "LIFESCI 1a",
            "Difficulty": 3.45,
            "2000": 262,
            "2001": 254,
            "2002": 241,
            "2003": 234,
            "2004": 225,
            "2005": 245,
            "2006": 209,
            "2007": 0,
            "2008": 0,
            "2009": 0,
            "2010": 0,
            "2011": 0,
            "2012": 1
        },

        {
            "Concentration": "Biology",
            "Category": "Natural Sciences",
            "IntroCourse": "LIFESCI 1a",
            "Difficulty": 3.45,
            "2000": 280,
            "2001": 267,
            "2002": 297,
            "2003": 290,
            "2004": 308,
            "2005": 300,
            "2006": 228,
            "2007": 0,
            "2008": 0,
            "2009": 0,
            "2010": 0,
            "2011": 0,
            "2012": 1
        },

        {
            "Concentration": "Human Developmental and Regenerative Biology",
            "Category": "Natural Sciences",
            "IntroCourse": "SCRB 10",
            "Difficulty": 3.45,
            "2000": 0,
            "2001": 0,
            "2002": 0,
            "2003": 0,
            "2004": 0,
            "2005": 0,
            "2006": 0,
            "2007": 0,
            "2008": 0,
            "2009": 50,
            "2010": 95,
            "2011": 141,
            "2012": 142
        },

        {
            "Concentration": "Human Evolutionary Biology",
            "Category": "Natural Sciences",
            "IntroCourse": "HEB 97",
            "Difficulty": 3.29,
            "2000": 0,
            "2001": 0,
            "2002": 0,
            "2003": 0,
            "2004": 0,
            "2005": 0,
            "2006": 72,
            "2007": 110,
            "2008": 132,
            "2009": 130,
            "2010": 133,
            "2011": 138,
            "2012": 152
        },

        {
            "Concentration": "Molecular and Cellular Biology",
            "Category": "Natural Sciences",
            "IntroCourse": "MCB 52",
            "Difficulty": 3.68,
            "2000": 0,
            "2001": 0,
            "2002": 0,
            "2003": 0,
            "2004": 0,
            "2005": 0,
            "2006": 55,
            "2007": 117,
            "2008": 162,
            "2009": 184,
            "2010": 151,
            "2011": 114,
            "2012": 84
        },

        {
            "Concentration": "Neurobiology",
            "Category": "Natural Sciences",
            "IntroCourse": "LIFESCI 1a",
            "Difficulty": 3.45,
            "2000": 0,
            "2001": 0,
            "2002": 0,
            "2003": 0,
            "2004": 0,
            "2005": 0,
            "2006": 52,
            "2007": 111,
            "2008": 157,
            "2009": 207,
            "2010": 227,
            "2011": 253,
            "2012": 229
        },

        {
            "Concentration": "Organismic and Evolutionary Biology",
            "Category": "Natural Sciences",
            "IntroCourse": "OEB 10",
            "Difficulty": 2.83,
            "2000": 0,
            "2001": 0,
            "2002": 0,
            "2003": 0,
            "2004": 0,
            "2005": 0,
            "2006": 23,
            "2007": 51,
            "2008": 34,
            "2009": 84,
            "2010": 107,
            "2011": 120,
            "2012": 120
        }
    ];



    function draw(list) {
        d3.select('#ecText').html('');
        on_ecStory = false;
        on_bioStory = false;

        list.sort(function(a, b) {
            return b[year] - a[year];
        });
        cList = list;
        var x, y;
        var gap = 2;
        x = d3.scale.linear()
            .domain([0, 769])
            .range([3, w]);

        y = d3.scale.ordinal()
            .domain(d3.range(data.length))
            .rangeBands([0, 750]);

        var left_width = 300;
        var mainvis = d3.select("#mainvis")
        mainvis.selectAll("svg").remove();
        chart = d3.select("#mainvis")
            .append('svg')
            .attr('class', 'chart')
            .attr('width', left_width + w + 40)
            .attr('height', 750 + 30)
            .append("g")
            .attr("transform", "translate(10, 20)");

        chart.selectAll("rect")
            .data(list)
            .enter().append("rect")
            .style("opacity", 0)
            .attr("x", left_width + 2)
            .attr("y", function(d, i) {
                return y(i) + gap;
            })
            .attr("width", function(d) {
                return x(d[year]);
            })
            .attr("height", y.rangeBand())
            .attr("id", function(d) {
                return d.Concentration;
            })
            .attr("class", function(d) {
                return d.Category;
            })
            .on("mouseover", function(d) {
                div.transition()
                    .duration(200)
                    .style("opacity", .9);
                div.html("<embed src='./img/" + d.Concentration + ".svg'" + " type='image/svg+xml' />" + "<p style='margin-left: 15px;'></p>")
                    .style("left", (d3.event.pageX + 20) + "px")
                    .style("top", (d3.event.pageY + 20) + "px");
            })
            .on("mouseout", function(d) {
                div.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        chart.selectAll("rect")
            .transition()
            .style("opacity", 1)
            .duration(800)
            .delay(100);

        chart.selectAll("text.name")
            .data(list)
            .enter().append("text")
            .style("opacity", 0)
            .attr("x", left_width / 2 + 130)
            .attr("y", function(d, i) {
                return y(i) + y.rangeBand() / 2;
            })
            .attr("dy", ".36em")
            .attr("text-anchor", "end")
            .attr('class', function(d) {
                return d.Concentration + " name";
            })
            .text(function(d) {
                return d.Concentration;
            });
        chart.selectAll("text.name")
            .transition()
            .style("opacity", 1)
            .duration(800)
            .delay(100);

        chart.selectAll("text.student")
            .data(list)
            .enter().append("text")
            .style("opacity", 0)
            .attr("x", function(d) {
                return x(d[year]) + left_width;
            })
            .attr("y", function(d, i) {
                return y(i) + y.rangeBand() / 2;
            })
            .attr("dx", +18)
            .attr("dy", ".36em")
            .attr("text-anchor", "end")
            .attr('class', 'student')
            .text(function(d) {
                return d[year];
            });

        d3.selectAll("text.student")
            .transition()
            .style("opacity", 0.6)
            .duration(800)
            .delay(400);


        chart.selectAll("line")
            .data(x.ticks(10))
            .enter().append("line")
            .attr("x1", function(d) {
                return x(d) + left_width;
            })
            .attr("x2", function(d) {
                return x(d) + left_width;
            })
            .attr("y1", 0)
            .attr("y2", (15 + gap) * list.length);

        chart.selectAll(".rule")
            .data(x.ticks(10))
            .enter().append("text")
            .attr("class", "rule")
            .attr("x", function(d) {
                return x(d) + left_width;
            })
            .attr("y", 0)
            .attr("dy", -6)
            .attr("text-anchor", "middle")
            .attr("font-size", 10)
            .text(String);
    }
});
