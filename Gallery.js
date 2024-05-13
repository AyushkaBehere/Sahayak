import React from 'react';

const Gallery = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="bg-gray-200 pt-20">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Anubhuti Vision Seva Sansthan, Indore, Madhya Pradesh, 452010</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> Where innovation meets compassion to create a brighter, more inclusive future for individuals with disabilities.
                            At Sahayak, we believe that everyone deserves the opportunity to communicate, learn, and thrive, regardless of physical or cognitive challenges.
                            With our pioneering hardware and software solutions, we're on a mission to revolutionize accessibility and empowerment for all.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/2 sm:w-1/3 p-4">
                            <div className="flex relative h-80">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/>
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 sm:w-1/2 p-4">
                            <div className="flex relative h-80">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361"/>
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                        {/* Add more gallery items here */}
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/2 sm:w-1/2 p-4">
                            <div className="flex relative h-80">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/>
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 sm:w-1/2 p-4">
                            <div className="flex relative h-80">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361"/>
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                        {/* Add more gallery items here */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery;

