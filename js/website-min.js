var $ = jQuery.noConflict();
$(document).ready(function(e) {
    SiteManager.init();
});
var SiteManager = {
    VIDEO_RATIO: 16 / 9,
    KEYPOINTS: ["space", "intelligence", "cyber", "defense", "homeland", "civilian", "health"],
    myVideoPlayer: $(".per-video__video"),
    bIsPortrait: null,
    init: function() {
        var e,
        t = 0.01 * window.innerHeight,
        a = 0.01 * window.innerWidth;
        (this.bIsPortrait = a < t),
        (e = this.bIsPortrait ? "per-mobile" : "per-desktop"),
        $(window).resize(this.handleStageResize.bind(this)),
        this.handleStageResize(),
        KeyPointsSectionManager.init(),
        $(".per-logo").on("click", this.onLogoClicked.bind(this)),
        $(".per-section__inside-content-container").show(),
        gsap.registerPlugin(ScrollTrigger);
        var n = gsap.timeline({
            scrollTrigger: {
                trigger: ".per-videointro",
                pin: ".per-videointro",
                start: "top top",
                end: "+=100%",
                scrub: 1,
                markers: true,
                onUpdate: function(e) {}
            }
        });
        n.add(TweenMax.to(".per-headline", {
            scale: 10,
            duration: 6,
            ease: Sine.easeIn
        })),
        n.add(TweenMax.to(".per-headline", {
            autoAlpha: 0,
            duration: 1
        }), 5),
        n.add(TweenMax.to(".per-video__holder-white", {
            autoAlpha: 0,
            duration: 5
        }), 1);
        var o = new SplitText(".per-scroll-message", {
            type: "chars"
        });
        n.add(TweenMax.staggerTo(o.chars.reverse(), 0.02, {
            autoAlpha: 0
        }, 0.1), 2),
        ((o = new SplitText(".per-videointro h2." + e, {
            type: "chars"
        })).chars = shuffle(o.chars)),
        n.add(TweenMax.staggerFrom(o.chars, 0.02, {
            autoAlpha: 0
        }, 0.1), 6),
        n.add(TweenMax.from(".per-videointro p", {
            autoAlpha: 0,
            y: "2vw",
            duration: 3
        })),
        n.add(TweenMax.to(".per-videointro .per-anim-thing", {
            left: "10%",
            duration: 2
        }));
        var r = gsap.timeline({
            scrollTrigger: {
                trigger: ".per-section--is",
                pin: ".per-section--is",
                start: "top top",
                end: "+=150%",
                scrub: 0,
                        // markers: true,
                        onUpdate: function(e) {}
                    }
                }),
        i = 4.17,
        s = Circ.easeInOut,
        p = 0;
        r.add(TweenMax.to(".per-section--is .per-anim-thing", {
            left: "10%",
            duration: 3
        }), p), (p += 3), this.bIsPortrait && (i = 9.5);
        for (var d = 1; d < 4; d++)
            this.bIsPortrait ?
        (r.add(TweenMax.to(".per-is__big-words--top", {
            top: "-" + d * i + "vw",
            ease: s,
            duration: 1
        }), p), r.add(TweenMax.to(".per-is__big-words-topcrop", {
            top: d * i + "vw",
            ease: s,
            duration: 1
        }), p)) :
        r.add(TweenMax.to(".per-is__big-words", {
            top: "-" + d * i + "vw",
            ease: s,
            duration: 1
        }), p),
        r.add(TweenMax.to(".per-is__body-text-single:nth-of-type(" + d + ")", {
            autoAlpha: 0,
            ease: s,
            duration: 0.4
        }), p),
        r.add(TweenMax.from(".per-is__body-text-single:nth-of-type(" + (d + 1) + ")", {
            autoAlpha: 0,
            ease: s,
            duration: 0.4
        }), p + 0.6),
        (p += 1),
        r.add(TweenMax.to(".per-section--is .per-anim-thing", {
            left: 2 * d + "%",
            duration: 3
        }), p),
        (p += 3);
        var l = 900;
        this.bIsPortrait && (l = 1200);
        var h = gsap.timeline({
            scrollTrigger: {
                trigger: ".per-section--moc",
                pin: ".per-section--moc",
                start: "top top",
                end: "+=" + l + "%",
                scrub: 1,
                onUpdate: function(e) {
                    KeyPointsSectionManager.handleKeypointsScroll(e);
                },
            },
        }),
        c = 0,
        g = new SplitText(".per-moc h3", {
            type: "chars"
        });
        h.add(TweenMax.staggerFrom(g.chars, 0.02, {
            autoAlpha: 0
        }, 0.1), c),
        (c += 2.5),
        ((o = new SplitText(".per-moc h2", {
            type: "chars"
        })).chars = shuffle(o.chars)),
        h.add(TweenMax.staggerFrom(o.chars, 0.02, {
            autoAlpha: 0
        }, 0.1), c),
        h.add(TweenMax.from(".per-moc p", {
            autoAlpha: 0,
            y: "2vw",
            duration: 3
        }), c + 1),
        (c += 8),
        (o.chars = shuffle(o.chars)),
        h.add(TweenMax.staggerTo(o.chars, 0.02, {
            autoAlpha: 0
        }, 0.1), c),
        h.add(TweenMax.to(".per-moc p", {
            autoAlpha: 0,
            duration: 1
        }), c + 1),
        h.add(TweenMax.staggerTo(g.chars.reverse(), 0.02, {
            autoAlpha: 0
        }, 0.1), c + 1),
        (c += 2);
        var u = $(".per-sliced-image--moc .per-slice");
        this.shuffleArray(u);
        for (d = 0; d < u.length; d++)(c += 0.25), h.add(TweenMax.to(u[d], {
            top: "-100%",
            duration: 6
        }), c);
c += 1;
var w = $(".per-moc .per-lines__single");
this.shuffleArray(w);
for (d = 0; d < w.length; d++)(c += 0.25), h.add(TweenMax.to(w[d], {
    autoAlpha: 0,
    duration: 1
}), c);
    (c += 1), h.add(TweenMax.to(".per-moc", {
        autoAlpha: 0,
        duration: 0.1
    }), c), (c += 0.1), h.add(TweenMax.to(".per-keypoints .per-anim-thing", {
        left: "30%",
        duration: 1
    }), c), (c += 1);
    for (d = 0; d < this.KEYPOINTS.length; d++)(c += 4), d < this.KEYPOINTS.length - 1 && (c += 1);
        h.add(TweenMax.from(".per-areyouready", {
            autoAlpha: 0,
            duration: 0.1
        }), c);
    u = $(".per-sliced-image--areyouready .per-slice");
    this.shuffleArray(u);
    for (d = 0; d < u.length; d++)(c += 0.25), h.add(TweenMax.from(u[d], {
        top: "+100%",
        duration: 6
    }), c);
        (c += 5),
        ((o = new SplitText(".per-areyouready h2", {
            type: "chars"
        })).chars = shuffle(o.chars)),
        h.add(TweenMax.staggerFrom(o.chars, 0.02, {
            autoAlpha: 0
        }, 0.1), c),
        h.add(TweenMax.from(".per-areyouready p", {
            autoAlpha: 0,
            y: "2vw",
            duration: 2
        }), c + 1.5),
        h.add(TweenMax.from(".per-areyouready__button", {
            autoAlpha: 0,
            y: "2vw",
            duration: 2
        }), c + 2.5),
        (c += 5.5),
        h.add(TweenMax.from(".per-areyouready .per-anim-thing", {
            opacity: 0.2,
            duration: 2
        }), c);
        var y = 0,
        T = gsap.timeline({
            scrollTrigger: {
                trigger: ".per-press-and-end",
                pin: ".per-press-and-end",
                start: "top top",
                end: "+=" + (150 + 35 * $(".per-press__quote").length) + "%",
                scrub: 1,
                onUpdate: function(e) {}
            }
        });
        T.add(TweenMax.to(".per-logo__normal", {
            opacity: 0,
            duration: 0.01
        }), y), T.add(TweenMax.to(".per-logo__blue", {
            opacity: 1,
            duration: 0.01
        }), y);
        var f = new SplitText(".per-press__pre-text", {
            type: "chars"
        });
        T.add(TweenMax.staggerFrom(f.chars, 0.02, {
            autoAlpha: 0
        }, 0.1), y), (y += 1);
        for (d = 0; d < $(".per-press__quote").length; d++) {
            T.add(TweenMax.from(".per-press__quote:nth-of-type(" + (d + 1) + ")", {
                autoAlpha: 0,
                top: "2vw",
                duration: 2,
                ease: Sine.easeIn
            }), y);
            o = new SplitText(".per-press__post-text:nth-of-type(" + (d + 1) + ")", {
                type: "chars"
            });
            T.add(TweenMax.staggerFrom(o.chars, 0.02, {
                autoAlpha: 0
            }, 0.1), y + 1),
            T.add(TweenMax.from(".per-press__post-text:nth-of-type(" + (d + 1) + ")", {
                autoAlpha: 0,
                duration: 0.01
            }), y + 1),
            (y += 2),
            T.add(TweenMax.to(".per-press .per-anim-thing", {
                left: 8 * (d + 1) + "%",
                duration: 6
            }), y),
            (y += 6),
            T.add(TweenMax.to(".per-press__quote:nth-of-type(" + (d + 1) + ")", {
                autoAlpha: 0,
                top: "-4vw",
                duration: 1,
                ease: Sine.easeIn
            }), y),
            T.add(TweenMax.staggerTo(o.chars.reverse(), 0.02, {
                autoAlpha: 0
            }, 0.1), y),
            (y += 2);
        }
        T.add(TweenMax.staggerFrom(f.chars.reverse(), 0.02, {
            autoAlpha: 0
        }, 0.1), y - 1);
        u = $(".per-press .per-slice");
        this.shuffleArray(u);
        for (d = 0; d < u.length; d++)(y += 0.25), T.add(TweenMax.to(u[d], {
            top: "-100%",
            duration: 6
        }), y);
            y += 1;
            w = $(".per-press .per-lines__single");
            this.shuffleArray(w);
            for (d = 0; d < w.length; d++)(y += 0.25), T.add(TweenMax.to(w[d], {
                top: "-100%",
                duration: 1
            }), y);
                T.add(TweenMax.to(".per-logo__normal", {
                    opacity: 1,
                    duration: 0.01
                }), y - 1.5),
                T.add(TweenMax.to(".per-logo__blue", {
                    opacity: 0,
                    duration: 0.01
                }), y - 1.5),
                T.add(TweenMax.to(".per-press", {
                    autoAlpha: 0,
                    duration: 0.1
                })),
                (y -= 1.5),
                T.add(TweenMax.from(".per-end__contact-details p", {
                    autoAlpha: 0,
                    y: "1vw",
                    duration: 2,
                    ease: Sine.easeIn
                }), y),
                (y += 1.5),
                T.add(TweenMax.from(".per-end__tagline h2." + e, {
                    autoAlpha: 0,
                    y: "1vw",
                    duration: 2,
                    ease: Sine.easeIn
                }), y),
                (y += 1.5),
                T.add(TweenMax.staggerFrom(".per-end__social-single", 2, {
                    autoAlpha: 0,
                    x: "-1vw"
                }, -0.4), y),
                T.add(TweenMax.to(".per-press .per-anim-thing", {
                    left: "0",
                    duration: 2
                }));
            },
            shuffleArray: function(e) {
                for (var t = e.length - 1; t > 0; t--) {
                    var a = Math.floor(Math.random() * (t + 1)),
                    n = e[t];
                    (e[t] = e[a]), (e[a] = n);
                }
            },
            onLogoClicked: function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 700);
            },
            handleStageResize: function() {
                var e = 0.01 * window.innerHeight,
                t = 0.01 * window.innerWidth;
                t < e != this.bIsPortrait && location.reload(), document.documentElement.style.setProperty("--vw", t + "px"), document.documentElement.style.setProperty("--vh", e + "px");
                var a = 12;
                this.bIsPortrait && (a = 8);
                var n = Math.round(window.innerWidth / a);
                document.documentElement.style.setProperty("--onecolumn", n);
                for (var o, r, i = 0; i < a; i++) {
                    var s = i * n,
                    p = n;
                    i == a - 1 && (p = window.innerWidth - s),
                    $(".per-slice-position:nth-child(" + (i + 1) + ")").css({
                        left: s + "px"
                    }),
                    $(".per-slice:nth-child(" + (i + 1) + ") .per-slice__inside").css({
                        left: -s + "px"
                    }),
                    $(".per-slice:nth-child(" + (i + 1) + ")").css({
                        width: p + "px"
                    }),
                    1 == i && $(".per-slice-content-pos--left").css({
                        left: s + "px"
                    }),
                    i == a / 2 && $(".per-slice-content-pos--middle").css({
                        left: s + "px"
                    }),
                    this.bIsPortrait || (7 == i && $(".per-slice-content-pos--middle-plus").css({
                        left: s + "px"
                    }), 8 == i && $(".per-slice-content-pos--middle-plus-plus").css({
                        left: s + "px"
                    })),
                    n;
                }
                t / e > this.VIDEO_RATIO ? (r = (o = 100 * t) / this.RATIO) : (o = (r = 100 * e) * this.RATIO);
                var d = (100 * t - o) / 2,
                l = (100 * e - r) / 2;
                this.myVideoPlayer.css({
                    width: o + "px",
                    height: r + "px",
                    left: d + "px",
                    top: l + "px"
                });
            },
        },
        KeyPointsSectionManager = {
            SCROLL_PERCENTAGES: {
                space: 0.43,
                intelligence: 0.47,
                cyber: 0.51,
                defense: 0.54,
                homeland: 0.58,
                civilian: 0.62,
                health: 0.65
            },
            SCROLL_PERCENTAGES_MOBILE: {
                space: 0.41,
                intelligence: 0.46,
                cyber: 0.5,
                defense: 0.55,
                homeland: 0.59,
                civilian: 0.63,
                health: 0.67
            },
            oActiveScrollPercentages: {},
            nKeyPointsScrollStart: 0,
            nKeyPointsScrollEnd: 0,
            nKeyPointsScrollDistance: 0,
            nKeyPointSectionLength: 0,
            nKeyPointShowing: -1,
            init: function() {
                $(".per-keypoints__nav-item--active").on("click", this.onSubnavClicked.bind(this)),
                (this.nKeyPointsScrollStart = 0.2919),
                (this.nKeyPointsScrollEnd = 0.78),
                (this.oActiveScrollPercentages = this.SCROLL_PERCENTAGES),
                SiteManager.bIsPortrait && ((this.nKeyPointsScrollEnd = 0.795), (this.oActiveScrollPercentages = this.SCROLL_PERCENTAGES_MOBILE)),
                (this.nKeyPointsScrollDistance = this.nKeyPointsScrollEnd - this.nKeyPointsScrollStart),
                (this.nKeyPointSectionLength = this.nKeyPointsScrollDistance / SiteManager.KEYPOINTS.length);
            },
            onSubnavClicked: function(e) {
                var t;
                (t = ($(document).height() - $(window).height()) * this.oActiveScrollPercentages[$(e.currentTarget).data("scene")]), window.scrollTo(0, t);
            },
            handleKeypointsScroll: function(e) {
                for (var t = 0, a = 0; a < SiteManager.KEYPOINTS.length; a++)
                    e.progress >= this.nKeyPointsScrollStart + a * this.nKeyPointSectionLength && e.progress < this.nKeyPointsScrollStart + (a + 1) * this.nKeyPointSectionLength && (t = a);
                e.progress < this.nKeyPointsScrollStart ? (t = 0) : e.progress >= this.nKeyPointsScrollEnd && (t = SiteManager.KEYPOINTS.length - 1), this.switchToThisKeypoint(t);
            },
            switchToThisKeypoint: function(e) {
                if (e != this.nKeyPointShowing) {
                    if ((console.log("OLD:", this.nKeyPointShowing, " Switch to", e), e > this.nKeyPointShowing))
                        for (var t = 0; t < SiteManager.KEYPOINTS.length; t++)
                            t < e ?
                        t == this.nKeyPointShowing ?
                        $(".per-keypoints__section--" + SiteManager.KEYPOINTS[t]).fadeOut(300) :
                        $(".per-keypoints__section--" + SiteManager.KEYPOINTS[t]).hide() :
                        $(".per-keypoints__section--" + SiteManager.KEYPOINTS[t]).show();
                        else $(".per-keypoints__section--" + SiteManager.KEYPOINTS[e]).fadeIn(300);
                        for (t = 0; t < SiteManager.KEYPOINTS.length; t++)
                            t == e ?
                        $(".per-keypoints__nav-item:nth-of-type(" + (t + 1) + ")").css({
                            backgroundColor: "rgba(0,0,0,1)",
                            borderTopColor: "rgba(255,255,255,1)"
                        }) :
                        $(".per-keypoints__nav-item:nth-of-type(" + (t + 1) + ")").css({
                            backgroundColor: "rgba(0,0,0,0)",
                            borderTopColor: "rgba(255,255,255,0.2)"
                        });
                        TweenMax.from(".per-keypoints__section--" + SiteManager.KEYPOINTS[e] + " h2", {
                            autoAlpha: 0,
                            y: "2vw",
                            duration: 0.2,
                            delay: 0.3,
                            ease: Sine.easeIn
                        }),
                        TweenMax.from(".per-keypoints__section--" + SiteManager.KEYPOINTS[e] + " p", {
                            autoAlpha: 0,
                            duration: 0.4,
                            delay: 0.4,
                            ease: Sine.easeIn
                        }),
                        (this.nKeyPointShowing = e);
                    }
                },
            };

            function shuffle(e) {
                for (var t, a, n = e.length; 0 !== n;)(a = Math.floor(Math.random() * n)), (t = e[(n -= 1)]), (e[n] = e[a]), (e[a] = t);
                    return e;
            }
//# sourceMappingURL=website-min.js.map