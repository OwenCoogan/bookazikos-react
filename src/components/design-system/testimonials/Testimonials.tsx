import Carousel from 'nuka-carousel';
import 'react-awesome-slider/dist/styles.css';
  import TestimonialCard from './TestimonialCard';


export default function Testimonials() {
  return (
    <section className="bg-white dark:bg-gray-900">
    <Carousel wrapAround={true} slidesToShow={1} defaultControlsConfig={
      {
        nextButtonText: '>',
        prevButtonText: '<',
        pagingDotsStyle: {
          fill: 'white',
          fillOpacity: 1,
          stroke: 'white',
          strokeWidth: 1,
        },
    }}
    >
        <TestimonialCard
          testimonial='I love this product. It is the best thing I have ever used. I would recommend it to anyone.'
          author={{
            name: 'Michael Gouch',
            occupation: {
              title: 'CEO',
              company: 'Flowbite',
            },
          }}
        />
        <TestimonialCard
          testimonial='I love this product. It is the best thing I have ever used. I would recommend it to anyone.'
          author={{
            name: 'Michael Gouch',
            occupation: {
              title: 'CEO',
              company: 'Flowbite',
            },
          }}
        />
        <TestimonialCard
          testimonial='I love this product. It is the best thing I have ever used. I would recommend it to anyone.'
          author={{
            name: 'Michael Gouch',
            occupation: {
              title: 'CEO',
              company: 'Flowbite',
            },
          }}
        />
    </Carousel>
</section>
  )
}
