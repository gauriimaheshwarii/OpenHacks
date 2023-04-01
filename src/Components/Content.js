import './content.css';

const Content = () => {
    return (
        <>
            <div className="content-container">
                <div className='content-child-container' style={{ zIndex: 1 }}>
                    <div className='content-child-container-description'>
                        <h3>Reduce</h3>
                        <p> The first principle, "reduce", involves minimizing the amount of waste that is generated in the first place. In the context of the organization, this could involve encouraging customers to reduce their consumption of disposable items and instead opt for reusable alternatives. By reducing the amount of waste generated, we can reduce the amount of resources needed to manage that waste.</p>
                    </div>
                    <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_sutijjlc.json" background="transparent" speed="1" style={{ width: 540, height: 540 }} loop autoplay></lottie-player>
                </div>
                <div className='content-child-container' style={{ zIndex: 2, flexDirection: "row-reverse" }}>
                    <div className='content-child-container-description'>
                        <h3>Reuse</h3>
                        <p> The second principle, "reuse", involves finding ways to use items again rather than throwing them away after one use. In the context of the organization, this could involve encouraging customers to bring in items that can be reused or repurposed instead of being thrown away. For example, old clothing could be donated to be upcycled into new products, or glass bottles could be reused for storing other items.</p>
                    </div>
                    <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_wn5uk5o4.json" background="transparent" speed="1" style={{ width: 540, height: 540 }} loop autoplay></lottie-player>
                </div>
                <div className='content-child-container' style={{ zIndex: 4 }}>
                    <div className='content-child-container-description'>
                        <h3>Recycle</h3>
                        <p> The third principle, "recycle", involves converting waste into new products. In the context of the organization, this involves taking in recyclable items and processing them into new products that can be sold in the store. By recycling these items, we can reduce the amount of waste that ends up in landfills and conserve natural resources that would otherwise be used to create new products.</p>
                    </div>
                    <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_qaemdbel.json" background="transparent" speed="1" style={{ width: 540, height: 540 }} loop autoplay></lottie-player>
                </div>
            </div>
        </>
    )
}

export default Content;
