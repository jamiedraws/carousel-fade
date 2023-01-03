// components
import FadeCarousel from "Shared/ts/components/fade-carousel";

// adapters
import FadeSlideCarouselAdapter from "Shared/ts/api/carousel/slide/adapters/fade-slide-carousel";

// observers
import { observer } from "Shared/ts/observers/intersection";

observer(".slide--fade", {
    inRange: (element) => {
        const carousel = new FadeCarousel(
            new FadeSlideCarouselAdapter(element)
        );

        carousel.enablePrevNextControls();
    }
});
