"use client"
import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import './slidepic.css'

function SlidePic() {
    const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
        perView: 3,
        spacing: 15,
      },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
      return (
        <div className=' w-full flex flex-col justify-center items-center my-5'>
        <div ref={sliderRef} className="keen-slider" >
          <div className="keen-slider__slide number-slide1">
                <div>
                <img src="/assets/rectangular1.png" alt="port" className=' rounded-lg' style={{height:'370px'}} />
                <h2 className=' text-xl py-2'>REDESIGN OF B2B WEBSITE</h2>
                <h3 className=' text-xs pt-2'>Web Design</h3>
                    </div>


          </div>
          <div className="keen-slider__slide number-slide1">
                <div>
                <img src="/assets/rectangular2.png" alt="port" className=' rounded-lg ' style={{height:'370px'}}/>
                <h2 className=' text-xl py-2'>MOBILE APPLICATION</h2>
                <h3 className=' text-xs pt-2'>App Development</h3>
                    </div>


          </div>
          <div className="keen-slider__slide number-slide1">
                <div>
                <img src="/assets/rectangular3.png" alt="port" className=' rounded-lg' style={{height:'370px'}} />
                <h2 className=' text-xl py-2'>E-COMMERCE SHOP</h2>
                <h3 className=' text-xs pt-2'>Web Development</h3>
                    </div>


          </div>
        </div>

        {loaded && instanceRef.current && (
          <div className='flex my-5'>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

        <div className="dots mx-5">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </div>
        )}


</div>
      )
}
export default SlidePic;

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
  }) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }