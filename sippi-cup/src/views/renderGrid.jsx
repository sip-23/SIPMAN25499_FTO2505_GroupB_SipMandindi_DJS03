import PodcastCard from '../components/PodcastsCard';

const PodcastGrid = ({ podcasts, onPodcastSelect }) => {
  if (!podcasts || podcasts.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No podcasts found
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-[90%] md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">
      {podcasts.map(podcast => (
        <PodcastCard
          key={podcast.id}
          podcast={podcast}
          onPodcastSelect={onPodcastSelect}
        />
      ))}
    </div>
  );
};

export default PodcastGrid;