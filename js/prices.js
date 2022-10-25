const nettoCalculation = () => {
    let priceNetto = 0;
    if (roofing.value == 0) {
        if (inverter_phase.value == 1) {
            if (calculated_power.value <= 2.250) {
                priceNetto = calculated_power.value * 4730
            }
            else if (calculated_power.value <= 2.625) {
                priceNetto = calculated_power.value * 4414
            }
            else if (calculated_power.value <= 3) {
                priceNetto = calculated_power.value * 4244
            }
            else if (calculated_power.value <= 3.375) {
                priceNetto = calculated_power.value * 3953
            }
            else if (calculated_power.value <= 3.750) {
                priceNetto = calculated_power.value * 3949
            }
        }
        if (inverter_phase.value == 3) {
            if (calculated_power.value <= 3.000) {
                priceNetto = calculated_power.value * 4713
            }
            else if (calculated_power.value <= 3.375) {
                priceNetto = calculated_power.value * 4202
            }
            else if (calculated_power.value <= 3.750) {
                priceNetto = calculated_power.value * 4106
            }
            else if (calculated_power.value <= 4.125) {
                priceNetto = calculated_power.value * 4001
            }
            else if (calculated_power.value <= 4.500) {
                priceNetto = calculated_power.value * 3914
            }
            else if (calculated_power.value <= 4.875) {
                priceNetto = calculated_power.value * 3876
            }
            else if (calculated_power.value <= 5.250) {
                priceNetto = calculated_power.value * 3811
            }
            else if (calculated_power.value <= 5.625) {
                priceNetto = calculated_power.value * 3753
            }
            else if (calculated_power.value <= 6.000) {
                priceNetto = calculated_power.value * 3703
            }
            else if (calculated_power.value <= 6.375) {
                priceNetto = calculated_power.value * 3705
            }
            else if (calculated_power.value <= 6.750) {
                priceNetto = calculated_power.value * 3752
            }
            else if (calculated_power.value <= 7.125) {
                priceNetto = calculated_power.value * 3710
            }
            else if (calculated_power.value <= 7.500) {
                priceNetto = calculated_power.value * 3705
            }
            else if (calculated_power.value <= 7.875) {
                priceNetto = calculated_power.value * 3669
            }
            else if (calculated_power.value <= 8.250) {
                priceNetto = calculated_power.value * 3637
            }
            else if (calculated_power.value <= 8.625) {
                priceNetto = calculated_power.value * 3607
            }
            else if (calculated_power.value <= 9.000) {
                priceNetto = calculated_power.value * 3580
            }
            else if (calculated_power.value <= 9.375) {
                priceNetto = calculated_power.value * 3555
            }
            else if (calculated_power.value <= 9.750) {
                priceNetto = calculated_power.value * 3590
            }
            else if (calculated_power.value <= 10.125) {
                priceNetto = calculated_power.value * 3509
            }
            else if (calculated_power.value <= 10.500) {
                priceNetto = calculated_power.value * 3435
            }
            else if (calculated_power.value <= 10.875) {
                priceNetto = calculated_power.value * 3364
            }
            else if (calculated_power.value <= 11.250) {
                priceNetto = calculated_power.value * 3299
            }
            else if (calculated_power.value <= 11.625) {
                priceNetto = calculated_power.value * 3240
            }
            else if (calculated_power.value <= 12.000) {
                priceNetto = calculated_power.value * 3290
            }
            else if (calculated_power.value <= 12.375) {
                priceNetto = calculated_power.value * 3272
            }
            else if (calculated_power.value <= 12.750) {
                priceNetto = calculated_power.value * 3255
            }
            else if (calculated_power.value <= 13.125) {
                priceNetto = calculated_power.value * 3240
            }
            else if (calculated_power.value <= 13.500) {
                priceNetto = calculated_power.value * 3225
            }
            else if (calculated_power.value <= 13.875) {
                priceNetto = calculated_power.value * 3211
            }
            else if (calculated_power.value <= 14.250) {
                priceNetto = calculated_power.value * 3198
            }
            else if (calculated_power.value <= 14.625) {
                priceNetto = calculated_power.value * 3185
            }
            else if (calculated_power.value <= 15.000) {
                priceNetto = calculated_power.value * 3201
            }
            else if (calculated_power.value <= 15.375) {
                priceNetto = calculated_power.value * 3189
            }
            else if (calculated_power.value <= 15.750) {
                priceNetto = calculated_power.value * 3177
            }
            else if (calculated_power.value <= 16.125) {
                priceNetto = calculated_power.value * 3166
            }
            else if (calculated_power.value <= 16.500) {
                priceNetto = calculated_power.value * 3156
            }
            else if (calculated_power.value <= 16.875) {
                priceNetto = calculated_power.value * 3146
            }
            else if (calculated_power.value <= 17.250) {
                priceNetto = calculated_power.value * 3197
            }
            else if (calculated_power.value <= 17.625) {
                priceNetto = calculated_power.value * 3186
            }
            else if (calculated_power.value <= 18.000) {
                priceNetto = calculated_power.value * 3176
            }
            else if (calculated_power.value <= 18.375) {
                priceNetto = calculated_power.value * 3167
            }
            else if (calculated_power.value <= 18.750) {
                priceNetto = calculated_power.value * 3158
            }
            else if (calculated_power.value <= 19.125) {
                priceNetto = calculated_power.value * 3149
            }
            else if (calculated_power.value <= 19.500) {
                priceNetto = calculated_power.value * 3140
            }
            else if (calculated_power.value <= 19.875) {
                priceNetto = calculated_power.value * 3151
            }
            else if (calculated_power.value <= 20.250) {
                priceNetto = calculated_power.value * 3142
            }
            else if (calculated_power.value <= 20.625) {
                priceNetto = calculated_power.value * 3134
            }
            else if (calculated_power.value <= 21.000) {
                priceNetto = calculated_power.value * 3127
            }
            else if (calculated_power.value <= 21.375) {
                priceNetto = calculated_power.value * 3119
            }
            else if (calculated_power.value <= 21.750) {
                priceNetto = calculated_power.value * 3112
            }
            else if (calculated_power.value <= 22.125) {
                priceNetto = calculated_power.value * 3105
            }
            else if (calculated_power.value <= 22.500) {
                priceNetto = calculated_power.value * 3099
            }
            else if (calculated_power.value <= 22.875) {
                priceNetto = calculated_power.value * 3092
            }
            else if (calculated_power.value <= 23.250) {
                priceNetto = calculated_power.value * 3086
            }
            else if (calculated_power.value <= 23.625) {
                priceNetto = calculated_power.value * 3080
            }
            else if (calculated_power.value <= 24.000) {
                priceNetto = calculated_power.value * 3074
            }
            else if (calculated_power.value <= 24.375) {
                priceNetto = calculated_power.value * 3110
            }
            else if (calculated_power.value <= 24.750) {
                priceNetto = calculated_power.value * 3104
            }
            else if (calculated_power.value <= 25.125) {
                priceNetto = calculated_power.value * 3098
            }
            else if (calculated_power.value <= 25.500) {
                priceNetto = calculated_power.value * 3092
            }
            else if (calculated_power.value <= 25.875) {
                priceNetto = calculated_power.value * 3086
            }
            else if (calculated_power.value <= 26.250) {
                priceNetto = calculated_power.value * 3081
            }
            else if (calculated_power.value <= 26.625) {
                priceNetto = calculated_power.value * 3076
            }
            else if (calculated_power.value <= 27.000) {
                priceNetto = calculated_power.value * 3071
            }
            else if (calculated_power.value <= 27.375) {
                priceNetto = calculated_power.value * 3066
            }
            else if (calculated_power.value <= 27.750) {
                priceNetto = calculated_power.value * 3061
            }
            else if (calculated_power.value <= 28.125) {
                priceNetto = calculated_power.value * 3056
            }
            else if (calculated_power.value <= 28.500) {
                priceNetto = calculated_power.value * 3051
            }
            else if (calculated_power.value <= 28.875) {
                priceNetto = calculated_power.value * 3047
            }
            else if (calculated_power.value <= 29.250) {
                priceNetto = calculated_power.value * 3043
            }
            else if (calculated_power.value <= 29.625) {
                priceNetto = calculated_power.value * 3051
            }
            else if (calculated_power.value <= 30.000) {
                priceNetto = calculated_power.value * 3046
            }
            else if (calculated_power.value <= 30.375) {
                priceNetto = calculated_power.value * 3042
            }
            else if (calculated_power.value <= 30.750) {
                priceNetto = calculated_power.value * 2940
            }
            else if (calculated_power.value <= 31.125) {
                priceNetto = calculated_power.value * 2936
            }
            else if (calculated_power.value <= 31.500) {
                priceNetto = calculated_power.value * 2932
            }
            else if (calculated_power.value <= 31.875) {
                priceNetto = calculated_power.value * 2928
            }
            else if (calculated_power.value <= 32.250) {
                priceNetto = calculated_power.value * 2924
            }
            else if (calculated_power.value <= 32.625) {
                priceNetto = calculated_power.value * 2921
            }
            else if (calculated_power.value <= 33.000) {
                priceNetto = calculated_power.value * 2917
            }
            else if (calculated_power.value <= 33.375) {
                priceNetto = calculated_power.value * 2914
            }
            else if (calculated_power.value <= 33.750) {
                priceNetto = calculated_power.value * 2910
            }
            else if (calculated_power.value <= 34.125) {
                priceNetto = calculated_power.value * 2907
            }
            else if (calculated_power.value <= 34.500) {
                priceNetto = calculated_power.value * 2904
            }
            else if (calculated_power.value <= 34.875) {
                priceNetto = calculated_power.value * 2900
            }
            else if (calculated_power.value <= 35.250) {
                priceNetto = calculated_power.value * 2897
            }
            else if (calculated_power.value <= 35.625) {
                priceNetto = calculated_power.value * 2922
            }
            else if (calculated_power.value <= 36.000) {
                priceNetto = calculated_power.value * 2919
            }
            else if (calculated_power.value <= 36.375) {
                priceNetto = calculated_power.value * 2916
            }
            else if (calculated_power.value <= 36.750) {
                priceNetto = calculated_power.value * 2913
            }
            else if (calculated_power.value <= 37.125) {
                priceNetto = calculated_power.value * 2910
            }
            else if (calculated_power.value <= 37.500) {
                priceNetto = calculated_power.value * 2907
            }
            else if (calculated_power.value <= 37.875) {
                priceNetto = calculated_power.value * 2904
            }
            else if (calculated_power.value <= 38.250) {
                priceNetto = calculated_power.value * 2901
            }
            else if (calculated_power.value <= 38.625) {
                priceNetto = calculated_power.value * 2898
            }
            else if (calculated_power.value <= 39.000) {
                priceNetto = calculated_power.value * 2895
            }
            else if (calculated_power.value <= 39.375) {
                priceNetto = calculated_power.value * 2892
            }
            else if (calculated_power.value <= 39.750) {
                priceNetto = calculated_power.value * 2901
            }
            else if (calculated_power.value <= 40.125) {
                priceNetto = calculated_power.value * 2899
            }
            else if (calculated_power.value <= 40.500) {
                priceNetto = calculated_power.value * 2896
            }
            else if (calculated_power.value <= 40.875) {
                priceNetto = calculated_power.value * 2893
            }
            else if (calculated_power.value <= 41.250) {
                priceNetto = calculated_power.value * 2891
            }
            else if (calculated_power.value <= 41.625) {
                priceNetto = calculated_power.value * 2888
            }
            else if (calculated_power.value <= 42.000) {
                priceNetto = calculated_power.value * 2886
            }
            else if (calculated_power.value <= 42.375) {
                priceNetto = calculated_power.value * 2883
            }
            else if (calculated_power.value <= 42.750) {
                priceNetto = calculated_power.value * 2881
            }
            else if (calculated_power.value <= 43.125) {
                priceNetto = calculated_power.value * 2878
            }
            else if (calculated_power.value <= 43.500) {
                priceNetto = calculated_power.value * 2876
            }
            else if (calculated_power.value <= 43.875) {
                priceNetto = calculated_power.value * 2874
            }
            else if (calculated_power.value <= 44.250) {
                priceNetto = calculated_power.value * 2872
            }
            else if (calculated_power.value <= 44.625) {
                priceNetto = calculated_power.value * 2869
            }
            else if (calculated_power.value <= 45.000) {
                priceNetto = calculated_power.value * 2867
            }
            else if (calculated_power.value <= 45.375) {
                priceNetto = calculated_power.value * 2865
            }
            else if (calculated_power.value <= 45.750) {
                priceNetto = calculated_power.value * 2892
            }
            else if (calculated_power.value <= 46.125) {
                priceNetto = calculated_power.value * 2890
            }
            else if (calculated_power.value <= 46.500) {
                priceNetto = calculated_power.value * 2888
            }
            else if (calculated_power.value <= 46.875) {
                priceNetto = calculated_power.value * 2886
            }
            else if (calculated_power.value <= 47.250) {
                priceNetto = calculated_power.value * 2883
            }
            else if (calculated_power.value <= 47.625) {
                priceNetto = calculated_power.value * 2881
            }
            else if (calculated_power.value <= 48.000) {
                priceNetto = calculated_power.value * 2879
            }
            else if (calculated_power.value <= 48.375) {
                priceNetto = calculated_power.value * 2877
            }
            else if (calculated_power.value <= 48.750) {
                priceNetto = calculated_power.value * 2875
            }
            else if (calculated_power.value <= 49.125) {
                priceNetto = calculated_power.value * 2873
            }
            else if (calculated_power.value <= 49.500) {
                priceNetto = calculated_power.value * 2871
            }
            else if (calculated_power.value > 49.5) {
                const diff = calculated_power.value - 49.5;
                const moc_w_kWp = diff * 1000;
                const panels = Math.ceil(moc_w_kWp / panel_type.value);
                const maxValue = 49.5;
                const maxCost = maxValue * 2871;
                const addedCost = panels * 1400;
                priceNetto = maxCost + addedCost;
            }

        }
    }
    if (roofing.value == 1) {
        if (inverter_phase.value == 1) {
            if (calculated_power.value <= 2.25) {
                priceNetto = calculated_power.value * 4863
            }
            else if (calculated_power.value <= 2.625) {
                priceNetto = calculated_power.value * 4548
            }
            else if (calculated_power.value <= 3.00) {
                priceNetto = calculated_power.value * 4377
            }
            else if (calculated_power.value <= 3.375) {
                priceNetto = calculated_power.value * 4086
            }
            else if (calculated_power.value <= 3.75) {
                priceNetto = calculated_power.value * 4082
            }
        }
        if (inverter_phase.value == 3) {
            if (calculated_power.value <= 3.00) {
                priceNetto = calculated_power.value * 4847
            }
            else if (calculated_power.value <= 3.000) {
                priceNetto = calculated_power.value * 4847
            }
            else if (calculated_power.value <= 3.375) {
                priceNetto = calculated_power.value * 4335
            }
            else if (calculated_power.value <= 3.750) {
                priceNetto = calculated_power.value * 4239
            }
            else if (calculated_power.value <= 4.125) {
                priceNetto = calculated_power.value * 4134
            }
            else if (calculated_power.value <= 4.500) {
                priceNetto = calculated_power.value * 4047
            }
            else if (calculated_power.value <= 4.875) {
                priceNetto = calculated_power.value * 4010
            }
            else if (calculated_power.value <= 5.250) {
                priceNetto = calculated_power.value * 3944
            }
            else if (calculated_power.value <= 5.625) {
                priceNetto = calculated_power.value * 3887
            }
            else if (calculated_power.value <= 6.000) {
                priceNetto = calculated_power.value * 3837
            }
            else if (calculated_power.value <= 6.375) {
                priceNetto = calculated_power.value * 3839
            }
            else if (calculated_power.value <= 6.750) {
                priceNetto = calculated_power.value * 3886
            }
            else if (calculated_power.value <= 7.125) {
                priceNetto = calculated_power.value * 3844
            }
            else if (calculated_power.value <= 7.500) {
                priceNetto = calculated_power.value * 3838
            }
            else if (calculated_power.value <= 7.875) {
                priceNetto = calculated_power.value * 3803
            }
            else if (calculated_power.value <= 8.250) {
                priceNetto = calculated_power.value * 3770
            }
            else if (calculated_power.value <= 8.625) {
                priceNetto = calculated_power.value * 3740
            }
            else if (calculated_power.value <= 9.000) {
                priceNetto = calculated_power.value * 3713
            }
            else if (calculated_power.value <= 9.375) {
                priceNetto = calculated_power.value * 3688
            }
            else if (calculated_power.value <= 9.750) {
                priceNetto = calculated_power.value * 3723
            }
            else if (calculated_power.value <= 10.125) {
                priceNetto = calculated_power.value * 3639
            }
            else if (calculated_power.value <= 10.500) {
                priceNetto = calculated_power.value * 3561
            }
            else if (calculated_power.value <= 10.875) {
                priceNetto = calculated_power.value * 3484
            }
            else if (calculated_power.value <= 11.250) {
                priceNetto = calculated_power.value * 3420
            }
            else if (calculated_power.value <= 11.625) {
                priceNetto = calculated_power.value * 3374
            }
            else if (calculated_power.value <= 12.000) {
                priceNetto = calculated_power.value * 3423
            }
            else if (calculated_power.value <= 12.375) {
                priceNetto = calculated_power.value * 3405
            }
            else if (calculated_power.value <= 12.750) {
                priceNetto = calculated_power.value * 3389
            }
            else if (calculated_power.value <= 13.125) {
                priceNetto = calculated_power.value * 3373
            }
            else if (calculated_power.value <= 13.500) {
                priceNetto = calculated_power.value * 3358
            }
            else if (calculated_power.value <= 13.875) {
                priceNetto = calculated_power.value * 3344
            }
            else if (calculated_power.value <= 14.250) {
                priceNetto = calculated_power.value * 3331
            }
            else if (calculated_power.value <= 14.625) {
                priceNetto = calculated_power.value * 3318
            }
            else if (calculated_power.value <= 15.000) {
                priceNetto = calculated_power.value * 3334
            }
            else if (calculated_power.value <= 15.375) {
                priceNetto = calculated_power.value * 3322
            }
            else if (calculated_power.value <= 15.750) {
                priceNetto = calculated_power.value * 3310
            }
            else if (calculated_power.value <= 16.125) {
                priceNetto = calculated_power.value * 3300
            }
            else if (calculated_power.value <= 16.500) {
                priceNetto = calculated_power.value * 3289
            }
            else if (calculated_power.value <= 16.875) {
                priceNetto = calculated_power.value * 3279
            }
            else if (calculated_power.value <= 17.250) {
                priceNetto = calculated_power.value * 3330
            }
            else if (calculated_power.value <= 17.625) {
                priceNetto = calculated_power.value * 3320
            }
            else if (calculated_power.value <= 18.000) {
                priceNetto = calculated_power.value * 3310
            }
            else if (calculated_power.value <= 18.375) {
                priceNetto = calculated_power.value * 3300
            }
            else if (calculated_power.value <= 18.750) {
                priceNetto = calculated_power.value * 3291
            }
            else if (calculated_power.value <= 19.125) {
                priceNetto = calculated_power.value * 3282
            }
            else if (calculated_power.value <= 19.500) {
                priceNetto = calculated_power.value * 3274
            }
            else if (calculated_power.value <= 19.875) {
                priceNetto = calculated_power.value * 3284
            }
            else if (calculated_power.value <= 20.250) {
                priceNetto = calculated_power.value * 3276
            }
            else if (calculated_power.value <= 20.625) {
                priceNetto = calculated_power.value * 3268
            }
            else if (calculated_power.value <= 21.000) {
                priceNetto = calculated_power.value * 3260
            }
            else if (calculated_power.value <= 21.375) {
                priceNetto = calculated_power.value * 3253
            }
            else if (calculated_power.value <= 21.750) {
                priceNetto = calculated_power.value * 3246
            }
            else if (calculated_power.value <= 22.125) {
                priceNetto = calculated_power.value * 3239
            }
            else if (calculated_power.value <= 22.500) {
                priceNetto = calculated_power.value * 3232
            }
            else if (calculated_power.value <= 22.875) {
                priceNetto = calculated_power.value * 3226
            }
            else if (calculated_power.value <= 23.250) {
                priceNetto = calculated_power.value * 3220
            }
            else if (calculated_power.value <= 23.625) {
                priceNetto = calculated_power.value * 3214
            }
            else if (calculated_power.value <= 24.000) {
                priceNetto = calculated_power.value * 3208
            }
            else if (calculated_power.value <= 24.375) {
                priceNetto = calculated_power.value * 3243
            }
            else if (calculated_power.value <= 24.750) {
                priceNetto = calculated_power.value * 3237
            }
            else if (calculated_power.value <= 25.125) {
                priceNetto = calculated_power.value * 3231
            }
            else if (calculated_power.value <= 25.500) {
                priceNetto = calculated_power.value * 3225
            }
            else if (calculated_power.value <= 25.875) {
                priceNetto = calculated_power.value * 3220
            }
            else if (calculated_power.value <= 26.250) {
                priceNetto = calculated_power.value * 3214
            }
            else if (calculated_power.value <= 26.625) {
                priceNetto = calculated_power.value * 3209
            }
            else if (calculated_power.value <= 27.000) {
                priceNetto = calculated_power.value * 3204
            }
            else if (calculated_power.value <= 27.375) {
                priceNetto = calculated_power.value * 3199
            }
            else if (calculated_power.value <= 27.750) {
                priceNetto = calculated_power.value * 3194
            }
            else if (calculated_power.value <= 28.125) {
                priceNetto = calculated_power.value * 3189
            }
            else if (calculated_power.value <= 28.500) {
                priceNetto = calculated_power.value * 3185
            }
            else if (calculated_power.value <= 28.875) {
                priceNetto = calculated_power.value * 3180
            }
            else if (calculated_power.value <= 29.250) {
                priceNetto = calculated_power.value * 3176
            }
            else if (calculated_power.value <= 29.625) {
                priceNetto = calculated_power.value * 3184
            }
            else if (calculated_power.value <= 30.000) {
                priceNetto = calculated_power.value * 3180
            }
            else if (calculated_power.value <= 30.375) {
                priceNetto = calculated_power.value * 3176
            }
            else if (calculated_power.value <= 30.750) {
                priceNetto = calculated_power.value * 3073
            }
            else if (calculated_power.value <= 31.125) {
                priceNetto = calculated_power.value * 3069
            }
            else if (calculated_power.value <= 31.500) {
                priceNetto = calculated_power.value * 3065
            }
            else if (calculated_power.value <= 31.875) {
                priceNetto = calculated_power.value * 3061
            }
            else if (calculated_power.value <= 32.250) {
                priceNetto = calculated_power.value * 3057
            }
            else if (calculated_power.value <= 32.625) {
                priceNetto = calculated_power.value * 3054
            }
            else if (calculated_power.value <= 33.000) {
                priceNetto = calculated_power.value * 3050
            }
            else if (calculated_power.value <= 33.375) {
                priceNetto = calculated_power.value * 3047
            }
            else if (calculated_power.value <= 33.750) {
                priceNetto = calculated_power.value * 3043
            }
            else if (calculated_power.value <= 34.125) {
                priceNetto = calculated_power.value * 3040
            }
            else if (calculated_power.value <= 34.500) {
                priceNetto = calculated_power.value * 3037
            }
            else if (calculated_power.value <= 34.875) {
                priceNetto = calculated_power.value * 3034
            }
            else if (calculated_power.value <= 35.250) {
                priceNetto = calculated_power.value * 3031
            }
            else if (calculated_power.value <= 35.625) {
                priceNetto = calculated_power.value * 3056
            }
            else if (calculated_power.value <= 36.000) {
                priceNetto = calculated_power.value * 3052
            }
            else if (calculated_power.value <= 36.375) {
                priceNetto = calculated_power.value * 3049
            }
            else if (calculated_power.value <= 36.750) {
                priceNetto = calculated_power.value * 3046
            }
            else if (calculated_power.value <= 37.125) {
                priceNetto = calculated_power.value * 3043
            }
            else if (calculated_power.value <= 37.500) {
                priceNetto = calculated_power.value * 3040
            }
            else if (calculated_power.value <= 37.875) {
                priceNetto = calculated_power.value * 3037
            }
            else if (calculated_power.value <= 38.250) {
                priceNetto = calculated_power.value * 3034
            }
            else if (calculated_power.value <= 38.625) {
                priceNetto = calculated_power.value * 3031
            }
            else if (calculated_power.value <= 39.000) {
                priceNetto = calculated_power.value * 3028
            }
            else if (calculated_power.value <= 39.375) {
                priceNetto = calculated_power.value * 3026
            }
            else if (calculated_power.value <= 39.750) {
                priceNetto = calculated_power.value * 3035
            }
            else if (calculated_power.value <= 40.125) {
                priceNetto = calculated_power.value * 3032
            }
            else if (calculated_power.value <= 40.500) {
                priceNetto = calculated_power.value * 3029
            }
            else if (calculated_power.value <= 40.875) {
                priceNetto = calculated_power.value * 3027
            }
            else if (calculated_power.value <= 41.250) {
                priceNetto = calculated_power.value * 3024
            }
            else if (calculated_power.value <= 41.625) {
                priceNetto = calculated_power.value * 3021
            }
            else if (calculated_power.value <= 42.000) {
                priceNetto = calculated_power.value * 3019
            }
            else if (calculated_power.value <= 42.375) {
                priceNetto = calculated_power.value * 3016
            }
            else if (calculated_power.value <= 42.750) {
                priceNetto = calculated_power.value * 3014
            }
            else if (calculated_power.value <= 43.125) {
                priceNetto = calculated_power.value * 3012
            }
            else if (calculated_power.value <= 43.500) {
                priceNetto = calculated_power.value * 3009
            }
            else if (calculated_power.value <= 43.875) {
                priceNetto = calculated_power.value * 3007
            }
            else if (calculated_power.value <= 44.250) {
                priceNetto = calculated_power.value * 3005
            }
            else if (calculated_power.value <= 44.625) {
                priceNetto = calculated_power.value * 3003
            }
            else if (calculated_power.value <= 45.000) {
                priceNetto = calculated_power.value * 3000
            }
            else if (calculated_power.value <= 45.375) {
                priceNetto = calculated_power.value * 2998
            }
            else if (calculated_power.value <= 45.750) {
                priceNetto = calculated_power.value * 3026
            }
            else if (calculated_power.value <= 46.125) {
                priceNetto = calculated_power.value * 3024
            }
            else if (calculated_power.value <= 46.500) {
                priceNetto = calculated_power.value * 3021
            }
            else if (calculated_power.value <= 46.875) {
                priceNetto = calculated_power.value * 3019
            }
            else if (calculated_power.value <= 47.250) {
                priceNetto = calculated_power.value * 3017
            }
            else if (calculated_power.value <= 47.625) {
                priceNetto = calculated_power.value * 3015
            }
            else if (calculated_power.value <= 48.000) {
                priceNetto = calculated_power.value * 3013
            }
            else if (calculated_power.value <= 48.375) {
                priceNetto = calculated_power.value * 3010
            }
            else if (calculated_power.value <= 48.750) {
                priceNetto = calculated_power.value * 3008
            }
            else if (calculated_power.value <= 49.125) {
                priceNetto = calculated_power.value * 3006
            }
            else if (calculated_power.value <= 49.500) {
                priceNetto = calculated_power.value * 3004
            }
            else if (calculated_power.value > 49.5) {
                const diff = calculated_power.value - 49.5;
                const moc_w_kWp = diff * 1000;
                const panels = Math.ceil(moc_w_kWp / panel_type.value);
                const maxValue = 49.5;
                const maxCost = maxValue * 3004;
                const addedCost = panels * 1400;
                priceNetto = maxCost + addedCost;
            }


        }
    }
    if (roofing.value == 2) {
        if (inverter_phase.value == 1) {
            if (calculated_power.value <= 2.25) {
                priceNetto = calculated_power.value * 4943
            }
            else if (calculated_power.value <= 2.625) {
                priceNetto = calculated_power.value * 4628
            }
            else if (calculated_power.value <= 3.00) {
                priceNetto = calculated_power.value * 4457
            }
            else if (calculated_power.value <= 3.375) {
                priceNetto = calculated_power.value * 4166
            }
            else if (calculated_power.value <= 3.75) {
                priceNetto = calculated_power.value * 4162
            }
        }
        if (inverter_phase.value == 3) {
            if (calculated_power.value <= 3.00) {
                priceNetto = calculated_power.value * 4927
            }
            else if (calculated_power.value <= 3.000) {
                priceNetto = calculated_power.value * 4927
            }
            else if (calculated_power.value <= 3.375) {
                priceNetto = calculated_power.value * 4415
            }
            else if (calculated_power.value <= 3.750) {
                priceNetto = calculated_power.value * 4319
            }
            else if (calculated_power.value <= 4.125) {
                priceNetto = calculated_power.value * 4214
            }
            else if (calculated_power.value <= 4.500) {
                priceNetto = calculated_power.value * 4127
            }
            else if (calculated_power.value <= 4.875) {
                priceNetto = calculated_power.value * 4090
            }
            else if (calculated_power.value <= 5.250) {
                priceNetto = calculated_power.value * 4024
            }
            else if (calculated_power.value <= 5.625) {
                priceNetto = calculated_power.value * 3867
            }
            else if (calculated_power.value <= 6.000) {
                priceNetto = calculated_power.value * 3917
            }
            else if (calculated_power.value <= 6.375) {
                priceNetto = calculated_power.value * 3919
            }
            else if (calculated_power.value <= 6.750) {
                priceNetto = calculated_power.value * 3966
            }
            else if (calculated_power.value <= 7.125) {
                priceNetto = calculated_power.value * 3924
            }
            else if (calculated_power.value <= 7.500) {
                priceNetto = calculated_power.value * 3918
            }
            else if (calculated_power.value <= 7.875) {
                priceNetto = calculated_power.value * 3883
            }
            else if (calculated_power.value <= 8.250) {
                priceNetto = calculated_power.value * 3850
            }
            else if (calculated_power.value <= 8.625) {
                priceNetto = calculated_power.value * 3820
            }
            else if (calculated_power.value <= 9.000) {
                priceNetto = calculated_power.value * 3793
            }
            else if (calculated_power.value <= 9.375) {
                priceNetto = calculated_power.value * 3768
            }
            else if (calculated_power.value <= 9.750) {
                priceNetto = calculated_power.value * 3803
            }
            else if (calculated_power.value <= 10.125) {
                priceNetto = calculated_power.value * 3717
            }
            else if (calculated_power.value <= 10.500) {
                priceNetto = calculated_power.value * 3639
            }
            else if (calculated_power.value <= 10.875) {
                priceNetto = calculated_power.value * 3558
            }
            else if (calculated_power.value <= 11.250) {
                priceNetto = calculated_power.value * 3487
            }
            else if (calculated_power.value <= 11.625) {
                priceNetto = calculated_power.value * 3454
            }
            else if (calculated_power.value <= 12.000) {
                priceNetto = calculated_power.value * 3503
            }
            else if (calculated_power.value <= 12.375) {
                priceNetto = calculated_power.value * 3485
            }
            else if (calculated_power.value <= 12.750) {
                priceNetto = calculated_power.value * 3469
            }
            else if (calculated_power.value <= 13.125) {
                priceNetto = calculated_power.value * 3453
            }
            else if (calculated_power.value <= 13.500) {
                priceNetto = calculated_power.value * 3438
            }
            else if (calculated_power.value <= 13.875) {
                priceNetto = calculated_power.value * 3424
            }
            else if (calculated_power.value <= 14.250) {
                priceNetto = calculated_power.value * 3411
            }
            else if (calculated_power.value <= 14.625) {
                priceNetto = calculated_power.value * 3398
            }
            else if (calculated_power.value <= 15.000) {
                priceNetto = calculated_power.value * 3414
            }
            else if (calculated_power.value <= 15.375) {
                priceNetto = calculated_power.value * 3402
            }
            else if (calculated_power.value <= 15.750) {
                priceNetto = calculated_power.value * 3390
            }
            else if (calculated_power.value <= 16.125) {
                priceNetto = calculated_power.value * 3380
            }
            else if (calculated_power.value <= 16.500) {
                priceNetto = calculated_power.value * 3369
            }
            else if (calculated_power.value <= 16.875) {
                priceNetto = calculated_power.value * 3359
            }
            else if (calculated_power.value <= 17.250) {
                priceNetto = calculated_power.value * 3410
            }
            else if (calculated_power.value <= 17.625) {
                priceNetto = calculated_power.value * 3400
            }
            else if (calculated_power.value <= 18.000) {
                priceNetto = calculated_power.value * 3390
            }
            else if (calculated_power.value <= 18.375) {
                priceNetto = calculated_power.value * 3380
            }
            else if (calculated_power.value <= 18.750) {
                priceNetto = calculated_power.value * 3371
            }
            else if (calculated_power.value <= 19.125) {
                priceNetto = calculated_power.value * 3362
            }
            else if (calculated_power.value <= 19.500) {
                priceNetto = calculated_power.value * 3354
            }
            else if (calculated_power.value <= 19.875) {
                priceNetto = calculated_power.value * 3364
            }
            else if (calculated_power.value <= 20.250) {
                priceNetto = calculated_power.value * 3356
            }
            else if (calculated_power.value <= 20.625) {
                priceNetto = calculated_power.value * 3348
            }
            else if (calculated_power.value <= 21.000) {
                priceNetto = calculated_power.value * 3340
            }
            else if (calculated_power.value <= 21.375) {
                priceNetto = calculated_power.value * 3333
            }
            else if (calculated_power.value <= 21.750) {
                priceNetto = calculated_power.value * 3326
            }
            else if (calculated_power.value <= 22.125) {
                priceNetto = calculated_power.value * 3319
            }
            else if (calculated_power.value <= 22.500) {
                priceNetto = calculated_power.value * 3312
            }
            else if (calculated_power.value <= 22.875) {
                priceNetto = calculated_power.value * 3306
            }
            else if (calculated_power.value <= 23.250) {
                priceNetto = calculated_power.value * 3300
            }
            else if (calculated_power.value <= 23.625) {
                priceNetto = calculated_power.value * 3294
            }
            else if (calculated_power.value <= 24.000) {
                priceNetto = calculated_power.value * 3288
            }
            else if (calculated_power.value <= 24.375) {
                priceNetto = calculated_power.value * 3323
            }
            else if (calculated_power.value <= 24.750) {
                priceNetto = calculated_power.value * 3317
            }
            else if (calculated_power.value <= 25.125) {
                priceNetto = calculated_power.value * 3311
            }
            else if (calculated_power.value <= 25.500) {
                priceNetto = calculated_power.value * 3305
            }
            else if (calculated_power.value <= 25.875) {
                priceNetto = calculated_power.value * 3300
            }
            else if (calculated_power.value <= 26.250) {
                priceNetto = calculated_power.value * 3294
            }
            else if (calculated_power.value <= 26.625) {
                priceNetto = calculated_power.value * 3289
            }
            else if (calculated_power.value <= 27.000) {
                priceNetto = calculated_power.value * 3284
            }
            else if (calculated_power.value <= 27.375) {
                priceNetto = calculated_power.value * 3279
            }
            else if (calculated_power.value <= 27.750) {
                priceNetto = calculated_power.value * 3274
            }
            else if (calculated_power.value <= 28.125) {
                priceNetto = calculated_power.value * 3269
            }
            else if (calculated_power.value <= 28.500) {
                priceNetto = calculated_power.value * 3265
            }
            else if (calculated_power.value <= 28.875) {
                priceNetto = calculated_power.value * 3260
            }
            else if (calculated_power.value <= 29.250) {
                priceNetto = calculated_power.value * 3256
            }
            else if (calculated_power.value <= 29.625) {
                priceNetto = calculated_power.value * 3264
            }
            else if (calculated_power.value <= 30.000) {
                priceNetto = calculated_power.value * 3260
            }
            else if (calculated_power.value <= 30.375) {
                priceNetto = calculated_power.value * 3256
            }
            else if (calculated_power.value <= 30.750) {
                priceNetto = calculated_power.value * 3153
            }
            else if (calculated_power.value <= 31.125) {
                priceNetto = calculated_power.value * 3149
            }
            else if (calculated_power.value <= 31.500) {
                priceNetto = calculated_power.value * 3145
            }
            else if (calculated_power.value <= 31.875) {
                priceNetto = calculated_power.value * 3141
            }
            else if (calculated_power.value <= 32.250) {
                priceNetto = calculated_power.value * 3137
            }
            else if (calculated_power.value <= 32.625) {
                priceNetto = calculated_power.value * 3134
            }
            else if (calculated_power.value <= 33.000) {
                priceNetto = calculated_power.value * 3130
            }
            else if (calculated_power.value <= 33.375) {
                priceNetto = calculated_power.value * 3127
            }
            else if (calculated_power.value <= 33.750) {
                priceNetto = calculated_power.value * 3123
            }
            else if (calculated_power.value <= 34.125) {
                priceNetto = calculated_power.value * 3120
            }
            else if (calculated_power.value <= 34.500) {
                priceNetto = calculated_power.value * 3117
            }
            else if (calculated_power.value <= 34.875) {
                priceNetto = calculated_power.value * 3114
            }
            else if (calculated_power.value <= 35.250) {
                priceNetto = calculated_power.value * 3111
            }
            else if (calculated_power.value <= 35.625) {
                priceNetto = calculated_power.value * 3136
            }
            else if (calculated_power.value <= 36.000) {
                priceNetto = calculated_power.value * 3132
            }
            else if (calculated_power.value <= 36.375) {
                priceNetto = calculated_power.value * 3129
            }
            else if (calculated_power.value <= 36.750) {
                priceNetto = calculated_power.value * 3126
            }
            else if (calculated_power.value <= 37.125) {
                priceNetto = calculated_power.value * 3123
            }
            else if (calculated_power.value <= 37.500) {
                priceNetto = calculated_power.value * 3120
            }
            else if (calculated_power.value <= 37.875) {
                priceNetto = calculated_power.value * 3117
            }
            else if (calculated_power.value <= 38.250) {
                priceNetto = calculated_power.value * 3114
            }
            else if (calculated_power.value <= 38.625) {
                priceNetto = calculated_power.value * 3111
            }
            else if (calculated_power.value <= 39.000) {
                priceNetto = calculated_power.value * 3108
            }
            else if (calculated_power.value <= 39.375) {
                priceNetto = calculated_power.value * 3106
            }
            else if (calculated_power.value <= 39.750) {
                priceNetto = calculated_power.value * 3115
            }
            else if (calculated_power.value <= 40.125) {
                priceNetto = calculated_power.value * 3112
            }
            else if (calculated_power.value <= 40.500) {
                priceNetto = calculated_power.value * 3109
            }
            else if (calculated_power.value <= 40.875) {
                priceNetto = calculated_power.value * 3093
            }
            else if (calculated_power.value <= 41.250) {
                priceNetto = calculated_power.value * 3075
            }
            else if (calculated_power.value <= 41.625) {
                priceNetto = calculated_power.value * 3060
            }
            else if (calculated_power.value <= 42.000) {
                priceNetto = calculated_power.value * 3046
            }
            else if (calculated_power.value <= 42.375) {
                priceNetto = calculated_power.value * 3038
            }
            else if (calculated_power.value <= 42.750) {
                priceNetto = calculated_power.value * 3041
            }
            else if (calculated_power.value <= 43.125) {
                priceNetto = calculated_power.value * 3038
            }
            else if (calculated_power.value <= 43.500) {
                priceNetto = calculated_power.value * 3036
            }
            else if (calculated_power.value <= 43.875) {
                priceNetto = calculated_power.value * 3034
            }
            else if (calculated_power.value <= 44.250) {
                priceNetto = calculated_power.value * 3032
            }
            else if (calculated_power.value <= 44.625) {
                priceNetto = calculated_power.value * 3029
            }
            else if (calculated_power.value <= 45.000) {
                priceNetto = calculated_power.value * 3027
            }
            else if (calculated_power.value <= 45.375) {
                priceNetto = calculated_power.value * 3031
            }
            else if (calculated_power.value <= 45.750) {
                priceNetto = calculated_power.value * 3052
            }
            else if (calculated_power.value <= 46.125) {
                priceNetto = calculated_power.value * 3050
            }
            else if (calculated_power.value <= 46.500) {
                priceNetto = calculated_power.value * 3048
            }
            else if (calculated_power.value <= 46.875) {
                priceNetto = calculated_power.value * 3046
            }
            else if (calculated_power.value <= 47.250) {
                priceNetto = calculated_power.value * 3043
            }
            else if (calculated_power.value <= 47.625) {
                priceNetto = calculated_power.value * 3041
            }
            else if (calculated_power.value <= 48.000) {
                priceNetto = calculated_power.value * 3039
            }
            else if (calculated_power.value <= 48.375) {
                priceNetto = calculated_power.value * 3037
            }
            else if (calculated_power.value <= 48.750) {
                priceNetto = calculated_power.value * 3035
            }
            else if (calculated_power.value <= 49.125) {
                priceNetto = calculated_power.value * 3033
            }
            else if (calculated_power.value <= 49.500) {
                priceNetto = calculated_power.value * 3031
            }
            else if (calculated_power.value > 49.5) {
                const diff = calculated_power.value - 49.5;
                const moc_w_kWp = diff * 1000;
                const panels = Math.ceil(moc_w_kWp / panel_type.value);
                const maxValue = 49.5;
                const maxCost = maxValue * 3031;
                const addedCost = panels * 1400;
                priceNetto = maxCost + addedCost;
            }

        }
    }
    if (roofing.value == 3 || roofing.value == 4) {
        if (inverter_phase.value == 1) {
            if (calculated_power.value <= 2.25) {
                priceNetto = calculated_power.value * 5396
            }
            else if (calculated_power.value <= 3.00) {
                priceNetto = calculated_power.value * 4911
            }
            else if (calculated_power.value <= 3.75) {
                priceNetto = calculated_power.value * 4522
            }
        }
        if (inverter_phase.value == 3) {
            if (calculated_power.value <= 3.00) {
                priceNetto = calculated_power.value * 5093
            }
            else if (calculated_power.value <= 3.000) {
                priceNetto = calculated_power.value * 5193
            }
            else if (calculated_power.value <= 3.750) {
                priceNetto = calculated_power.value * 4586
            }
            else if (calculated_power.value <= 4.500) {
                priceNetto = calculated_power.value * 4394
            }
            else if (calculated_power.value <= 5.250) {
                priceNetto = calculated_power.value * 4237
            }
            else if (calculated_power.value <= 6.000) {
                priceNetto = calculated_power.value * 4130
            }
            else if (calculated_power.value <= 6.750) {
                priceNetto = calculated_power.value * 4179
            }
            else if (calculated_power.value <= 7.500) {
                priceNetto = calculated_power.value * 4078
            }
            else if (calculated_power.value <= 8.250) {
                priceNetto = calculated_power.value * 4010
            }
            else if (calculated_power.value <= 9.000) {
                priceNetto = calculated_power.value * 3953
            }
            else if (calculated_power.value <= 9.750) {
                priceNetto = calculated_power.value * 3963
            }
            else if (calculated_power.value <= 10.500) {
                priceNetto = calculated_power.value * 3781
            }
            else if (calculated_power.value <= 11.250) {
                priceNetto = calculated_power.value * 3631
            }
            else if (calculated_power.value <= 12.000) {
                priceNetto = calculated_power.value * 3610
            }
            else if (calculated_power.value <= 12.750) {
                priceNetto = calculated_power.value * 3575
            }
            else if (calculated_power.value <= 13.500) {
                priceNetto = calculated_power.value * 3545
            }
            else if (calculated_power.value <= 14.250) {
                priceNetto = calculated_power.value * 3518
            }
            else if (calculated_power.value <= 15.000) {
                priceNetto = calculated_power.value * 3521
            }
            else if (calculated_power.value <= 15.750) {
                priceNetto = calculated_power.value * 3497
            }
            else if (calculated_power.value <= 16.500) {
                priceNetto = calculated_power.value * 3476
            }
            else if (calculated_power.value <= 17.250) {
                priceNetto = calculated_power.value * 3517
            }
            else if (calculated_power.value <= 18.000) {
                priceNetto = calculated_power.value * 3496
            }
            else if (calculated_power.value <= 18.750) {
                priceNetto = calculated_power.value * 3478
            }
            else if (calculated_power.value <= 19.500) {
                priceNetto = calculated_power.value * 3460
            }
            else if (calculated_power.value <= 20.250) {
                priceNetto = calculated_power.value * 3409
            }
            else if (calculated_power.value <= 21.000) {
                priceNetto = calculated_power.value * 3393
            }
            else if (calculated_power.value <= 21.750) {
                priceNetto = calculated_power.value * 3379
            }
            else if (calculated_power.value <= 22.500) {
                priceNetto = calculated_power.value * 3365
            }
            else if (calculated_power.value <= 23.250) {
                priceNetto = calculated_power.value * 3353
            }
            else if (calculated_power.value <= 24.000) {
                priceNetto = calculated_power.value * 3341
            }
            else if (calculated_power.value <= 24.750) {
                priceNetto = calculated_power.value * 3370
            }
            else if (calculated_power.value <= 25.500) {
                priceNetto = calculated_power.value * 3359
            }
            else if (calculated_power.value <= 26.250) {
                priceNetto = calculated_power.value * 3348
            }
            else if (calculated_power.value <= 27.000) {
                priceNetto = calculated_power.value * 3337
            }
            else if (calculated_power.value <= 27.750) {
                priceNetto = calculated_power.value * 3327
            }
            else if (calculated_power.value <= 28.500) {
                priceNetto = calculated_power.value * 3318
            }
            else if (calculated_power.value <= 29.250) {
                priceNetto = calculated_power.value * 3309
            }
            else if (calculated_power.value <= 30.000) {
                priceNetto = calculated_power.value * 3313
            }
            else if (calculated_power.value <= 30.750) {
                priceNetto = calculated_power.value * 3206
            }
            else if (calculated_power.value <= 31.500) {
                priceNetto = calculated_power.value * 3145
            }
            else if (calculated_power.value <= 32.250) {
                priceNetto = calculated_power.value * 3137
            }
            else if (calculated_power.value <= 33.000) {
                priceNetto = calculated_power.value * 3130
            }
            else if (calculated_power.value <= 33.750) {
                priceNetto = calculated_power.value * 3123
            }
            else if (calculated_power.value <= 34.500) {
                priceNetto = calculated_power.value * 3117
            }
            else if (calculated_power.value <= 35.250) {
                priceNetto = calculated_power.value * 3111
            }
            else if (calculated_power.value <= 36.000) {
                priceNetto = calculated_power.value * 3132
            }
            else if (calculated_power.value <= 36.750) {
                priceNetto = calculated_power.value * 3126
            }
            else if (calculated_power.value <= 37.500) {
                priceNetto = calculated_power.value * 3120
            }
            else if (calculated_power.value <= 38.250) {
                priceNetto = calculated_power.value * 3114
            }
            else if (calculated_power.value <= 39.000) {
                priceNetto = calculated_power.value * 3108
            }
            else if (calculated_power.value <= 39.750) {
                priceNetto = calculated_power.value * 3115
            }
            else if (calculated_power.value <= 40.500) {
                priceNetto = calculated_power.value * 3109
            }
            else if (calculated_power.value <= 41.250) {
                priceNetto = calculated_power.value * 3075
            }
            else if (calculated_power.value <= 42.000) {
                priceNetto = calculated_power.value * 3046
            }
            else if (calculated_power.value <= 42.750) {
                priceNetto = calculated_power.value * 3041
            }
            else if (calculated_power.value <= 43.500) {
                priceNetto = calculated_power.value * 3036
            }
            else if (calculated_power.value <= 44.250) {
                priceNetto = calculated_power.value * 3032
            }
            else if (calculated_power.value <= 45.000) {
                priceNetto = calculated_power.value * 3027
            }
            else if (calculated_power.value <= 45.750) {
                priceNetto = calculated_power.value * 3052
            }
            else if (calculated_power.value <= 46.500) {
                priceNetto = calculated_power.value * 3048
            }
            else if (calculated_power.value <= 47.250) {
                priceNetto = calculated_power.value * 3043
            }
            else if (calculated_power.value <= 48.000) {
                priceNetto = calculated_power.value * 3039
            }
            else if (calculated_power.value <= 48.750) {
                priceNetto = calculated_power.value * 3035
            }
            else if (calculated_power.value <= 49.500) {
                priceNetto = calculated_power.value * 3031
            }
            else if (calculated_power.value > 49.5) {
                const diff = calculated_power.value - 49.5;
                const moc_w_kWp = diff * 1000;
                const panels = Math.ceil(moc_w_kWp / panel_type.value);
                const maxValue = 49.5;
                const maxCost = maxValue * 3031;
                const addedCost = panels * 1400;
                priceNetto = maxCost + addedCost;
            }


        }
    }
    if (calculated_power.value <= 11.25) {
        if (office_level.value == "SR") {
            priceNetto = priceNetto + (Math.ceil(calculated_power.value) * 100)
        }

        if (office_level.value == "BR") {
            priceNetto = priceNetto + (Math.ceil(calculated_power.value) * 200)
        }
    }
    if (vat_value.value == 0.08) {
        priceNetto = priceNetto + 139
    }
    if (vat_value.value == 0.23) {
        priceNetto = priceNetto + 122
    }
    return (priceNetto * 1.05) + 1000;
}
let zero_price_calc;
const suggestPrice = () => {
    if (inverter_phase.value == 1) {
        if (calculated_power.value <= 2.25) {
            zero_price_calc = 14355;
        }
        else if (calculated_power.value <= 2.625) {
            zero_price_calc = 15584;
        }
        else if (calculated_power.value <= 3.00) {
            zero_price_calc = 17332;
        }
        else if (calculated_power.value <= 3.375) {
            zero_price_calc = 18122;
        }
        else if (calculated_power.value <= 3.75) {
            zero_price_calc = 20032;
        }
    }
    if (inverter_phase.value == 3) {
        if (calculated_power.value <= 3.00) {
            zero_price_calc = 19162;
        }
        else if (calculated_power.value <= 3.375) {
            zero_price_calc = 19216;
        }
        else if (calculated_power.value <= 3.750) {
            zero_price_calc = 22300;
        }
        else if (calculated_power.value <= 4.125) {
            zero_price_calc = 22496;
        }
        else if (calculated_power.value <= 4.500) {
            zero_price_calc = 23936;
        }
        else if (calculated_power.value <= 4.875) {
            zero_price_calc = 25607;
        }
        else if (calculated_power.value <= 5.250) {
            zero_price_calc = 27307;
        }
        else if (calculated_power.value <= 5.625) {
            zero_price_calc = 28747;
        }
        else if (calculated_power.value <= 6.000) {
            zero_price_calc = 30447;
        }
        else if (calculated_power.value <= 6.375) {
            zero_price_calc = 32268;
        }
        else if (calculated_power.value <= 6.750) {
            zero_price_calc = 34488;
        }
        else if (calculated_power.value <= 7.125) {
            zero_price_calc = 36188;
        }
        else if (calculated_power.value <= 7.500) {
            zero_price_calc = 37943;
        }
        else if (calculated_power.value <= 7.875) {
            zero_price_calc = 38863;
        }
        else if (calculated_power.value <= 8.250) {
            zero_price_calc = 41084;
        }
        else if (calculated_power.value <= 8.625) {
            zero_price_calc = 42524;
        }
        else if (calculated_power.value <= 9.000) {
            zero_price_calc = 44224;
        }
        else if (calculated_power.value <= 9.375) {
            zero_price_calc = 45664;
        }
        else if (calculated_power.value <= 9.750) {
            zero_price_calc = 47837;
        }
        else if (calculated_power.value <= 10.125) {
            zero_price_calc = 48782;
        }
        else if (calculated_power.value <= 10.500) {
            zero_price_calc = 49494;
        }
        else if (calculated_power.value <= 10.875) {
            zero_price_calc = 50161;
        }
        else if (calculated_power.value <= 11.250) {
            zero_price_calc = 51115;
        }
        else if (calculated_power.value <= 11.625) {
            zero_price_calc = 49740;
        }
        else if (calculated_power.value <= 12.000) {
            zero_price_calc = 51344;
        }
        else if (calculated_power.value <= 12.375) {
            zero_price_calc = 52676;
        }
        else if (calculated_power.value <= 12.750) {
            zero_price_calc = 54008;
        }
        else if (calculated_power.value <= 13.125) {
            zero_price_calc = 55339;
        }
        else if (calculated_power.value <= 13.500) {
            zero_price_calc = 56671;
        }
        else if (calculated_power.value <= 13.875) {
            zero_price_calc = 58002;
        }
        else if (calculated_power.value <= 14.250) {
            zero_price_calc = 59334;
        }
        else if (calculated_power.value <= 14.625) {
            zero_price_calc = 60666;
        }
        else if (calculated_power.value <= 15.000) {
            zero_price_calc = 62511;
        }
        else if (calculated_power.value <= 15.375) {
            zero_price_calc = 63843;
        }
        else if (calculated_power.value <= 15.750) {
            zero_price_calc = 65174;
        }
        else if (calculated_power.value <= 16.125) {
            zero_price_calc = 66506;
        }
        else if (calculated_power.value <= 16.500) {
            zero_price_calc = 67838;
        }
        else if (calculated_power.value <= 16.875) {
            zero_price_calc = 69169;
        }
        else if (calculated_power.value <= 17.250) {
            zero_price_calc = 71807;
        }
        else if (calculated_power.value <= 17.625) {
            zero_price_calc = 73138;
        }
        else if (calculated_power.value <= 18.000) {
            zero_price_calc = 74470;
        }
        else if (calculated_power.value <= 18.375) {
            zero_price_calc = 75802;
        }
        else if (calculated_power.value <= 18.750) {
            zero_price_calc = 77133;
        }
        else if (calculated_power.value <= 19.125) {
            zero_price_calc = 78465;
        }
        else if (calculated_power.value <= 19.500) {
            zero_price_calc = 79796;
        }
        else if (calculated_power.value <= 19.875) {
            zero_price_calc = 81583;
        }
        else if (calculated_power.value <= 20.250) {
            zero_price_calc = 82915;
        }
        else if (calculated_power.value <= 20.625) {
            zero_price_calc = 84246;
        }
        else if (calculated_power.value <= 21.000) {
            zero_price_calc = 85578;
        }
        else if (calculated_power.value <= 21.375) {
            zero_price_calc = 86909;
        }
        else if (calculated_power.value <= 21.750) {
            zero_price_calc = 88241;
        }
        else if (calculated_power.value <= 22.125) {
            zero_price_calc = 89573;
        }
        else if (calculated_power.value <= 22.500) {
            zero_price_calc = 90904;
        }
        else if (calculated_power.value <= 22.875) {
            zero_price_calc = 92236;
        }
        else if (calculated_power.value <= 23.250) {
            zero_price_calc = 93568;
        }
        else if (calculated_power.value <= 23.625) {
            zero_price_calc = 94899;
        }
        else if (calculated_power.value <= 24.000) {
            zero_price_calc = 96231;
        }
        else if (calculated_power.value <= 24.375) {
            zero_price_calc = 98808;
        }
        else if (calculated_power.value <= 24.750) {
            zero_price_calc = 100140;
        }
        else if (calculated_power.value <= 25.125) {
            zero_price_calc = 101472;
        }
        else if (calculated_power.value <= 25.500) {
            zero_price_calc = 102803;
        }
        else if (calculated_power.value <= 25.875) {
            zero_price_calc = 104135;
        }
        else if (calculated_power.value <= 26.250) {
            zero_price_calc = 105466;
        }
        else if (calculated_power.value <= 26.625) {
            zero_price_calc = 106798;
        }
        else if (calculated_power.value <= 27.000) {
            zero_price_calc = 108130;
        }
        else if (calculated_power.value <= 27.375) {
            zero_price_calc = 109461;
        }
        else if (calculated_power.value <= 27.750) {
            zero_price_calc = 110793;
        }
        else if (calculated_power.value <= 28.125) {
            zero_price_calc = 112125;
        }
        else if (calculated_power.value <= 28.500) {
            zero_price_calc = 113456;
        }
        else if (calculated_power.value <= 28.875) {
            zero_price_calc = 114788;
        }
        else if (calculated_power.value <= 29.250) {
            zero_price_calc = 116120;
        }
        else if (calculated_power.value <= 29.625) {
            zero_price_calc = 117911;
        }
        else if (calculated_power.value <= 30.000) {
            zero_price_calc = 119243;
        }
        else if (calculated_power.value <= 30.375) {
            zero_price_calc = 120574;
        }
        else if (calculated_power.value <= 30.750) {
            zero_price_calc = 118113;
        }
        else if (calculated_power.value <= 31.125) {
            zero_price_calc = 119399;
        }
        else if (calculated_power.value <= 31.500) {
            zero_price_calc = 120684;
        }
        else if (calculated_power.value <= 31.875) {
            zero_price_calc = 121970;
        }
        else if (calculated_power.value <= 32.250) {
            zero_price_calc = 123255;
        }
        else if (calculated_power.value <= 32.625) {
            zero_price_calc = 124540;
        }
        else if (calculated_power.value <= 33.000) {
            zero_price_calc = 125826;
        }
        else if (calculated_power.value <= 33.375) {
            zero_price_calc = 127111;
        }
        else if (calculated_power.value <= 33.750) {
            zero_price_calc = 128396;
        }
        else if (calculated_power.value <= 34.125) {
            zero_price_calc = 129682;
        }
        else if (calculated_power.value <= 34.500) {
            zero_price_calc = 130967;
        }
        else if (calculated_power.value <= 34.875) {
            zero_price_calc = 132253;
        }
        else if (calculated_power.value <= 35.250) {
            zero_price_calc = 133538;
        }
        else if (calculated_power.value <= 35.625) {
            zero_price_calc = 136067;
        }
        else if (calculated_power.value <= 36.000) {
            zero_price_calc = 137352;
        }
        else if (calculated_power.value <= 36.375) {
            zero_price_calc = 138637;
        }
        else if (calculated_power.value <= 36.750) {
            zero_price_calc = 139923;
        }
        else if (calculated_power.value <= 37.125) {
            zero_price_calc = 141208;
        }
        else if (calculated_power.value <= 37.500) {
            zero_price_calc = 142493;
        }
        else if (calculated_power.value <= 37.875) {
            zero_price_calc = 143779;
        }
        else if (calculated_power.value <= 38.250) {
            zero_price_calc = 145064;
        }
        else if (calculated_power.value <= 38.625) {
            zero_price_calc = 146350;
        }
        else if (calculated_power.value <= 39.000) {
            zero_price_calc = 147635;
        }
        else if (calculated_power.value <= 39.375) {
            zero_price_calc = 148920;
        }
        else if (calculated_power.value <= 39.750) {
            zero_price_calc = 150780;
        }
        else if (calculated_power.value <= 40.125) {
            zero_price_calc = 146612;
        }
        else if (calculated_power.value <= 40.500) {
            zero_price_calc = 147412;
        }
        else if (calculated_power.value <= 40.875) {
            zero_price_calc = 148212;
        }
        else if (calculated_power.value <= 41.250) {
            zero_price_calc = 149012;
        }
        else if (calculated_power.value <= 41.625) {
            zero_price_calc = 149812;
        }
        else if (calculated_power.value <= 42.000) {
            zero_price_calc = 150612;
        }
        else if (calculated_power.value <= 42.375) {
            zero_price_calc = 151412;
        }
        else if (calculated_power.value <= 42.750) {
            zero_price_calc = 152212;
        }
        else if (calculated_power.value <= 43.125) {
            zero_price_calc = 153012;
        }
        else if (calculated_power.value <= 43.500) {
            zero_price_calc = 153812;
        }
        else if (calculated_power.value <= 43.875) {
            zero_price_calc = 154612;
        }
        else if (calculated_power.value <= 44.250) {
            zero_price_calc = 155412;
        }
        else if (calculated_power.value <= 44.625) {
            zero_price_calc = 156212;
        }
        else if (calculated_power.value <= 45.000) {
            zero_price_calc = 157012;
        }
        else if (calculated_power.value <= 45.375) {
            zero_price_calc = 157812;
        }
        else if (calculated_power.value <= 45.750) {
            zero_price_calc = 158612;
        }
        else if (calculated_power.value <= 46.125) {
            zero_price_calc = 159412;
        }
        else if (calculated_power.value <= 46.500) {
            zero_price_calc = 160212;
        }
        else if (calculated_power.value <= 46.875) {
            zero_price_calc = 161012;
        }
        else if (calculated_power.value <= 47.250) {
            zero_price_calc = 161812;
        }
        else if (calculated_power.value <= 47.625) {
            zero_price_calc = 162612;
        }
        else if (calculated_power.value <= 48.000) {
            zero_price_calc = 163412;
        }
        else if (calculated_power.value <= 48.375) {
            zero_price_calc = 164212;
        }
        else if (calculated_power.value <= 48.750) {
            zero_price_calc = 165012;
        }
        else if (calculated_power.value <= 49.125) {
            zero_price_calc = 165812;
        }
        else if (calculated_power.value <= 49.500) {
            zero_price_calc = 166612;
        }
        else if (calculated_power.value > 49.5) {
            const diff = calculated_power.value - 49.5;
            const moc_w_kWp = diff * 1000;
            const panels = Math.ceil(moc_w_kWp / panel_type.value);
            const addedCost = panels * 1400;
            zero_price_calc = 166612 + addedCost;
        }
    }
    return (zero_price_calc * 1.05);
}