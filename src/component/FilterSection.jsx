import React from 'react';
import styled from 'styled-components';
import { useGlobalFilter } from '../context/FilterContext';
import { FaCheck } from "react-icons/fa";
import FormatPrice from '../helpers/FormatPrice';

const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    updateFilter, all_products } = useGlobalFilter();

  const getUniqueData = (data, property) => {
    let newValue = data.map((curElm) => {
      return curElm[[property]]
    })

    if (property === "colors") {
      // return (
      //   newValue = ["all", ...new Set([].concat(...newValue))]
      // )
      newValue = newValue.flat()
    }
    return (
      newValue = ["all", ...new Set(newValue)]
    );

  }

  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");
  return (
    <Wrapper>
      <div className="filter-search">
        <form action="#" onSubmit={(e) => { e.preventDefault() }}>
          <input type="text" name='text' placeholder='search...' value={text} onChange={updateFilter} />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {
            categoryData.map((curElem, index) => {
              return (
                <button key={index}
                  type="button"
                  name='category'
                  value={curElem}
                  className={curElem === category ? "active" : ""}
                  onClick={updateFilter}>
                  {curElem}
                </button>
              )
            })
          }
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select name="company" id="company" className="filter-company--select" onClick={updateFilter}>
            {
              companyData.map((curElem, index) => {
                return (<option key={index} value={curElem} name="company">
                  {curElem}
                </option>)
              })
            }
          </select>
        </form>
      </div>

      <div className="filter-colors colors">
        <h3>Colors: </h3>
        <div className='filter-color-style'>
          {
            colorsData.map((curElem, index) => {
              if (curElem === "all") {
                return (
                  <button key={index}
                    onClick={updateFilter}
                    className="color-all--style"
                    type="button"
                    name='color'
                    value={curElem}>
                    all
                  </button>
                )
              }
              return (
                <button key={index}
                  type="button"
                  name='color'
                  onClick={updateFilter}
                  style={{ backgroundColor: curElem }}
                  className={color === curElem ? "btnStyle active" : "btnStyle"}
                  value={curElem}>
                  {color === curElem ? <FaCheck className="checkStyle" /> : null}
                </button>
              )
            })
          }
        </div>
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>

        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilter}
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
        }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    line-height: 0;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection