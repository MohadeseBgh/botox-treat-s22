import FilledStar from "@/components/icons/FilledStar";
import HollowStar from "@/components/icons/HollowStar";

const Rating = ({ rateNumber = 0 }) => {
    const ratingStar = [];
    for (let i = 0; i < rateNumber; i++) {
        ratingStar.push(<FilledStar />);
    }
    for (let i = 0; i < 5 - rateNumber; i++) {
        ratingStar.push(<HollowStar />);
    }
    return (
        <>
            <div className={"flex flex-row flex-nowrap items-center justify-center gap-1"}>
                {ratingStar}
            </div>
        </>
    );
};

export default Rating;
