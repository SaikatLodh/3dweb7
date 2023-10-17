gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


const canvas = document.querySelector(".page1>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
./assets/image/male0001.png
./assets/image/male0002.png
./assets/image/male0003.png
./assets/image/male0004.png
./assets/image/male0005.png
./assets/image/male0006.png
./assets/image/male0007.png
./assets/image/male0008.png
./assets/image/male0009.png
./assets/image/male0010.png
./assets/image/male0011.png
./assets/image/male0012.png
./assets/image/male0013.png
./assets/image/male0014.png
./assets/image/male0015.png
./assets/image/male0016.png
./assets/image/male0017.png
./assets/image/male0018.png
./assets/image/male0019.png
./assets/image/male0020.png
./assets/image/male0021.png
./assets/image/male0022.png
./assets/image/male0023.png
./assets/image/male0024.png
./assets/image/male0025.png
./assets/image/male0026.png
./assets/image/male0027.png
./assets/image/male0028.png
./assets/image/male0029.png
./assets/image/male0030.png
./assets/image/male0031.png
./assets/image/male0032.png
./assets/image/male0033.png
./assets/image/male0034.png
./assets/image/male0035.png
./assets/image/male0036.png
./assets/image/male0037.png
./assets/image/male0039.png
./assets/image/male0040.png
./assets/image/male0041.png
./assets/image/male0042.png
./assets/image/male0043.png
./assets/image/male0044.png
./assets/image/male0045.png
./assets/image/male0046.png
./assets/image/male0047.png
./assets/image/male0048.png
./assets/image/male0049.png
./assets/image/male0050.png
./assets/image/male0051.png
./assets/image/male0052.png
./assets/image/male0053.png
./assets/image/male0054.png
./assets/image/male0055.png
./assets/image/male0056.png
./assets/image/male0057.png
./assets/image/male0058.png
./assets/image/male0059.png
./assets/image/male0060.png
./assets/image/male0061.png
./assets/image/male0062.png
./assets/image/male0063.png
./assets/image/male0064.png
./assets/image/male0065.png
./assets/image/male0066.png
./assets/image/male0067.png
./assets/image/male0068.png
./assets/image/male0069.png
./assets/image/male0070.png
./assets/image/male0071.png
./assets/image/male0072.png
./assets/image/male0073.png
./assets/image/male0074.png
./assets/image/male0075.png
./assets/image/male0076.png
./assets/image/male0077.png
./assets/image/male0078.png
./assets/image/male0079.png
./assets/image/male0080.png
./assets/image/male0081.png
./assets/image/male0082.png
./assets/image/male0083.png
./assets/image/male0084.png
./assets/image/male0085.png
./assets/image/male0086.png
./assets/image/male0087.png
./assets/image/male0088.png
./assets/image/male0089.png
./assets/image/male0090.png
./assets/image/male0091.png
./assets/image/male0092.png
./assets/image/male0093.png
./assets/image/male0094.png
./assets/image/male0095.png
./assets/image/male0096.png
./assets/image/male0097.png
./assets/image/male0098.png
./assets/image/male0099.png
./assets/image/male0100.png
./assets/image/male0101.png
./assets/image/male0102.png
./assets/image/male0103.png
./assets/image/male0104.png
./assets/image/male0105.png
./assets/image/male0106.png
./assets/image/male0107.png
./assets/image/male0108.png
./assets/image/male0109.png
./assets/image/male0110.png
./assets/image/male0111.png
./assets/image/male0112.png
./assets/image/male0113.png
./assets/image/male0114.png
./assets/image/male0115.png
./assets/image/male0116.png
./assets/image/male0117.png
./assets/image/male0118.png
./assets/image/male0119.png
./assets/image/male0120.png
./assets/image/male0121.png
./assets/image/male0122.png
./assets/image/male0123.png
./assets/image/male0124.png
./assets/image/male0125.png
./assets/image/male0126.png
./assets/image/male0127.png
./assets/image/male0128.png
./assets/image/male0129.png
./assets/image/male0130.png
./assets/image/male0131.png
./assets/image/male0132.png
./assets/image/male0133.png
./assets/image/male0134.png
./assets/image/male0135.png
./assets/image/male0136.png
./assets/image/male0137.png
./assets/image/male0138.png
./assets/image/male0139.png
./assets/image/male0140.png
./assets/image/male0141.png
./assets/image/male0142.png
./assets/image/male0143.png
./assets/image/male0144.png
./assets/image/male0145.png
./assets/image/male0146.png
./assets/image/male0147.png
./assets/image/male0148.png
./assets/image/male0149.png
./assets/image/male0150.png
./assets/image/male0151.png
./assets/image/male0152.png
./assets/image/male0153.png
./assets/image/male0154.png
./assets/image/male0155.png
./assets/image/male0156.png
./assets/image/male0157.png
./assets/image/male0158.png
./assets/image/male0159.png
./assets/image/male0160.png
./assets/image/male0161.png
./assets/image/male0162.png
./assets/image/male0163.png
./assets/image/male0164.png
./assets/image/male0165.png
./assets/image/male0166.png
./assets/image/male0167.png
./assets/image/male0168.png
./assets/image/male0169.png
./assets/image/male0170.png
./assets/image/male0171.png
./assets/image/male0172.png
./assets/image/male0173.png
./assets/image/male0174.png
./assets/image/male0175.png
./assets/image/male0176.png
./assets/image/male0177.png
./assets/image/male0178.png
./assets/image/male0179.png
./assets/image/male0180.png
./assets/image/male0181.png
./assets/image/male0182.png
./assets/image/male0183.png
./assets/image/male0184.png
./assets/image/male0185.png
./assets/image/male0186.png
./assets/image/male0187.png
./assets/image/male0188.png
./assets/image/male0189.png
./assets/image/male0190.png
./assets/image/male0191.png
./assets/image/male0192.png
./assets/image/male0193.png
./assets/image/male0194.png
./assets/image/male0195.png
./assets/image/male0196.png
./assets/image/male0197.png
./assets/image/male0198.png
./assets/image/male0199.png
./assets/image/male0200.png
./assets/image/male0201.png
./assets/image/male0202.png
./assets/image/male0203.png
./assets/image/male0204.png
./assets/image/male0205.png
./assets/image/male0206.png
./assets/image/male0207.png
./assets/image/male0208.png
./assets/image/male0209.png
./assets/image/male0210.png
./assets/image/male0211.png
./assets/image/male0212.png
./assets/image/male0213.png
./assets/image/male0214.png
./assets/image/male0215.png
./assets/image/male0216.png
./assets/image/male0217.png
./assets/image/male0218.png
./assets/image/male0219.png
./assets/image/male0220.png
./assets/image/male0221.png
./assets/image/male0222.png
./assets/image/male0223.png
./assets/image/male0224.png
./assets/image/male0225.png
./assets/image/male0226.png
./assets/image/male0227.png
./assets/image/male0228.png
./assets/image/male0229.png
./assets/image/male0230.png
./assets/image/male0231.png
./assets/image/male0232.png
./assets/image/male0233.png
./assets/image/male0234.png
./assets/image/male0235.png
./assets/image/male0236.png
./assets/image/male0237.png
./assets/image/male0238.png
./assets/image/male0239.png
./assets/image/male0240.png
./assets/image/male0241.png
./assets/image/male0242.png
./assets/image/male0243.png
./assets/image/male0244.png
./assets/image/male0245.png
./assets/image/male0246.png
./assets/image/male0247.png
./assets/image/male0248.png
./assets/image/male0249.png
./assets/image/male0250.png
./assets/image/male0251.png
./assets/image/male0252.png
./assets/image/male0253.png
./assets/image/male0254.png
./assets/image/male0255.png
./assets/image/male0256.png
./assets/image/male0257.png
./assets/image/male0258.png
./assets/image/male0259.png
./assets/image/male0260.png
./assets/image/male0261.png
./assets/image/male0262.png
./assets/image/male0263.png
./assets/image/male0264.png
./assets/image/male0265.png
./assets/image/male0266.png
./assets/image/male0267.png
./assets/image/male0268.png
./assets/image/male0269.png
./assets/image/male0270.png
./assets/image/male0271.png
./assets/image/male0272.png
./assets/image/male0273.png
./assets/image/male0274.png
./assets/image/male0275.png
./assets/image/male0276.png
./assets/image/male0277.png
./assets/image/male0278.png
./assets/image/male0279.png
./assets/image/male0280.png
./assets/image/male0281.png
./assets/image/male0282.png
./assets/image/male0283.png
./assets/image/male0284.png
./assets/image/male0285.png
./assets/image/male0286.png
./assets/image/male0287.png
./assets/image/male0288.png
./assets/image/male0289.png
./assets/image/male0290.png
./assets/image/male0291.png
./assets/image/male0292.png
./assets/image/male0293.png
./assets/image/male0294.png
./assets/image/male0295.png
./assets/image/male0296.png
./assets/image/male0297.png
./assets/image/male0298.png
./assets/image/male0299.png
./assets/image/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `.page1>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `.main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: ".page1>canvas",
  pin: true,
  // markers:true,
  scroller: `.main`,
  //   set start end according to preference
  start: `top top`,
  end: `600% top`,
});




gsap.to(".page2", {
  scrollTrigger: {
    trigger: `.page2`,
    start: `top top`,
    end: `bottom top`,
    scroller: `.main`,
    pin: true
  }
});


gsap.to(".page3", {
  scrollTrigger: {
    trigger: `.page3`,
    start: `top top`,
    end: `bottom top`,
    scroller: `.main`,
    pin: true
  }
});



gsap.to(".page4", {
  scrollTrigger: {
    trigger: `.page4`,
    start: `top top`,
    end: `bottom top`,
    scroller: `.main`,
    pin: true
  }
});

gsap.to("#nav", {

  duration: 0.5,
  height: "140",
  color: "white",
  scrollTrigger: {
    trigger: "#nav",
    scroller: ".main",
    markers: false,
    start: "top -800%",
    scrub: 1,


  }

})