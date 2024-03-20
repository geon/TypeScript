type NonNullableObj<T> = { readonly [K in keyof T]: NonNullable<T[K]> };

interface ObjectConstructor {
    /**
     * Groups members of an iterable according to the return value of the passed callback.
     * @param items An iterable.
     * @param keySelector A callback which will be invoked for each item in items.
     */
    groupBy<K extends PropertyKey, T>(
        items: Iterable<T>,
        keySelector: (item: T, index: number) => K,
    ): NonNullableObj<Partial<Record<K, T[]>>>;
}
