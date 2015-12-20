$(function() {

    function ecStory() {
        resetYear();
        draw(socialList);
        currentStory = 'economics';
        refreshStoryArea();
        currentTimeout = setTimeout(play, 800);
    }

    function bioStory() {
        resetYear();
        draw(bioList);
        currentStory = 'biology';
        refreshStoryArea();
        currentTimeout = setTimeout(play, 800);
    }

    var stories = {
        economics: {
            2000: {
                text: '2000-2007: Number of Economics concentrators steadily increases until 2007'
            },
            2008: {
                text: '2008: The Financial Crisis',
                delay: 2000
            },
            2009: {
                text: '2009-2012: Number of Economics concentrators steeply decreases until 2012'
            }
        },
        biology: {
            2000: {
                text: '2000-2005: Biology and Biochemical Sciences were the only major biological concentrations at Harvard.'
            },
            2006: {
                text: '2006: Molecular and Cellular Biology (MCB), Organismic and Evolutionary Biology (OEB), Human Evolutionary Biology (HEB), and Neurobiology are introduced as new concentrations',
                delay: 3000
            },
            2007: {
                text: '2007: Biology and Biochemical Sciences are eliminated',
                delay: 2000
            },
            2009: {
                text: '2009: Human Developmental and Regenerative Biology is introduced as a new concentration',
                delay: 2000
            },
            2010: {
                text: '2010: Total concentrators in biological concentrations surpasses pre-2006 levels',
                delay: 2000
            }
        }
    };


    function play() {
        clearTimeout(currentTimeout);
        console.log(year)
        if (year < 2012) {
            year++;
            $("#slider").slider("option", "value", year);
            var delay = stories[currentStory] && stories[currentStory][year] && stories[currentStory][year].delay || 800;
            currentTimeout = setTimeout(play, delay);
        }
    }

    function refreshStoryArea() {
        if (currentStory) {
            var currentlyDisplayed = stories[currentStory][year];
            if (currentlyDisplayed) {
                $("#story-text").html(stories[currentStory][year].text)
            }
        } else {
            $("#story-text").html('');
        }
    }

    function addVideo() {
        $('#video-container').html('');
        d3.select("#video-container")
            .append('iframe')
            .attr("id", "video")
            .attr("width", "560")
            .attr("height", "315")
            .attr("src", "https://www.youtube.com/embed/fKm3PJtZqBU?rel=0")
            .attr("frameborder", "0")
            .attr("allowfullscreen", "true")
            .style("border", "0px")
            .style("padding", "10px");
    }

    $('#video-modal').on('hidden', function() {
        addVideo();
    });


    var currentStory;
    // Only ever have one interval at a time
    var currentTimeout;

    $("#slider").slider({
        value: 2000,
        min: 2000,
        max: 2012,
        step: 1,
        slide: function(event, ui) {
            year = ui.value;
            $("#year").html(year);
            update();
        },
        change: function(event, ui) {
            $("#year").html(year);
            refreshStoryArea();
            update();
        }
    });
    $("#year").html($("#slider").slider("value"));


    function resetYear() {
        clearTimeout(currentTimeout);
        year = "2000";
        $("#year").html(year);
        $("#slider").slider("option", "value", year);
        update();
    }

    //From http://www.d3noob.org/2013/01/adding-tooltips-to-d3js-graph.html Accessed April 22, 2013
    var div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);


    // from all-concentrations-list.js
    var allList = allConcentrationsList;

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
    var data = cList.filter(function(concentration) {
        return concentration[year] !== 0;
    });



    var x, y;
    var gap = 2;
    x = d3.scale.linear()
        .domain([0, 769])
        .range([3, w]);

    y = d3.scale.ordinal()
        .domain(d3.range(data.length))
        .rangeBands([0, 750]);

    var left_width = 300;


    //From http://mbostock.github.io/d3/tutorial/bar-2.html Accessed April 22,2013, 2:38PM
    function update() {

        cList.sort(function(a, b) {
            return b[year] - a[year];
        });
        var data = cList.filter(function(concentration) {
            return concentration[year] !== 0;
        });

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


    function getList(category) {
        return cList.filter(function(concentration) {
            return concentration.Category === category;
        });
    }

    var socialList = getList("Social Sciences");
    var naturalList = getList("Natural Sciences");
    var humanList = getList("Humanities");
    var bioList = allList.filter(function(concentration) {
        switch (concentration.Concentration) {
            case 'Biochemical Sciences':
            case 'Biology':
            case 'Human Developmental and Regenerative Biology':
            case 'Human Evolutionary Biology':
            case 'Molecular and Cellular Biology':
            case 'Neurobiology':
            case 'Organismic and Evolutionary Biology':
                return true;
            default:
                return false;
        }
    });



    function draw(list) {
        //From Hidenari Nozaki at http://hdnrnzk.me/2012/07/04/creating-a-bar-graph-using-d3js/, Accessed April 20, 2013 11:56PM
        //Tooltip from http://www.d3noob.org/2013/01/adding-tooltips-to-d3js-graph.html, Accessed April 21, 2013 1:48PM
        list.sort(function(a, b) {
            return b[year] - a[year];
        });
        cList = list;

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
                    .style("left", (280) + "px")
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

    draw(allList)
    addVideo();


    $('#all-button').on('click', function() {
        clearTimeout(currentTimeout);
        draw(allList);
        currentStory = null;
        refreshStoryArea();
    });
    $('#human-button').on('click', function() {
        clearTimeout(currentTimeout);
        draw(humanList);
        currentStory = null;
        refreshStoryArea();
    });
    $('#natural-button').on('click', function() {
        clearTimeout(currentTimeout);
        draw(naturalList);
        currentStory = null;
        refreshStoryArea();
    });
    $('#social-button').on('click', function() {
        clearTimeout(currentTimeout);
        draw(socialList);
        currentStory = null;
        refreshStoryArea();
    });

    $('#ec-book').on('click', ecStory);
    $('#bio-book').on('click', bioStory);

    $('#video-modal-button').on('click', addVideo);

    $('#forwardBack').on('click', play);

});
