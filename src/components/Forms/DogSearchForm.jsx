import { useDogFiltersStore } from '../../stores/useDogFiltersStore';
import './DogSearchForm.css';

function DogSearchForm() {
    const filters = useDogFiltersStore((state) => state.filters);
    const setFilter = useDogFiltersStore((state) => state.setFilter);
    const resetFilters = useDogFiltersStore((state) => state.resetFilters);

    return (
        <div className="dog-filters">
            <label> Energy level:
                <select value={filters.energyLevel}
                    onChange={(event) =>
                    setFilter('energyLevel', event.target.value)}>

                    <option value="all">All</option>
                    <option value="high">High</option>
                    <option value="low">Low</option>
                </select>
            </label>

            <label> Good with kids
                <input type="checkbox"
                    checked={filters.goodWithKids}
                    onChange={(event) =>
                        setFilter('goodWithKids', event.target.checked)}/>
            </label>

            <label> Can stay alone
                <input type="checkbox" checked={filters.canStayAlone}
                    onChange={(event) =>
                        setFilter('canStayAlone', event.target.checked)}/>
            </label>

            <label> Special needs
                <input type="checkbox"
                    checked={filters.specialNeeds}
                    onChange={(event) =>
                      setFilter('specialNeeds', event.target.checked)}/>
            </label>

            <label> Walks per day:
                <select value={filters.walksPerDay}
                    onChange={(event) =>
                        setFilter('walksPerDay', event.target.value)}>

                    <option value="all">All</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </label>

            <label> Start date:
                <input type="date"
                    value={filters.startDate}
                    onChange={(event) =>
                        setFilter('startDate', event.target.value)}/>
            </label>

            <label>
                End date:
                <input type="date"
                    value={filters.endDate}
                    onChange={(event) =>
                        setFilter('endDate', event.target.value)}/>
            </label>

            <button type="button" onClick={resetFilters}>
                Reset filters
            </button>
    </div>
);
}

export default DogSearchForm;