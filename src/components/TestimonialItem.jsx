import clsx from "clsx";

const TestimonialItem = ({ testimonial, classContainer }) => {
  return (
    <div
      className={clsx(
        "relative px-14 pb-14 pt-11 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-s2 after:content-[''] max-md:px-0 max-md:pt-11 after:max-md:right-4",
        classContainer
      )}
    >
      <blockquote className="mb-8 h6 text-p4">{testimonial.comment}</blockquote>
      <div className="flex items-center max-xl:-mr-8">
        <div className="mr-4 border-2 size-20 shrink-0 rounded-half border-s2 p-1.5">
          <img
            src={testimonial.avatarUrl}
            className="object-cover size-full"
            alt={testimonial.name}
          />
        </div>
        <div >
          <h4 className="body-2 mb-0.5 text-p1">{testimonial.name}</h4>
          <p className=" small-compact uppercase text-s3">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
