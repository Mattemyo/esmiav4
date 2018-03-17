import React from 'react';
import { Transition } from 'react-move';



export default ({ items }) => (
    <div>
      <Transition
        data={items}
        getKey={(d) => d}
        update={(d) => ({
          translate: 0,
          opacity: 1
        })}
        enter={(d) => ({
          translate: -1,
          opacity: 0
        })}
        leave={(d) => ({
          translate: 1,
          opacity: 0
        })}
        stagger={200}
      >
        {(dataArray) => (
          <div>
            {dataArray.map((data) => (
              <div
                key={data.key}
                style={{
                  transform: `translate(${100 * data.state.translate}px, ${20 * data.key}px)`,
                  opacity: data.state.opacity
                }}
              >
                {data.key}
              </div>
            ))}
          </div>
        )}
      </Transition>
    </div>
  );
