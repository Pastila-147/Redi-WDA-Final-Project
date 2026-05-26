import { useDogFiltersStore } from '../../stores/useDogFiltersStore';
import './DogSearchForm.css';

function DogSearchForm() {
    const filters = useDogFiltersStore((state) => state.filters);
    const setFilter = useDogFiltersStore((state) => state.setFilter);
    const resetFilters = useDogFiltersStore((state) => state.resetFilters);

    return (
        <div className="dog-filters">
            <label className="dog-filters__field">
                <span className="dog-filters__label">Energy</span>

                <select
                    className="dog-filters__select"
                    value={filters.energyLevel}
                    onChange={(event) =>
                        setFilter('energyLevel', event.target.value)
                    }
                >
                    <option value="all">All</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </label>

            <div className="dog-filters__checkboxes">
                <label className="dog-filters__checkbox-button">
                    <input
                        type="checkbox"
                        checked={filters.goodWithKids}
                        onChange={(event) =>
                            setFilter('goodWithKids', event.target.checked)
                        }
                    />
                    Good with kids
                </label>

                <label className="dog-filters__checkbox-button">
                    <input
                        type="checkbox"
                        checked={filters.canStayAlone}
                        onChange={(event) =>
                            setFilter('canStayAlone', event.target.checked)
                        }
                    />
                    Can stay alone
                </label>

                <label className="dog-filters__checkbox-button">
                    <input
                        type="checkbox"
                        checked={filters.specialNeeds}
                        onChange={(event) =>
                            setFilter('specialNeeds', event.target.checked)
                        }
                    />
                    Special needs
                </label>
            </div>


            <label className="dog-filters__field">
                <span className="dog-filters__label">Walks/day</span>

                <select
                    className="dog-filters__select"
                    value={filters.walksPerDay}
                    onChange={(event) =>
                        setFilter('walksPerDay', event.target.value)
                    }
                >
                    <option value="all">All</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4 or more">4</option>
                </select>
            </label>

            <label className="dog-filters__field">
                <span className="dog-filters__label">From</span>

                <input
                    className="dog-filters__input"
                    type="date"
                    value={filters.startDate}
                    onChange={(event) =>
                        setFilter('startDate', event.target.value)
                    }
                />
            </label>

            <label className="dog-filters__field">
                <span className="dog-filters__label">To</span>

                <input
                    className="dog-filters__input"
                    type="date"
                    value={filters.endDate}
                    onChange={(event) =>
                        setFilter('endDate', event.target.value)
                    }
                />
            </label>

            <button
                className="dog-filters__reset"
                type="button"
                onClick={resetFilters}
            >
                Reset filters
            </button>
    </div>
);
}

export default DogSearchForm;