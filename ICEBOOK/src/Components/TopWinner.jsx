import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
function TopWinners() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.7,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="top-winner-list-box">
            <div className="w-100 text-center">
              <img
                src="https://wver.sprintstaticdata.com/v50/static/front/img/user-icon.png"
                alt="user-icon"
              />
            </div>
            <div className="w-100">
              <div className="player-detail">
                <div>
                  <b>Player</b>
                </div>
                <div>xx****</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Time</b>
                </div>
                <div>07/05/2024 00:00</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Win Amount</b>
                </div>
                <div>99,35,000</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="top-winner-list-box">
            <div className="w-100 text-center">
              <img
                src="https://wver.sprintstaticdata.com/v50/static/front/img/user-icon.png"
                alt="user-icon"
              />
            </div>
            <div className="w-100">
              <div className="player-detail">
                <div>
                  <b>Player</b>
                </div>
                <div>xx****</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Time</b>
                </div>
                <div>07/05/2024 00:00</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Win Amount</b>
                </div>
                <div>99,35,000</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="top-winner-list-box">
            <div className="w-100 text-center">
              <img
                src="https://wver.sprintstaticdata.com/v50/static/front/img/user-icon.png"
                alt="user-icon"
              />
            </div>
            <div className="w-100">
              <div className="player-detail">
                <div>
                  <b>Player</b>
                </div>
                <div>xx****</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Time</b>
                </div>
                <div>07/05/2024 00:00</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Win Amount</b>
                </div>
                <div>99,35,000</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="top-winner-list-box">
            <div className="w-100 text-center">
              <img
                src="https://wver.sprintstaticdata.com/v50/static/front/img/user-icon.png"
                alt="user-icon"
              />
            </div>
            <div className="w-100">
              <div className="player-detail">
                <div>
                  <b>Player</b>
                </div>
                <div>xx****</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Time</b>
                </div>
                <div>07/05/2024 00:00</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Win Amount</b>
                </div>
                <div>99,35,000</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="top-winner-list-box">
            <div className="w-100 text-center">
              <img
                src="https://wver.sprintstaticdata.com/v50/static/front/img/user-icon.png"
                alt="user-icon"
              />
            </div>
            <div className="w-100">
              <div className="player-detail">
                <div>
                  <b>Player</b>
                </div>
                <div>xx****</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Time</b>
                </div>
                <div>07/05/2024 00:00</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Win Amount</b>
                </div>
                <div>99,35,000</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="top-winner-list-box">
            <div className="w-100 text-center">
              <img
                src="https://wver.sprintstaticdata.com/v50/static/front/img/user-icon.png"
                alt="user-icon"
              />
            </div>
            <div className="w-100">
              <div className="player-detail">
                <div>
                  <b>Player</b>
                </div>
                <div>xx****</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Time</b>
                </div>
                <div>07/05/2024 00:00</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Win Amount</b>
                </div>
                <div>99,35,000</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="top-winner-list-box">
            <div className="w-100 text-center">
              <img
                src="https://wver.sprintstaticdata.com/v50/static/front/img/user-icon.png"
                alt="user-icon"
              />
            </div>
            <div className="w-100">
              <div className="player-detail">
                <div>
                  <b>Player</b>
                </div>
                <div>xx****</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Time</b>
                </div>
                <div>07/05/2024 00:00</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Win Amount</b>
                </div>
                <div>99,35,000</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="top-winner-list-box">
            <div className="w-100 text-center">
              <img
                src="https://wver.sprintstaticdata.com/v50/static/front/img/user-icon.png"
                alt="user-icon"
              />
            </div>
            <div className="w-100">
              <div className="player-detail">
                <div>
                  <b>Player</b>
                </div>
                <div>xx****</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Time</b>
                </div>
                <div>07/05/2024 00:00</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Win Amount</b>
                </div>
                <div>99,35,000</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="top-winner-list-box">
            <div className="w-100 text-center">
              <img
                src="https://wver.sprintstaticdata.com/v50/static/front/img/user-icon.png"
                alt="user-icon"
              />
            </div>
            <div className="w-100">
              <div className="player-detail">
                <div>
                  <b>Player</b>
                </div>
                <div>xx****</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Time</b>
                </div>
                <div>07/05/2024 00:00</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Win Amount</b>
                </div>
                <div>99,35,000</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="top-winner-list-box">
            <div className="w-100 text-center">
              <img
                src="https://wver.sprintstaticdata.com/v50/static/front/img/user-icon.png"
                alt="user-icon"
              />
            </div>
            <div className="w-100">
              <div className="player-detail">
                <div>
                  <b>Player</b>
                </div>
                <div>xx****</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Time</b>
                </div>
                <div>07/05/2024 00:00</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Win Amount</b>
                </div>
                <div>99,35,000</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="top-winner-list-box">
            <div className="w-100 text-center">
              <img
                src="https://wver.sprintstaticdata.com/v50/static/front/img/user-icon.png"
                alt="user-icon"
              />
            </div>
            <div className="w-100">
              <div className="player-detail">
                <div>
                  <b>Player</b>
                </div>
                <div>xx****</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Time</b>
                </div>
                <div>07/05/2024 00:00</div>
              </div>
              <div className="player-detail">
                <div>
                  <b>Win Amount</b>
                </div>
                <div>99,35,000</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default TopWinners;