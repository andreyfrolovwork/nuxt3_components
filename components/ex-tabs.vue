<template>
    <div class="p100">
        <ui-tabs :tabs="['Ипотека', 'Рассрочка', 'Материнский капитал', '100% оплата', 'Trade-in']">
            <template #t0>
                контент таб № 0
            </template>
            <template #t1>
                контент таб № 1
            </template>
            <template #t2>
                контент таб № 2
            </template>

            <template #t3>
                контент таб № 3
            </template>
            <template #t4>
                контент таб № 4
            </template>
            <template #t5>
                контент таб № 5
            </template>
        </ui-tabs>
    </div>
</template>
