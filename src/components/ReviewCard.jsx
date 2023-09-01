import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-contain w-[120px] h-[120px]"
      />
      <p className="max-w-sm text-center info-text mt-6">{feedback}</p>
      <div className="flex justify-center items-center gap-2.5 mt-3">
        <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-slate-gray text-xl font-montserrat">({rating})</p>
      </div>
      <h3 className="text-3xl text-center font-bold font-raleway mt-1">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
