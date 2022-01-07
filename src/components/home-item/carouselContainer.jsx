import { TransitionGroup } from "react-transition-group"

const CarouselContainer = (props) => {
    return (
        <div id="carousel" className="z-0">
            <TransitionGroup className="flex justify-center">
                {props.children}
            </TransitionGroup>
        </div>

    )
}
export default CarouselContainer