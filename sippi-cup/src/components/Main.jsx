import { useState } from "react";
import PodcastGrid from "../views/renderGrid";
import PodcastModal from "./PodcastsModal"
import LoadingSpinner from "../utilities/loadingSpinner";
import ErrorDisplay from "../utilities/loadingError";
import useFetchPodcasts from "../utilities/fetchPodcasts";

const Home = () => {
    const [podcastsUrl] = useState("https://podcast-api.netlify.app/shows");
  
    // Fetch all podcasts
    const { 
        data: allPodcasts, 
        isLoading, 
        error 
    } = useFetchPodcasts(podcastsUrl);

    // State for modal
    const [selectedPodcastId, setSelectedPodcast] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State for error display
    const [isErrorVisible, setIsErrorVisible] = useState(true);

    const handlePodcastSelect = (podcast) => {
        setSelectedPodcast(podcast);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedPodcast(null);
    };

    const handleDismissError = () => {
        setIsErrorVisible(false);
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }
    
    
    return (
        <div className="text-white px-12 py-6 flex  w-full gap-5">
            {/* Error Display */}
            {error && isErrorVisible && (
                <ErrorDisplay 
                message={`Failed to load podcasts: ${error}`} 
                onDismiss={handleDismissError} 
                />
            )}

            {/* Podcast Modal */}
            <PodcastModal 
                podcastId={selectedPodcastId}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                allPodcasts={allPodcasts}
            />
        
            <div className="w-full flex flex-col gap-8">
                {/* Render error or grid for all podcasts */}
                {error ? (
                    <div className="text-red-500 p-4 bg-red-100 bg-opacity-10 rounded">
                    Failed to load podcasts: {error}
                    </div>
                ) : (
                    <>
                    {/* Top Podcasts Section */}
                    <div>
                        <h2 className="font-bold text-2xl mb-4">All Podcasts</h2>
                        <PodcastGrid 
                            podcasts={allPodcasts} 
                            onPodcastSelect={handlePodcastSelect}
                        />
                    </div>
                    </>
                )}
            </div>
        </div>
        );
    };

export default Home;