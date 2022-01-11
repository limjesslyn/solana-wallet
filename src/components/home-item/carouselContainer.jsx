import { TransitionGroup } from "react-transition-group"

const CarouselContainer = (props) => {
    return (
        <div id="carousel" className="z-0">
            <div className="flex justify-center">
                {props.children}
            </div>
        </div>

    )
}
export default CarouselContainer