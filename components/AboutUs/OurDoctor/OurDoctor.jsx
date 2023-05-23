"use client";
import React from "react";
import DoctorCard from "./DoctorCard";
import Slider from "react-slick";

const OurDoctor = () => {
  const arr = [
    {
      title: "Dr. Addition Smith",
      postion: "Dentist",
      img: "",
    },
    {
      title: "Dr. Mahfuz Riad",
      postion: "Chiropractor",
      img: "",
    },
    {
      title: "Dr. David Benjamin",
      postion: "Cardiologist",
      img: "https://meditro.themetrades.com/react/static/media/member1.22ac1d59.jpg",
    },
  ];
  let settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 700,
    
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section class="section-area section-sp3 team-wraper">
      <div class="container">
        <div class="heading-bx text-center">
          <h6 class="title-ext text-secondary">Our Doctor</h6>
          <h2 class="title">Meet Best Doctors</h2>
        </div>
        <div class="row justify-content-center">
        <div>
                <Slider {...settings}>
                  {arr.map((element, index) => {
                    return <DoctorCard key={index} data={element} />;
                  })}
                </Slider>
              </div>
         
          
        </div>
      </div>
      <img
        class="pt-img1 animate1"
        src="data:image/png;base64,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"
        alt=""
      />
      <img
        class="pt-img2 animate2"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAMAAADY1yDdAAABFFBMVEUAAADxdzL/49P/49Pwcin/49P/5NTxdzLxdzL/49P/49P/49L/49P/49P/49P/49PxeDP/49P/49P/49P/5NX/49P/5NT/49P/49P/5dXxdC3/4tH/49P/49PxdS//49P/49P/49PvaRz/49PwbyX/49P/9Oz/+fP//fvxdzLwaR3vaBv/49P/6dv/49P/49P/+PLzhUb/////69/vaR3/6dz0jlTxdS/zik7yfjz/+/f/6Nv6v53/9/HxeTX7ya37yq7/6Nv/9e34rYLvZxv0kFf+3MnxdzHxdzLxeDPxeDPxdzL/49PxdzL0j1X0jFL/6dz6wJ//8un0kFfyfj3zh0rwcyz6w6TwbybvayD8zrTtWQXBD1zNAAAATHRSTlMA9g8Hz2s1D8/xQVLXsK2UzwsGBBG6I7fels8oVSrPaY1P7z/QIe9nIV9f9eFs8tDXx0Ao/PHx6NbIsKyTU0n1y7CqaVdKQdWWs2JC7n5jhAAAAhZJREFUWMPtl3lPwjAYxiuMUUCg4oFMnaCIN96c4q2gFgYCnt//e7hSEJPZZQtNA6bPP++b/Uie0PbpAaQ46BlO8VG1xjZ5qlchRLpiSkcQaaSBpkjVkAtSn2Kb7NQBHyEbk/t3Px8TZWCyEY3O9Ro14qNfNq92eyZziUSflPcp2S+rwAUZmsxjnCDVu4hxkDTrL621nknUQjDe8zomzQeRJvbDZSG+iAocEzJcoiaevYQ5mUAbk20BJox/wjmMF6+cTLQfk2CQ1lhogTZb56f+v8lCKAZckOHEJzH2kTobwYEV0ixl3mhOVi0kgMOzjsnZ0tDEzNM8qTMY42XShAZhjFuI2cw4Js3Q0CQ1Pa3SPAXCHlI9N5c0jKqFhAM+4Jhce37lxOvtN57Bl9sPP4OQxjGxD+MdryWsiwgjkomXiZeJl4nnbCJkuARMvJAlLCqM1m0ly9xWsszNI2u7rQjZIAVt9UztTFQYhRy/cFxev6M95+TrV75+Jz+M8i4s78LyLiyPX86Jh7aJp83xMaCqbPVJBbgiyCbxra8qglA7ajSONAh1VDByRbPRijmjgHQXpM5OfPPTUCBE6U673Umbbumu0cgrCCn5htFNuyGPNWbiw2ebgOjk8PCEnseZEv1tKeOasNPLh0iNt0RMfIp9APEgVIvso5QHoUqyX7I8CJUaj2/QcTtIxkiNJQ9S9Co+Mvln+gYUWeKKD84yMgAAAABJRU5ErkJggg=="
        alt=""
      />
      <img
        class="pt-img3 animate-rotate"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAC+lBMVEUAAADe3/b////////////09fz///////9OUs35+f5NUs38/P78/P7///////////9jZtP////////4+P3///9PU81RVc7////MzfH////U1fP///9aX9CRlOD////39/3+/v+bneNbX9H////r7PrMzfH+/v+vsOhOU83///////+eoeP8/P5gZNKprOd2etmpq+f///9jZtNPVM5OUc2DhtzW1/Ssrue+wO2Bg9vy8/xNUc3o6Pja2/VVWc////9JTcz///+/we3l5viChdxXXND///9hZdL////V1vOXmeHMzfGdoOP39/3Q0fK4uutTV86Ym+Gmp+by8vve3/Xm5vj2+P1UWM/f4PZhZdKYm+Hi4vf39/3Gx+/////NzvFfY9Ho6fhPU815fdm6vOuSleCgouRpbNRYW9Dr6/l7ftqHit3f4PbHyO/t7vqipOWChNvn5/heYtGChty2uOvy8ftkZ9NMUMz///9KTsxITMtJTcxMUMxRVs5LT8xVWc9ZXdBTV8/6+/79/f/x8ftXW9BQVM7+//9PU83t7frKy/C4uutnatT8/P74+P1pbNViZtNNUc35+f3Gx++usOh7ftrb3PXU1fOIi95rbtVOUs2oqueYmuJ1eNj29v319fzz8/zP0PGNkN9fY9JdYdFcX9GKjd6Hid339/3n5/ji4vfAwe2jpuWbneORlODW1/STluGAg9twc9fm5vjS0/OPkt+FiN1+gdttcdZmadPw8Pvr6/re3/bOz/G+v+2foeR4fNlkZ9NhZdLu7/vX2PS3uOuxs+lydddaXtDs7Prc3fXDxe68veyqrOeho+Tq6vnCw+6wsul3etheYtHp6fnf4PbHyfC6vOy1tuqmqOadn+OVl+FscNbR0vKDhtxzdtfj5PerrueZnOPo6Pnk5fji4vaeoOSBhNx5fdl0d9jy8/za2/XLzfHFxu+ztOqChdx8gNutr+iipOWWmeJxdNfg4fbIyvDZ2vSOkd/09PykpubBwu77+/2/wOy+iOgiAAAAeHRSTlMAC+7OrxH5l4Q5KyQd3MrBu7eeg3JfU1E6Lgb09PLl4uHPzcfHtqinmYRqZ2VFKhsaGA374N7Lxry6srGvrpKQkIt9d3dpYFxaVVBIOTYyLBP6+fjv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"
        alt=""
      />
      <img
        class="pt-img4 animate-wave"
        src="data:image/png;base64,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"
        alt=""
      />
      <img
        class="pt-img5 animate-wave"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABgCAMAAADcrSdwAAAC+lBMVEUAAABWWs9WWs9SVs5WWs////9WWs9UWM5WWs////9WWs////9VWc9WWs9VWc////9WWs9VWc/////6+/////9WWs9WWs/////+/v9WWs/////+/v9WWs/8/P9WWs////9SVs5WWs9WWs////////9WWs////////9WWs9WWs////9SVs79/f9WWs9WWs9WWs9WWs9WWs/5+f5WWs/6+v+VmOJ4e9lWWs9WWs/////+/v////9WWs////////////9WWs////////////9WWs/////////////7+/////////////9WWs9WWs/5+v/5+f9WWs/+/v////////9WWs9WWs////////9WWs////////////////9WWs////////////9UWM9WWs/////h4v////////////////9QVM7i4//n6P/y8v8/Q8lWWs88QMj///9PU83////19f7////6+v/////m5//////////t7v/09P9MUcyjpeT///8/Q8jR0vJDR8qmqOXh4v9madM/Qsn29v/u7v/l5v/u7//4+P93etnk5f/4+P9WWs/k5f/09P9WWs9BRsjm5v+jpeXn6P/CxO3t7f9CR8lITMvk5f/////q6v/Cw+7l5v8/RMhucdfj5P/7+/+ZnOKdoOf////i4//+/v/h4v9WWs/9/f/k5f/3+P/m5v/7+//5+f/09f/7/P/6+v/s7P/29v/w8P/p6v/t7v/u7//z8//r6//o6P/q6v/x8f/e3/ZUWM/n6P/3+f/w8f9BRsny8//z8/xXW9CPkuBqbdVHS8vt7frAwe2Hit5iZtNLT8xJTcw8Qcjm5vjQ0PG1t+utr+imqOiXmeJaXtBSVs5EScvx8fvq6/nLzfKfoeSLjd5zdthwc9htcNZOU83HyPC5u+uanONkaNRfY9NdYdH49/3v7/vQ0vjh4vfZ2vXU1vPExe6jpeWAg9v8+//29vy3ueuxs+qkpuWEh9x7f9o4PcfT0/LAwvCpq+mfoul7MFyEAAAApXRSTlMAxJ8EzLZICfDs06SaioR4Yx4NBffn48+eflNMQikoGxr37OXDqI6Gdm9ua2NZVFFNOh8PCf7++/Th4NnX1tXHv768qpSSXFlIRkI8Ny4ZEg0D/PDf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"
        alt=""
      />
    </section>
  );
};

export default OurDoctor;
