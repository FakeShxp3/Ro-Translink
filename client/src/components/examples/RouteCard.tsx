import RouteCard from '../RouteCard';

export default function RouteCardExample() {
  return (
    <div className="p-8 max-w-2xl">
      <RouteCard
        routeNumber="R4"
        routeName="RapidBus - 41st Avenue"
        description="UBC to Joyce Station via 41st Avenue"
        frequency="3-15 min"
        stops={17}
        distance="19.1 km"
        type="bus"
      />
    </div>
  );
}
