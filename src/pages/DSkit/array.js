/* eslint-disable max-len */
import React from 'react';
import BaseContainer from '../../components/BaseContainer';

function CreateALDocumentation() {
  return (
    <BaseContainer sx={{ backgroundColor: 'white', p: 2 }}>
      <div
        className="space-y-6"
        style={{
          backgroundColor: 'white',
        }}
      >
        <h1 className="text-2xl font-semibold">Array Class Documentation</h1>

        <section>
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <p>
            The <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">Array</code> class
            is a custom implementation of an array-like data structure in JavaScript. It provides similar functionality
            to native JavaScript arrays but stores data in an object with numeric keys.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Constructor</h2>
          <p>
            <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">
              new Array([initialValues])
            </code>
            <br />
            Creates a new instance of the custom array.
          </p>
          <p className="mt-4 font-semibold">Parameters:</p>
          <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
            <li>
              <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">initialValues</code>{' '}
              (optional): Can be one of:
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>An array of initial values</li>
                <li>A single non-array value</li>
                <li>If omitted, creates an empty array</li>
              </ul>
            </li>
          </ul>
          <p className="mt-4 font-semibold">Example:</p>
          <pre className="bg-gray-100 p-3 rounded text-sm font-mono overflow-x-auto">
            {`const emptyArray = new Array(); 
const singleItemArray = new Array(42); 
const multiItemArray = new Array([1, 2, 3]);`}
          </pre>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Properties</h2>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">length</code>: The
              number of elements in the array
            </li>
            <li>
              <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">data</code>: An object
              storing the array elements (internal use)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Methods</h2>

          <h3 className="text-lg font-semibold mt-4">Core Array Methods</h3>
          <dl className="ml-6 space-y-4">
            <div>
              <dt>
                <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">get(index)</code>
              </dt>
              <dd className="ml-4 mt-1">Returns the element at the specified index.</dd>
              <p className="ml-4 mt-1 font-semibold">Parameters:</p>
              <ul className="list-disc list-inside ml-10">
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">index</code>: The
                  position to retrieve
                </li>
              </ul>
              <p className="ml-4 mt-1 font-semibold">Returns:</p>
              <ul className="list-disc list-inside ml-10">
                <li>The element at the specified index or undefined if out of bounds</li>
              </ul>
            </div>

            <div>
              <dt>
                <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">push(item)</code>
              </dt>
              <dd className="ml-4 mt-1">Adds one or more elements to the end of the array.</dd>
              <p className="ml-4 mt-1 font-semibold">Parameters:</p>
              <ul className="list-disc list-inside ml-10">
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">item</code>: The
                  element to add
                </li>
              </ul>
              <p className="ml-4 mt-1 font-semibold">Returns:</p>
              <ul className="list-disc list-inside ml-10">
                <li>The new length of the array</li>
              </ul>
            </div>

            <div>
              <dt>
                <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">pop()</code>
              </dt>
              <dd className="ml-4 mt-1">Removes the last element from the array.</dd>
              <p className="ml-4 mt-1 font-semibold">Returns:</p>
              <ul className="list-disc list-inside ml-10">
                <li>The removed element or undefined if empty</li>
              </ul>
            </div>

            <div>
              <dt>
                <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">delete(index)</code>
              </dt>
              <dd className="ml-4 mt-1">Removes an element at the specified position.</dd>
              <p className="ml-4 mt-1 font-semibold">Parameters:</p>
              <ul className="list-disc list-inside ml-10">
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">index</code>: The
                  position to remove
                </li>
              </ul>
              <p className="ml-4 mt-1 font-semibold">Returns:</p>
              <ul className="list-disc list-inside ml-10">
                <li>The removed element or undefined if index is invalid</li>
              </ul>
            </div>

            <div>
              <dt>
                <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">
                  insert(index, item)
                </code>
              </dt>
              <dd className="ml-4 mt-1">Inserts an element at the specified position.</dd>
              <p className="ml-4 mt-1 font-semibold">Parameters:</p>
              <ul className="list-disc list-inside ml-10 space-y-1">
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">index</code>: The
                  position to insert at
                </li>
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">item</code>: The
                  element to insert
                </li>
              </ul>
              <p className="ml-4 mt-1 font-semibold">Returns:</p>
              <ul className="list-disc list-inside ml-10">
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">true</code> if
                  successful,{' '}
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">false</code> if
                  index is invalid
                </li>
              </ul>
            </div>
          </dl>

          <h3 className="text-lg font-semibold mt-6">Search Methods</h3>
          <dl className="ml-6 space-y-4">
            <div>
              <dt>
                <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">indexOf(item)</code>
              </dt>
              <dd className="ml-4 mt-1">Returns the first index at which a given element can be found.</dd>
              <p className="ml-4 mt-1 font-semibold">Parameters:</p>
              <ul className="list-disc list-inside ml-10">
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">item</code>: The
                  element to search for
                </li>
              </ul>
              <p className="ml-4 mt-1 font-semibold">Returns:</p>
              <ul className="list-disc list-inside ml-10">
                <li>The first index or -1 if not found</li>
              </ul>
            </div>

            <div>
              <dt>
                <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">
                  includes(item)
                </code>
              </dt>
              <dd className="ml-4 mt-1">Determines whether the array contains a certain element.</dd>
              <p className="ml-4 mt-1 font-semibold">Parameters:</p>
              <ul className="list-disc list-inside ml-10">
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">item</code>: The
                  element to search for
                </li>
              </ul>
              <p className="ml-4 mt-1 font-semibold">Returns:</p>
              <ul className="list-disc list-inside ml-10">
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">true</code> if
                  found,{' '}
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">false</code>{' '}
                  otherwise
                </li>
              </ul>
            </div>
          </dl>

          <h3 className="text-lg font-semibold mt-6">Transformation Methods</h3>
          <dl className="ml-6 space-y-4">
            <div>
              <dt>
                <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">toString()</code>
              </dt>
              <dd className="ml-4 mt-1">Creates a string representation of the array.</dd>
              <p className="ml-4 mt-1 font-semibold">Returns:</p>
              <ul className="list-disc list-inside ml-10">
                <li>A comma-separated string of elements</li>
              </ul>
            </div>

            <div>
              <dt>
                <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">
                  join([separator])
                </code>
              </dt>
              <dd className="ml-4 mt-1">Joins all elements into a string with specified separator.</dd>
              <p className="ml-4 mt-1 font-semibold">Parameters:</p>
              <ul className="list-disc list-inside ml-10">
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">separator</code>{' '}
                  (optional, default=',' ): The separator string
                </li>
              </ul>
              <p className="ml-4 mt-1 font-semibold">Returns:</p>
              <ul className="list-disc list-inside ml-10">
                <li>The joined string</li>
              </ul>
            </div>

            <div>
              <dt>
                <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">
                  slice([start[, end]])
                </code>
              </dt>
              <dd className="ml-4 mt-1">Returns a shallow copy of a portion of the array.</dd>
              <p className="ml-4 mt-1 font-semibold">Parameters:</p>
              <ul className="list-disc list-inside ml-10 space-y-1">
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">start</code>{' '}
                  (optional, default=0): Start index
                </li>
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">end</code>{' '}
                  (optional, default=length): End index (not included)
                </li>
              </ul>
              <p className="ml-4 mt-1 font-semibold">Returns:</p>
              <ul className="list-disc list-inside ml-10">
                <li>
                  New <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">Array</code>{' '}
                  instance with the extracted elements
                </li>
              </ul>
            </div>

            <div>
              <dt>
                <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">reverse()</code>
              </dt>
              <dd className="ml-4 mt-1">Reverses the array.</dd>
              <p className="ml-4 mt-1 font-semibold">Returns:</p>
              <ul className="list-disc list-inside ml-10">
                <li>
                  New <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">Array</code>{' '}
                  instance with elements reversed
                </li>
              </ul>
            </div>
          </dl>

          <h3 className="text-lg font-semibold mt-6">Functional Methods</h3>
          <dl className="ml-6 space-y-4">
            <div>
              <dt>
                <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">map(callback)</code>
              </dt>
              <dd className="ml-4 mt-1">Creates a new array with results of calling a function on every element.</dd>
              <p className="ml-4 mt-1 font-semibold">Parameters:</p>
              <ul className="list-disc list-inside ml-10">
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">callback</code>:
                  Function(currentValue, index, array)
                </li>
              </ul>
              <p className="ml-4 mt-1 font-semibold">Returns:</p>
              <ul className="list-disc list-inside ml-10">
                <li>
                  New <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">Array</code>{' '}
                  instance with transformed elements
                </li>
              </ul>
            </div>

            <div>
              <dt>
                <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">
                  filter(callback)
                </code>
              </dt>
              <dd className="ml-4 mt-1">Creates a new array with elements that pass a test.</dd>
              <p className="ml-4 mt-1 font-semibold">Parameters:</p>
              <ul className="list-disc list-inside ml-10">
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">callback</code>:
                  Function(currentValue, index, array)
                </li>
              </ul>
              <p className="ml-4 mt-1 font-semibold">Returns:</p>
              <ul className="list-disc list-inside ml-10">
                <li>
                  New <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">Array</code>{' '}
                  instance with filtered elements
                </li>
              </ul>
            </div>

            <div>
              <dt>
                <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">
                  reduce(callback[, initialValue])
                </code>
              </dt>
              <dd className="ml-4 mt-1">Reduces the array to a single value.</dd>
              <p className="ml-4 mt-1 font-semibold">Parameters:</p>
              <ul className="list-disc list-inside ml-10 space-y-1">
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">callback</code>:
                  Function(accumulator, currentValue, index, array)
                </li>
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">
                    initialValue
                  </code>{' '}
                  (optional): Initial accumulator value
                </li>
              </ul>
              <p className="ml-4 mt-1 font-semibold">Returns:</p>
              <ul className="list-disc list-inside ml-10">
                <li>The reduced value</li>
              </ul>
            </div>
          </dl>

          <h3 className="text-lg font-semibold mt-6">Sorting</h3>
          <dl className="ml-6 space-y-4">
            <div>
              <dt>
                <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">
                  sort([compareFunction])
                </code>
              </dt>
              <dd className="ml-4 mt-1">Sorts the elements of the array (using merge sort algorithm).</dd>
              <p className="ml-4 mt-1 font-semibold">Parameters:</p>
              <ul className="list-disc list-inside ml-10">
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">
                    compareFunction
                  </code>{' '}
                  (optional): Function(a, b) that defines sort order
                </li>
                <li>
                  Default:{' '}
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">
                    (a, b) =&gt; (a &gt; b ? 1 : -1)
                  </code>
                </li>
              </ul>
              <p className="ml-4 mt-1 font-semibold">Returns:</p>
              <ul className="list-disc list-inside ml-10">
                <li>The sorted array (modifies original array)</li>
              </ul>
            </div>
          </dl>

          <h3 className="text-lg font-semibold mt-6">Utility Methods</h3>
          <dl className="ml-6 space-y-4">
            <div>
              <dt>
                <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">
                  print([separator[, prefix[, suffix]]])
                </code>
              </dt>
              <dd className="ml-4 mt-1">Prints the array with custom formatting.</dd>
              <p className="ml-4 mt-1 font-semibold">Parameters:</p>
              <ul className="list-disc list-inside ml-10 space-y-1">
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">separator</code>{' '}
                  (optional, default=', '): Element separator
                </li>
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">prefix</code>{' '}
                  (optional, default='['): String before elements
                </li>
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">suffix</code>{' '}
                  (optional, default=']'): String after elements
                </li>
              </ul>
              <p className="ml-4 mt-1 font-semibold">Returns:</p>
              <ul className="list-disc list-inside ml-10">
                <li>The array instance (for chaining)</li>
              </ul>
            </div>
          </dl>

          <h3 className="text-lg font-semibold mt-6">Internal Methods</h3>
          <dl className="ml-6 space-y-4">
            <div>
              <dt>
                <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">
                  _shiftItems(index, [isInsert])
                </code>
              </dt>
              <dd className="ml-4 mt-1">Shifts elements left or right for insert/delete operations.</dd>
              <p className="ml-4 mt-1 font-semibold">Parameters:</p>
              <ul className="list-disc list-inside ml-10 space-y-1">
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">index</code>: The
                  position to start shifting
                </li>
                <li>
                  <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">isInsert</code>{' '}
                  (optional, default=false): If true, shifts right for insert
                </li>
              </ul>
            </div>

            <div>
              <dt>
                <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">
                  _merge(left, right, compareFunction)
                </code>
              </dt>
              <dd className="ml-4 mt-1">Merges two sorted arrays (used by sort).</dd>
            </div>
          </dl>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8">Notes</h2>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>
              This implementation provides similar functionality to JavaScript arrays but with different performance
              characteristics
            </li>
            <li>Some methods (like sort) are implemented with different algorithms than native arrays</li>
            <li>
              The class name{' '}
              <code className="bg-gray-200 text-gray-800 text-xs font-mono px-1 py-[2px] rounded">Array</code> suggests
              it might be an internal/private implementation
            </li>
          </ul>
        </section>
      </div>
    </BaseContainer>
  );
}

export default CreateALDocumentation;
