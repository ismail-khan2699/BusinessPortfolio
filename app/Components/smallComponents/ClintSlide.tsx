"use client"
import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import './slidepic.css'

function ClintSlide() {
    const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
        perView: 3,
        spacing: 10,
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
                <div className=' p-3 rounded-lg shadow-md flex flex-col justify-center items-center'>
                    <div className='profile-picture'>
                        <img src="/assets/p1.jpeg" alt="person1" className='face-image' />
                    </div>
                    <img src="/assets/stars.png" alt="rating" className='py-2' />
                    <h3 className=' text-xs text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptatibus ea, ut sequi fugit impedit eveniet maiores, quas error atque iusto optio? Aperiam illum ab voluptatum architecto hic et laborum.</h3>
                    <div className="flex w-full justify-between mt-3">
                        <h2 className=' text-xs '>Maria Bend, Director</h2>
                        <a href='#' className='gradiantText text-xs '>Read More</a>
                    </div>
                </div>
          </div>


          <div className="keen-slider__slide number-slide1">
                <div className=' p-3 rounded-lg shadow-md flex flex-col justify-center items-center'>
                    <div className='profile-picture'>
                        <img src="/assets/p2.jpeg" alt="person1" className='face-image' />
                    </div>
                    <img src="/assets/stars.png" alt="rating" className='py-2' />
                    <h3 className=' text-xs text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptatibus ea, ut sequi fugit impedit eveniet maiores, quas error atque iusto optio? Aperiam illum ab voluptatum architecto hic et laborum.</h3>
                    <div className="flex w-full justify-between mt-3">
                        <h2 className=' text-xs '>Maria Bend, Director</h2>
                        <a href='#' className='gradiantText text-xs '>Read More</a>
                    </div>
                </div>
          </div>
          <div className="keen-slider__slide number-slide1">
                <div className=' p-3 rounded-lg flex flex-col justify-center items-center'>
                    <div className='profile-picture'>
                        <img src="/assets/p3.jpeg" alt="person1" className='face-image' />
                    </div>
                    <img src="/assets/stars.png" alt="rating" className='py-2' />
                    <h3 className=' text-xs text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptatibus ea, ut sequi fugit impedit eveniet maiores, quas error atque iusto optio? Aperiam illum ab voluptatum architecto hic et laborum.</h3>
                    <div className="flex w-full justify-between mt-3">
                        <h2 className=' text-xs '>Maria Bend, Director</h2>
                        <a href='#' className='gradiantText text-xs '>Read More</a>
                    </div>
                </div>
          </div>

          <div className="keen-slider__slide number-slide1">
                <div className=' p-3 rounded-lg flex flex-col justify-center items-center'>
                    <div className='profile-picture'>
                        <img src="/assets/p3.jpeg" alt="person1" className='face-image' />
                    </div>
                    <img src="/assets/stars.png" alt="rating" className='py-2' />
                    <h3 className=' text-xs text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptatibus ea, ut sequi fugit impedit eveniet maiores, quas error atque iusto optio? Aperiam illum ab voluptatum architecto hic et laborum.</h3>
                    <div className="flex w-full justify-between mt-3">
                        <h2 className=' text-xs '>Maria Bend, Director</h2>
                        <a href='#' className='gradiantText text-xs '>Read More</a>
                    </div>
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
export default ClintSlide;

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