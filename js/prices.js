const nettoCalculation = () => {
	let priceNetto = 0;
	if (roofing.value == 0) {
		if (inverter_phase.value == 1) {
			if (calculated_power.value <= 2.25) {
				priceNetto = calculated_power.value * 4730;
			} else if (calculated_power.value <= 2.625) {
				priceNetto = calculated_power.value * 4414;
			} else if (calculated_power.value <= 3) {
				priceNetto = calculated_power.value * 4244;
			} else if (calculated_power.value <= 3.375) {
				priceNetto = calculated_power.value * 3953;
			} else if (calculated_power.value <= 3.75) {
				priceNetto = calculated_power.value * 3949;
			}
		}
		if (inverter_phase.value == 3) {
			if (calculated_power.value <= 2.25) {
				priceNetto = calculated_power.value * 4730;
			} else if (calculated_power.value <= 2.625) {
				priceNetto = calculated_power.value * 4612;
			} else if (calculated_power.value <= 3.0) {
				priceNetto = calculated_power.value * 4507;
			} else if (calculated_power.value <= 3.375) {
				priceNetto = calculated_power.value * 4202;
			} else if (calculated_power.value <= 3.75) {
				priceNetto = calculated_power.value * 4106;
			} else if (calculated_power.value <= 4.125) {
				priceNetto = calculated_power.value * 4001;
			} else if (calculated_power.value <= 4.5) {
				priceNetto = calculated_power.value * 3914;
			} else if (calculated_power.value <= 4.875) {
				priceNetto = calculated_power.value * 3876;
			} else if (calculated_power.value <= 5.25) {
				priceNetto = calculated_power.value * 3811;
			} else if (calculated_power.value <= 5.625) {
				priceNetto = calculated_power.value * 3753;
			} else if (calculated_power.value <= 6.0) {
				priceNetto = calculated_power.value * 3703;
			} else if (calculated_power.value <= 6.375) {
				priceNetto = calculated_power.value * 3705;
			} else if (calculated_power.value <= 6.75) {
				priceNetto = calculated_power.value * 3752;
			} else if (calculated_power.value <= 7.125) {
				priceNetto = calculated_power.value * 3710;
			} else if (calculated_power.value <= 7.5) {
				priceNetto = calculated_power.value * 3705;
			} else if (calculated_power.value <= 7.875) {
				priceNetto = calculated_power.value * 3669;
			} else if (calculated_power.value <= 8.25) {
				priceNetto = calculated_power.value * 3637;
			} else if (calculated_power.value <= 8.625) {
				priceNetto = calculated_power.value * 3607;
			} else if (calculated_power.value <= 9.0) {
				priceNetto = calculated_power.value * 3580;
			} else if (calculated_power.value <= 9.375) {
				priceNetto = calculated_power.value * 3555;
			} else if (calculated_power.value <= 9.75) {
				priceNetto = calculated_power.value * 3590;
			} else if (calculated_power.value <= 10.125) {
				priceNetto = calculated_power.value * 3509;
			} else if (calculated_power.value <= 10.5) {
				priceNetto = calculated_power.value * 3435;
			} else if (calculated_power.value <= 10.875) {
				priceNetto = calculated_power.value * 3364;
			} else if (calculated_power.value <= 11.25) {
				priceNetto = calculated_power.value * 3299;
			} else if (calculated_power.value <= 11.625) {
				priceNetto = calculated_power.value * 3240;
			} else if (calculated_power.value <= 12.0) {
				priceNetto = calculated_power.value * 3290;
			} else if (calculated_power.value <= 12.375) {
				priceNetto = calculated_power.value * 3272;
			} else if (calculated_power.value <= 12.75) {
				priceNetto = calculated_power.value * 3255;
			} else if (calculated_power.value <= 13.125) {
				priceNetto = calculated_power.value * 3240;
			} else if (calculated_power.value <= 13.5) {
				priceNetto = calculated_power.value * 3225;
			} else if (calculated_power.value <= 13.875) {
				priceNetto = calculated_power.value * 3211;
			} else if (calculated_power.value <= 14.25) {
				priceNetto = calculated_power.value * 3198;
			} else if (calculated_power.value <= 14.625) {
				priceNetto = calculated_power.value * 3185;
			} else if (calculated_power.value <= 15.0) {
				priceNetto = calculated_power.value * 3201;
			} else if (calculated_power.value <= 15.375) {
				priceNetto = calculated_power.value * 3189;
			} else if (calculated_power.value <= 15.75) {
				priceNetto = calculated_power.value * 3177;
			} else if (calculated_power.value <= 16.125) {
				priceNetto = calculated_power.value * 3166;
			} else if (calculated_power.value <= 16.5) {
				priceNetto = calculated_power.value * 3156;
			} else if (calculated_power.value <= 16.875) {
				priceNetto = calculated_power.value * 3146;
			} else if (calculated_power.value <= 17.25) {
				priceNetto = calculated_power.value * 3197;
			} else if (calculated_power.value <= 17.625) {
				priceNetto = calculated_power.value * 3186;
			} else if (calculated_power.value <= 18.0) {
				priceNetto = calculated_power.value * 3176;
			} else if (calculated_power.value <= 18.375) {
				priceNetto = calculated_power.value * 3167;
			} else if (calculated_power.value <= 18.75) {
				priceNetto = calculated_power.value * 3158;
			} else if (calculated_power.value <= 19.125) {
				priceNetto = calculated_power.value * 3149;
			} else if (calculated_power.value <= 19.5) {
				priceNetto = calculated_power.value * 3140;
			} else if (calculated_power.value <= 19.875) {
				priceNetto = calculated_power.value * 3151;
			} else if (calculated_power.value <= 20.25) {
				priceNetto = calculated_power.value * 3142;
			} else if (calculated_power.value <= 20.625) {
				priceNetto = calculated_power.value * 3134;
			} else if (calculated_power.value <= 21.0) {
				priceNetto = calculated_power.value * 3127;
			} else if (calculated_power.value <= 21.375) {
				priceNetto = calculated_power.value * 3119;
			} else if (calculated_power.value <= 21.75) {
				priceNetto = calculated_power.value * 3112;
			} else if (calculated_power.value <= 22.125) {
				priceNetto = calculated_power.value * 3105;
			} else if (calculated_power.value <= 22.5) {
				priceNetto = calculated_power.value * 3099;
			} else if (calculated_power.value <= 22.875) {
				priceNetto = calculated_power.value * 3092;
			} else if (calculated_power.value <= 23.25) {
				priceNetto = calculated_power.value * 3086;
			} else if (calculated_power.value <= 23.625) {
				priceNetto = calculated_power.value * 3080;
			} else if (calculated_power.value <= 24.0) {
				priceNetto = calculated_power.value * 3074;
			} else if (calculated_power.value <= 24.375) {
				priceNetto = calculated_power.value * 3110;
			} else if (calculated_power.value <= 24.75) {
				priceNetto = calculated_power.value * 3104;
			} else if (calculated_power.value <= 25.125) {
				priceNetto = calculated_power.value * 3098;
			} else if (calculated_power.value <= 25.5) {
				priceNetto = calculated_power.value * 3092;
			} else if (calculated_power.value <= 25.875) {
				priceNetto = calculated_power.value * 3086;
			} else if (calculated_power.value <= 26.25) {
				priceNetto = calculated_power.value * 3081;
			} else if (calculated_power.value <= 26.625) {
				priceNetto = calculated_power.value * 3076;
			} else if (calculated_power.value <= 27.0) {
				priceNetto = calculated_power.value * 3071;
			} else if (calculated_power.value <= 27.375) {
				priceNetto = calculated_power.value * 3066;
			} else if (calculated_power.value <= 27.75) {
				priceNetto = calculated_power.value * 3061;
			} else if (calculated_power.value <= 28.125) {
				priceNetto = calculated_power.value * 3056;
			} else if (calculated_power.value <= 28.5) {
				priceNetto = calculated_power.value * 3051;
			} else if (calculated_power.value <= 28.875) {
				priceNetto = calculated_power.value * 3047;
			} else if (calculated_power.value <= 29.25) {
				priceNetto = calculated_power.value * 3043;
			} else if (calculated_power.value <= 29.625) {
				priceNetto = calculated_power.value * 3051;
			} else if (calculated_power.value <= 30.0) {
				priceNetto = calculated_power.value * 3046;
			} else if (calculated_power.value <= 30.375) {
				priceNetto = calculated_power.value * 3042;
			} else if (calculated_power.value <= 30.75) {
				priceNetto = calculated_power.value * 2940;
			} else if (calculated_power.value <= 31.125) {
				priceNetto = calculated_power.value * 2936;
			} else if (calculated_power.value <= 31.5) {
				priceNetto = calculated_power.value * 2932;
			} else if (calculated_power.value <= 31.875) {
				priceNetto = calculated_power.value * 2928;
			} else if (calculated_power.value <= 32.25) {
				priceNetto = calculated_power.value * 2924;
			} else if (calculated_power.value <= 32.625) {
				priceNetto = calculated_power.value * 2921;
			} else if (calculated_power.value <= 33.0) {
				priceNetto = calculated_power.value * 2917;
			} else if (calculated_power.value <= 33.375) {
				priceNetto = calculated_power.value * 2914;
			} else if (calculated_power.value <= 33.75) {
				priceNetto = calculated_power.value * 2910;
			} else if (calculated_power.value <= 34.125) {
				priceNetto = calculated_power.value * 2907;
			} else if (calculated_power.value <= 34.5) {
				priceNetto = calculated_power.value * 2904;
			} else if (calculated_power.value <= 34.875) {
				priceNetto = calculated_power.value * 2900;
			} else if (calculated_power.value <= 35.25) {
				priceNetto = calculated_power.value * 2897;
			} else if (calculated_power.value <= 35.625) {
				priceNetto = calculated_power.value * 2922;
			} else if (calculated_power.value <= 36.0) {
				priceNetto = calculated_power.value * 2919;
			} else if (calculated_power.value <= 36.375) {
				priceNetto = calculated_power.value * 2916;
			} else if (calculated_power.value <= 36.75) {
				priceNetto = calculated_power.value * 2913;
			} else if (calculated_power.value <= 37.125) {
				priceNetto = calculated_power.value * 2910;
			} else if (calculated_power.value <= 37.5) {
				priceNetto = calculated_power.value * 2907;
			} else if (calculated_power.value <= 37.875) {
				priceNetto = calculated_power.value * 2904;
			} else if (calculated_power.value <= 38.25) {
				priceNetto = calculated_power.value * 2901;
			} else if (calculated_power.value <= 38.625) {
				priceNetto = calculated_power.value * 2898;
			} else if (calculated_power.value <= 39.0) {
				priceNetto = calculated_power.value * 2895;
			} else if (calculated_power.value <= 39.375) {
				priceNetto = calculated_power.value * 2892;
			} else if (calculated_power.value <= 39.75) {
				priceNetto = calculated_power.value * 2901;
			} else if (calculated_power.value <= 40.125) {
				priceNetto = calculated_power.value * 2899;
			} else if (calculated_power.value <= 40.5) {
				priceNetto = calculated_power.value * 2896;
			} else if (calculated_power.value <= 40.875) {
				priceNetto = calculated_power.value * 2893;
			} else if (calculated_power.value <= 41.25) {
				priceNetto = calculated_power.value * 2891;
			} else if (calculated_power.value <= 41.625) {
				priceNetto = calculated_power.value * 2888;
			} else if (calculated_power.value <= 42.0) {
				priceNetto = calculated_power.value * 2886;
			} else if (calculated_power.value <= 42.375) {
				priceNetto = calculated_power.value * 2883;
			} else if (calculated_power.value <= 42.75) {
				priceNetto = calculated_power.value * 2881;
			} else if (calculated_power.value <= 43.125) {
				priceNetto = calculated_power.value * 2878;
			} else if (calculated_power.value <= 43.5) {
				priceNetto = calculated_power.value * 2876;
			} else if (calculated_power.value <= 43.875) {
				priceNetto = calculated_power.value * 2874;
			} else if (calculated_power.value <= 44.25) {
				priceNetto = calculated_power.value * 2872;
			} else if (calculated_power.value <= 44.625) {
				priceNetto = calculated_power.value * 2869;
			} else if (calculated_power.value <= 45.0) {
				priceNetto = calculated_power.value * 2867;
			} else if (calculated_power.value <= 45.375) {
				priceNetto = calculated_power.value * 2865;
			} else if (calculated_power.value <= 45.75) {
				priceNetto = calculated_power.value * 2892;
			} else if (calculated_power.value <= 46.125) {
				priceNetto = calculated_power.value * 2890;
			} else if (calculated_power.value <= 46.5) {
				priceNetto = calculated_power.value * 2888;
			} else if (calculated_power.value <= 46.875) {
				priceNetto = calculated_power.value * 2886;
			} else if (calculated_power.value <= 47.25) {
				priceNetto = calculated_power.value * 2883;
			} else if (calculated_power.value <= 47.625) {
				priceNetto = calculated_power.value * 2881;
			} else if (calculated_power.value <= 48.0) {
				priceNetto = calculated_power.value * 2879;
			} else if (calculated_power.value <= 48.375) {
				priceNetto = calculated_power.value * 2877;
			} else if (calculated_power.value <= 48.75) {
				priceNetto = calculated_power.value * 2875;
			} else if (calculated_power.value <= 49.125) {
				priceNetto = calculated_power.value * 2873;
			} else if (calculated_power.value <= 49.5) {
				priceNetto = calculated_power.value * 2871;
			} else if (calculated_power.value > 49.5) {
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
				priceNetto = calculated_power.value * 4863;
			} else if (calculated_power.value <= 2.625) {
				priceNetto = calculated_power.value * 4548;
			} else if (calculated_power.value <= 3.0) {
				priceNetto = calculated_power.value * 4377;
			} else if (calculated_power.value <= 3.375) {
				priceNetto = calculated_power.value * 4086;
			} else if (calculated_power.value <= 3.75) {
				priceNetto = calculated_power.value * 4082;
			}
		}
		if (inverter_phase.value == 3) {
			if (calculated_power.value <= 2.25) {
				priceNetto = calculated_power.value * 4930;
			} else if (calculated_power.value <= 2.625) {
				priceNetto = calculated_power.value * 4802;
			} else if (calculated_power.value <= 3.0) {
				priceNetto = calculated_power.value * 4607;
			} else if (calculated_power.value <= 3.375) {
				priceNetto = calculated_power.value * 4335;
			} else if (calculated_power.value <= 3.75) {
				priceNetto = calculated_power.value * 4239;
			} else if (calculated_power.value <= 4.125) {
				priceNetto = calculated_power.value * 4134;
			} else if (calculated_power.value <= 4.5) {
				priceNetto = calculated_power.value * 4047;
			} else if (calculated_power.value <= 4.875) {
				priceNetto = calculated_power.value * 4010;
			} else if (calculated_power.value <= 5.25) {
				priceNetto = calculated_power.value * 3944;
			} else if (calculated_power.value <= 5.625) {
				priceNetto = calculated_power.value * 3887;
			} else if (calculated_power.value <= 6.0) {
				priceNetto = calculated_power.value * 3837;
			} else if (calculated_power.value <= 6.375) {
				priceNetto = calculated_power.value * 3839;
			} else if (calculated_power.value <= 6.75) {
				priceNetto = calculated_power.value * 3886;
			} else if (calculated_power.value <= 7.125) {
				priceNetto = calculated_power.value * 3844;
			} else if (calculated_power.value <= 7.5) {
				priceNetto = calculated_power.value * 3838;
			} else if (calculated_power.value <= 7.875) {
				priceNetto = calculated_power.value * 3803;
			} else if (calculated_power.value <= 8.25) {
				priceNetto = calculated_power.value * 3770;
			} else if (calculated_power.value <= 8.625) {
				priceNetto = calculated_power.value * 3740;
			} else if (calculated_power.value <= 9.0) {
				priceNetto = calculated_power.value * 3713;
			} else if (calculated_power.value <= 9.375) {
				priceNetto = calculated_power.value * 3688;
			} else if (calculated_power.value <= 9.75) {
				priceNetto = calculated_power.value * 3723;
			} else if (calculated_power.value <= 10.125) {
				priceNetto = calculated_power.value * 3639;
			} else if (calculated_power.value <= 10.5) {
				priceNetto = calculated_power.value * 3561;
			} else if (calculated_power.value <= 10.875) {
				priceNetto = calculated_power.value * 3484;
			} else if (calculated_power.value <= 11.25) {
				priceNetto = calculated_power.value * 3420;
			} else if (calculated_power.value <= 11.625) {
				priceNetto = calculated_power.value * 3374;
			} else if (calculated_power.value <= 12.0) {
				priceNetto = calculated_power.value * 3423;
			} else if (calculated_power.value <= 12.375) {
				priceNetto = calculated_power.value * 3405;
			} else if (calculated_power.value <= 12.75) {
				priceNetto = calculated_power.value * 3389;
			} else if (calculated_power.value <= 13.125) {
				priceNetto = calculated_power.value * 3373;
			} else if (calculated_power.value <= 13.5) {
				priceNetto = calculated_power.value * 3358;
			} else if (calculated_power.value <= 13.875) {
				priceNetto = calculated_power.value * 3344;
			} else if (calculated_power.value <= 14.25) {
				priceNetto = calculated_power.value * 3331;
			} else if (calculated_power.value <= 14.625) {
				priceNetto = calculated_power.value * 3318;
			} else if (calculated_power.value <= 15.0) {
				priceNetto = calculated_power.value * 3334;
			} else if (calculated_power.value <= 15.375) {
				priceNetto = calculated_power.value * 3322;
			} else if (calculated_power.value <= 15.75) {
				priceNetto = calculated_power.value * 3310;
			} else if (calculated_power.value <= 16.125) {
				priceNetto = calculated_power.value * 3300;
			} else if (calculated_power.value <= 16.5) {
				priceNetto = calculated_power.value * 3289;
			} else if (calculated_power.value <= 16.875) {
				priceNetto = calculated_power.value * 3279;
			} else if (calculated_power.value <= 17.25) {
				priceNetto = calculated_power.value * 3330;
			} else if (calculated_power.value <= 17.625) {
				priceNetto = calculated_power.value * 3320;
			} else if (calculated_power.value <= 18.0) {
				priceNetto = calculated_power.value * 3310;
			} else if (calculated_power.value <= 18.375) {
				priceNetto = calculated_power.value * 3300;
			} else if (calculated_power.value <= 18.75) {
				priceNetto = calculated_power.value * 3291;
			} else if (calculated_power.value <= 19.125) {
				priceNetto = calculated_power.value * 3282;
			} else if (calculated_power.value <= 19.5) {
				priceNetto = calculated_power.value * 3274;
			} else if (calculated_power.value <= 19.875) {
				priceNetto = calculated_power.value * 3284;
			} else if (calculated_power.value <= 20.25) {
				priceNetto = calculated_power.value * 3276;
			} else if (calculated_power.value <= 20.625) {
				priceNetto = calculated_power.value * 3268;
			} else if (calculated_power.value <= 21.0) {
				priceNetto = calculated_power.value * 3260;
			} else if (calculated_power.value <= 21.375) {
				priceNetto = calculated_power.value * 3253;
			} else if (calculated_power.value <= 21.75) {
				priceNetto = calculated_power.value * 3246;
			} else if (calculated_power.value <= 22.125) {
				priceNetto = calculated_power.value * 3239;
			} else if (calculated_power.value <= 22.5) {
				priceNetto = calculated_power.value * 3232;
			} else if (calculated_power.value <= 22.875) {
				priceNetto = calculated_power.value * 3226;
			} else if (calculated_power.value <= 23.25) {
				priceNetto = calculated_power.value * 3220;
			} else if (calculated_power.value <= 23.625) {
				priceNetto = calculated_power.value * 3214;
			} else if (calculated_power.value <= 24.0) {
				priceNetto = calculated_power.value * 3208;
			} else if (calculated_power.value <= 24.375) {
				priceNetto = calculated_power.value * 3243;
			} else if (calculated_power.value <= 24.75) {
				priceNetto = calculated_power.value * 3237;
			} else if (calculated_power.value <= 25.125) {
				priceNetto = calculated_power.value * 3231;
			} else if (calculated_power.value <= 25.5) {
				priceNetto = calculated_power.value * 3225;
			} else if (calculated_power.value <= 25.875) {
				priceNetto = calculated_power.value * 3220;
			} else if (calculated_power.value <= 26.25) {
				priceNetto = calculated_power.value * 3214;
			} else if (calculated_power.value <= 26.625) {
				priceNetto = calculated_power.value * 3209;
			} else if (calculated_power.value <= 27.0) {
				priceNetto = calculated_power.value * 3204;
			} else if (calculated_power.value <= 27.375) {
				priceNetto = calculated_power.value * 3199;
			} else if (calculated_power.value <= 27.75) {
				priceNetto = calculated_power.value * 3194;
			} else if (calculated_power.value <= 28.125) {
				priceNetto = calculated_power.value * 3189;
			} else if (calculated_power.value <= 28.5) {
				priceNetto = calculated_power.value * 3185;
			} else if (calculated_power.value <= 28.875) {
				priceNetto = calculated_power.value * 3180;
			} else if (calculated_power.value <= 29.25) {
				priceNetto = calculated_power.value * 3176;
			} else if (calculated_power.value <= 29.625) {
				priceNetto = calculated_power.value * 3184;
			} else if (calculated_power.value <= 30.0) {
				priceNetto = calculated_power.value * 3180;
			} else if (calculated_power.value <= 30.375) {
				priceNetto = calculated_power.value * 3176;
			} else if (calculated_power.value <= 30.75) {
				priceNetto = calculated_power.value * 3073;
			} else if (calculated_power.value <= 31.125) {
				priceNetto = calculated_power.value * 3069;
			} else if (calculated_power.value <= 31.5) {
				priceNetto = calculated_power.value * 3065;
			} else if (calculated_power.value <= 31.875) {
				priceNetto = calculated_power.value * 3061;
			} else if (calculated_power.value <= 32.25) {
				priceNetto = calculated_power.value * 3057;
			} else if (calculated_power.value <= 32.625) {
				priceNetto = calculated_power.value * 3054;
			} else if (calculated_power.value <= 33.0) {
				priceNetto = calculated_power.value * 3050;
			} else if (calculated_power.value <= 33.375) {
				priceNetto = calculated_power.value * 3047;
			} else if (calculated_power.value <= 33.75) {
				priceNetto = calculated_power.value * 3043;
			} else if (calculated_power.value <= 34.125) {
				priceNetto = calculated_power.value * 3040;
			} else if (calculated_power.value <= 34.5) {
				priceNetto = calculated_power.value * 3037;
			} else if (calculated_power.value <= 34.875) {
				priceNetto = calculated_power.value * 3034;
			} else if (calculated_power.value <= 35.25) {
				priceNetto = calculated_power.value * 3031;
			} else if (calculated_power.value <= 35.625) {
				priceNetto = calculated_power.value * 3056;
			} else if (calculated_power.value <= 36.0) {
				priceNetto = calculated_power.value * 3052;
			} else if (calculated_power.value <= 36.375) {
				priceNetto = calculated_power.value * 3049;
			} else if (calculated_power.value <= 36.75) {
				priceNetto = calculated_power.value * 3046;
			} else if (calculated_power.value <= 37.125) {
				priceNetto = calculated_power.value * 3043;
			} else if (calculated_power.value <= 37.5) {
				priceNetto = calculated_power.value * 3040;
			} else if (calculated_power.value <= 37.875) {
				priceNetto = calculated_power.value * 3037;
			} else if (calculated_power.value <= 38.25) {
				priceNetto = calculated_power.value * 3034;
			} else if (calculated_power.value <= 38.625) {
				priceNetto = calculated_power.value * 3031;
			} else if (calculated_power.value <= 39.0) {
				priceNetto = calculated_power.value * 3028;
			} else if (calculated_power.value <= 39.375) {
				priceNetto = calculated_power.value * 3026;
			} else if (calculated_power.value <= 39.75) {
				priceNetto = calculated_power.value * 3035;
			} else if (calculated_power.value <= 40.125) {
				priceNetto = calculated_power.value * 3032;
			} else if (calculated_power.value <= 40.5) {
				priceNetto = calculated_power.value * 3029;
			} else if (calculated_power.value <= 40.875) {
				priceNetto = calculated_power.value * 3027;
			} else if (calculated_power.value <= 41.25) {
				priceNetto = calculated_power.value * 3024;
			} else if (calculated_power.value <= 41.625) {
				priceNetto = calculated_power.value * 3021;
			} else if (calculated_power.value <= 42.0) {
				priceNetto = calculated_power.value * 3019;
			} else if (calculated_power.value <= 42.375) {
				priceNetto = calculated_power.value * 3016;
			} else if (calculated_power.value <= 42.75) {
				priceNetto = calculated_power.value * 3014;
			} else if (calculated_power.value <= 43.125) {
				priceNetto = calculated_power.value * 3012;
			} else if (calculated_power.value <= 43.5) {
				priceNetto = calculated_power.value * 3009;
			} else if (calculated_power.value <= 43.875) {
				priceNetto = calculated_power.value * 3007;
			} else if (calculated_power.value <= 44.25) {
				priceNetto = calculated_power.value * 3005;
			} else if (calculated_power.value <= 44.625) {
				priceNetto = calculated_power.value * 3003;
			} else if (calculated_power.value <= 45.0) {
				priceNetto = calculated_power.value * 3000;
			} else if (calculated_power.value <= 45.375) {
				priceNetto = calculated_power.value * 2998;
			} else if (calculated_power.value <= 45.75) {
				priceNetto = calculated_power.value * 3026;
			} else if (calculated_power.value <= 46.125) {
				priceNetto = calculated_power.value * 3024;
			} else if (calculated_power.value <= 46.5) {
				priceNetto = calculated_power.value * 3021;
			} else if (calculated_power.value <= 46.875) {
				priceNetto = calculated_power.value * 3019;
			} else if (calculated_power.value <= 47.25) {
				priceNetto = calculated_power.value * 3017;
			} else if (calculated_power.value <= 47.625) {
				priceNetto = calculated_power.value * 3015;
			} else if (calculated_power.value <= 48.0) {
				priceNetto = calculated_power.value * 3013;
			} else if (calculated_power.value <= 48.375) {
				priceNetto = calculated_power.value * 3010;
			} else if (calculated_power.value <= 48.75) {
				priceNetto = calculated_power.value * 3008;
			} else if (calculated_power.value <= 49.125) {
				priceNetto = calculated_power.value * 3006;
			} else if (calculated_power.value <= 49.5) {
				priceNetto = calculated_power.value * 3004;
			} else if (calculated_power.value > 49.5) {
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
				priceNetto = calculated_power.value * 4943;
			} else if (calculated_power.value <= 2.625) {
				priceNetto = calculated_power.value * 4628;
			} else if (calculated_power.value <= 3.0) {
				priceNetto = calculated_power.value * 4457;
			} else if (calculated_power.value <= 3.375) {
				priceNetto = calculated_power.value * 4166;
			} else if (calculated_power.value <= 3.75) {
				priceNetto = calculated_power.value * 4162;
			}
		}
		if (inverter_phase.value == 3) {
			if (calculated_power.value <= 2.25) {
				priceNetto = calculated_power.value * 5030;
			} else if (calculated_power.value <= 2.625) {
				priceNetto = calculated_power.value * 4812;
			} else if (calculated_power.value <= 3.0) {
				priceNetto = calculated_power.value * 4627;
			} else if (calculated_power.value <= 3.375) {
				priceNetto = calculated_power.value * 4415;
			} else if (calculated_power.value <= 3.75) {
				priceNetto = calculated_power.value * 4319;
			} else if (calculated_power.value <= 4.125) {
				priceNetto = calculated_power.value * 4214;
			} else if (calculated_power.value <= 4.5) {
				priceNetto = calculated_power.value * 4127;
			} else if (calculated_power.value <= 4.875) {
				priceNetto = calculated_power.value * 4090;
			} else if (calculated_power.value <= 5.25) {
				priceNetto = calculated_power.value * 4024;
			} else if (calculated_power.value <= 5.625) {
				priceNetto = calculated_power.value * 3867;
			} else if (calculated_power.value <= 6.0) {
				priceNetto = calculated_power.value * 3917;
			} else if (calculated_power.value <= 6.375) {
				priceNetto = calculated_power.value * 3919;
			} else if (calculated_power.value <= 6.75) {
				priceNetto = calculated_power.value * 3966;
			} else if (calculated_power.value <= 7.125) {
				priceNetto = calculated_power.value * 3924;
			} else if (calculated_power.value <= 7.5) {
				priceNetto = calculated_power.value * 3918;
			} else if (calculated_power.value <= 7.875) {
				priceNetto = calculated_power.value * 3883;
			} else if (calculated_power.value <= 8.25) {
				priceNetto = calculated_power.value * 3850;
			} else if (calculated_power.value <= 8.625) {
				priceNetto = calculated_power.value * 3820;
			} else if (calculated_power.value <= 9.0) {
				priceNetto = calculated_power.value * 3793;
			} else if (calculated_power.value <= 9.375) {
				priceNetto = calculated_power.value * 3768;
			} else if (calculated_power.value <= 9.75) {
				priceNetto = calculated_power.value * 3803;
			} else if (calculated_power.value <= 10.125) {
				priceNetto = calculated_power.value * 3717;
			} else if (calculated_power.value <= 10.5) {
				priceNetto = calculated_power.value * 3639;
			} else if (calculated_power.value <= 10.875) {
				priceNetto = calculated_power.value * 3558;
			} else if (calculated_power.value <= 11.25) {
				priceNetto = calculated_power.value * 3487;
			} else if (calculated_power.value <= 11.625) {
				priceNetto = calculated_power.value * 3454;
			} else if (calculated_power.value <= 12.0) {
				priceNetto = calculated_power.value * 3503;
			} else if (calculated_power.value <= 12.375) {
				priceNetto = calculated_power.value * 3485;
			} else if (calculated_power.value <= 12.75) {
				priceNetto = calculated_power.value * 3469;
			} else if (calculated_power.value <= 13.125) {
				priceNetto = calculated_power.value * 3453;
			} else if (calculated_power.value <= 13.5) {
				priceNetto = calculated_power.value * 3438;
			} else if (calculated_power.value <= 13.875) {
				priceNetto = calculated_power.value * 3424;
			} else if (calculated_power.value <= 14.25) {
				priceNetto = calculated_power.value * 3411;
			} else if (calculated_power.value <= 14.625) {
				priceNetto = calculated_power.value * 3398;
			} else if (calculated_power.value <= 15.0) {
				priceNetto = calculated_power.value * 3414;
			} else if (calculated_power.value <= 15.375) {
				priceNetto = calculated_power.value * 3402;
			} else if (calculated_power.value <= 15.75) {
				priceNetto = calculated_power.value * 3390;
			} else if (calculated_power.value <= 16.125) {
				priceNetto = calculated_power.value * 3380;
			} else if (calculated_power.value <= 16.5) {
				priceNetto = calculated_power.value * 3369;
			} else if (calculated_power.value <= 16.875) {
				priceNetto = calculated_power.value * 3359;
			} else if (calculated_power.value <= 17.25) {
				priceNetto = calculated_power.value * 3410;
			} else if (calculated_power.value <= 17.625) {
				priceNetto = calculated_power.value * 3400;
			} else if (calculated_power.value <= 18.0) {
				priceNetto = calculated_power.value * 3390;
			} else if (calculated_power.value <= 18.375) {
				priceNetto = calculated_power.value * 3380;
			} else if (calculated_power.value <= 18.75) {
				priceNetto = calculated_power.value * 3371;
			} else if (calculated_power.value <= 19.125) {
				priceNetto = calculated_power.value * 3362;
			} else if (calculated_power.value <= 19.5) {
				priceNetto = calculated_power.value * 3354;
			} else if (calculated_power.value <= 19.875) {
				priceNetto = calculated_power.value * 3364;
			} else if (calculated_power.value <= 20.25) {
				priceNetto = calculated_power.value * 3356;
			} else if (calculated_power.value <= 20.625) {
				priceNetto = calculated_power.value * 3348;
			} else if (calculated_power.value <= 21.0) {
				priceNetto = calculated_power.value * 3340;
			} else if (calculated_power.value <= 21.375) {
				priceNetto = calculated_power.value * 3333;
			} else if (calculated_power.value <= 21.75) {
				priceNetto = calculated_power.value * 3326;
			} else if (calculated_power.value <= 22.125) {
				priceNetto = calculated_power.value * 3319;
			} else if (calculated_power.value <= 22.5) {
				priceNetto = calculated_power.value * 3312;
			} else if (calculated_power.value <= 22.875) {
				priceNetto = calculated_power.value * 3306;
			} else if (calculated_power.value <= 23.25) {
				priceNetto = calculated_power.value * 3300;
			} else if (calculated_power.value <= 23.625) {
				priceNetto = calculated_power.value * 3294;
			} else if (calculated_power.value <= 24.0) {
				priceNetto = calculated_power.value * 3288;
			} else if (calculated_power.value <= 24.375) {
				priceNetto = calculated_power.value * 3323;
			} else if (calculated_power.value <= 24.75) {
				priceNetto = calculated_power.value * 3317;
			} else if (calculated_power.value <= 25.125) {
				priceNetto = calculated_power.value * 3311;
			} else if (calculated_power.value <= 25.5) {
				priceNetto = calculated_power.value * 3305;
			} else if (calculated_power.value <= 25.875) {
				priceNetto = calculated_power.value * 3300;
			} else if (calculated_power.value <= 26.25) {
				priceNetto = calculated_power.value * 3294;
			} else if (calculated_power.value <= 26.625) {
				priceNetto = calculated_power.value * 3289;
			} else if (calculated_power.value <= 27.0) {
				priceNetto = calculated_power.value * 3284;
			} else if (calculated_power.value <= 27.375) {
				priceNetto = calculated_power.value * 3279;
			} else if (calculated_power.value <= 27.75) {
				priceNetto = calculated_power.value * 3274;
			} else if (calculated_power.value <= 28.125) {
				priceNetto = calculated_power.value * 3269;
			} else if (calculated_power.value <= 28.5) {
				priceNetto = calculated_power.value * 3265;
			} else if (calculated_power.value <= 28.875) {
				priceNetto = calculated_power.value * 3260;
			} else if (calculated_power.value <= 29.25) {
				priceNetto = calculated_power.value * 3256;
			} else if (calculated_power.value <= 29.625) {
				priceNetto = calculated_power.value * 3264;
			} else if (calculated_power.value <= 30.0) {
				priceNetto = calculated_power.value * 3260;
			} else if (calculated_power.value <= 30.375) {
				priceNetto = calculated_power.value * 3256;
			} else if (calculated_power.value <= 30.75) {
				priceNetto = calculated_power.value * 3153;
			} else if (calculated_power.value <= 31.125) {
				priceNetto = calculated_power.value * 3149;
			} else if (calculated_power.value <= 31.5) {
				priceNetto = calculated_power.value * 3145;
			} else if (calculated_power.value <= 31.875) {
				priceNetto = calculated_power.value * 3141;
			} else if (calculated_power.value <= 32.25) {
				priceNetto = calculated_power.value * 3137;
			} else if (calculated_power.value <= 32.625) {
				priceNetto = calculated_power.value * 3134;
			} else if (calculated_power.value <= 33.0) {
				priceNetto = calculated_power.value * 3130;
			} else if (calculated_power.value <= 33.375) {
				priceNetto = calculated_power.value * 3127;
			} else if (calculated_power.value <= 33.75) {
				priceNetto = calculated_power.value * 3123;
			} else if (calculated_power.value <= 34.125) {
				priceNetto = calculated_power.value * 3120;
			} else if (calculated_power.value <= 34.5) {
				priceNetto = calculated_power.value * 3117;
			} else if (calculated_power.value <= 34.875) {
				priceNetto = calculated_power.value * 3114;
			} else if (calculated_power.value <= 35.25) {
				priceNetto = calculated_power.value * 3111;
			} else if (calculated_power.value <= 35.625) {
				priceNetto = calculated_power.value * 3136;
			} else if (calculated_power.value <= 36.0) {
				priceNetto = calculated_power.value * 3132;
			} else if (calculated_power.value <= 36.375) {
				priceNetto = calculated_power.value * 3129;
			} else if (calculated_power.value <= 36.75) {
				priceNetto = calculated_power.value * 3126;
			} else if (calculated_power.value <= 37.125) {
				priceNetto = calculated_power.value * 3123;
			} else if (calculated_power.value <= 37.5) {
				priceNetto = calculated_power.value * 3120;
			} else if (calculated_power.value <= 37.875) {
				priceNetto = calculated_power.value * 3117;
			} else if (calculated_power.value <= 38.25) {
				priceNetto = calculated_power.value * 3114;
			} else if (calculated_power.value <= 38.625) {
				priceNetto = calculated_power.value * 3111;
			} else if (calculated_power.value <= 39.0) {
				priceNetto = calculated_power.value * 3108;
			} else if (calculated_power.value <= 39.375) {
				priceNetto = calculated_power.value * 3106;
			} else if (calculated_power.value <= 39.75) {
				priceNetto = calculated_power.value * 3115;
			} else if (calculated_power.value <= 40.125) {
				priceNetto = calculated_power.value * 3112;
			} else if (calculated_power.value <= 40.5) {
				priceNetto = calculated_power.value * 3109;
			} else if (calculated_power.value <= 40.875) {
				priceNetto = calculated_power.value * 3093;
			} else if (calculated_power.value <= 41.25) {
				priceNetto = calculated_power.value * 3075;
			} else if (calculated_power.value <= 41.625) {
				priceNetto = calculated_power.value * 3060;
			} else if (calculated_power.value <= 42.0) {
				priceNetto = calculated_power.value * 3046;
			} else if (calculated_power.value <= 42.375) {
				priceNetto = calculated_power.value * 3038;
			} else if (calculated_power.value <= 42.75) {
				priceNetto = calculated_power.value * 3041;
			} else if (calculated_power.value <= 43.125) {
				priceNetto = calculated_power.value * 3038;
			} else if (calculated_power.value <= 43.5) {
				priceNetto = calculated_power.value * 3036;
			} else if (calculated_power.value <= 43.875) {
				priceNetto = calculated_power.value * 3034;
			} else if (calculated_power.value <= 44.25) {
				priceNetto = calculated_power.value * 3032;
			} else if (calculated_power.value <= 44.625) {
				priceNetto = calculated_power.value * 3029;
			} else if (calculated_power.value <= 45.0) {
				priceNetto = calculated_power.value * 3027;
			} else if (calculated_power.value <= 45.375) {
				priceNetto = calculated_power.value * 3031;
			} else if (calculated_power.value <= 45.75) {
				priceNetto = calculated_power.value * 3052;
			} else if (calculated_power.value <= 46.125) {
				priceNetto = calculated_power.value * 3050;
			} else if (calculated_power.value <= 46.5) {
				priceNetto = calculated_power.value * 3048;
			} else if (calculated_power.value <= 46.875) {
				priceNetto = calculated_power.value * 3046;
			} else if (calculated_power.value <= 47.25) {
				priceNetto = calculated_power.value * 3043;
			} else if (calculated_power.value <= 47.625) {
				priceNetto = calculated_power.value * 3041;
			} else if (calculated_power.value <= 48.0) {
				priceNetto = calculated_power.value * 3039;
			} else if (calculated_power.value <= 48.375) {
				priceNetto = calculated_power.value * 3037;
			} else if (calculated_power.value <= 48.75) {
				priceNetto = calculated_power.value * 3035;
			} else if (calculated_power.value <= 49.125) {
				priceNetto = calculated_power.value * 3033;
			} else if (calculated_power.value <= 49.5) {
				priceNetto = calculated_power.value * 3031;
			} else if (calculated_power.value > 49.5) {
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
				priceNetto = calculated_power.value * 5396;
			} else if (calculated_power.value <= 3.0) {
				priceNetto = calculated_power.value * 4911;
			} else if (calculated_power.value <= 3.75) {
				priceNetto = calculated_power.value * 4392;
			}
		}
		if (inverter_phase.value == 3) {
			if (calculated_power.value <= 2.25) {
				priceNetto = calculated_power.value * 5530;
			} else if (calculated_power.value <= 2.625) {
				priceNetto = calculated_power.value * 5012;
			} else if (calculated_power.value <= 3.0) {
				priceNetto = calculated_power.value * 4793;
			} else if (calculated_power.value <= 3.75) {
				priceNetto = calculated_power.value * 4586;
			} else if (calculated_power.value <= 4.5) {
				priceNetto = calculated_power.value * 4394;
			} else if (calculated_power.value <= 5.25) {
				priceNetto = calculated_power.value * 4237;
			} else if (calculated_power.value <= 6.0) {
				priceNetto = calculated_power.value * 4130;
			} else if (calculated_power.value <= 6.75) {
				priceNetto = calculated_power.value * 4179;
			} else if (calculated_power.value <= 7.5) {
				priceNetto = calculated_power.value * 4078;
			} else if (calculated_power.value <= 8.25) {
				priceNetto = calculated_power.value * 4010;
			} else if (calculated_power.value <= 9.0) {
				priceNetto = calculated_power.value * 3953;
			} else if (calculated_power.value <= 9.75) {
				priceNetto = calculated_power.value * 3963;
			} else if (calculated_power.value <= 10.5) {
				priceNetto = calculated_power.value * 3781;
			} else if (calculated_power.value <= 11.25) {
				priceNetto = calculated_power.value * 3631;
			} else if (calculated_power.value <= 12.0) {
				priceNetto = calculated_power.value * 3610;
			} else if (calculated_power.value <= 12.75) {
				priceNetto = calculated_power.value * 3575;
			} else if (calculated_power.value <= 13.5) {
				priceNetto = calculated_power.value * 3545;
			} else if (calculated_power.value <= 14.25) {
				priceNetto = calculated_power.value * 3518;
			} else if (calculated_power.value <= 15.0) {
				priceNetto = calculated_power.value * 3521;
			} else if (calculated_power.value <= 15.75) {
				priceNetto = calculated_power.value * 3497;
			} else if (calculated_power.value <= 16.5) {
				priceNetto = calculated_power.value * 3476;
			} else if (calculated_power.value <= 17.25) {
				priceNetto = calculated_power.value * 3517;
			} else if (calculated_power.value <= 18.0) {
				priceNetto = calculated_power.value * 3496;
			} else if (calculated_power.value <= 18.75) {
				priceNetto = calculated_power.value * 3478;
			} else if (calculated_power.value <= 19.5) {
				priceNetto = calculated_power.value * 3460;
			} else if (calculated_power.value <= 20.25) {
				priceNetto = calculated_power.value * 3409;
			} else if (calculated_power.value <= 21.0) {
				priceNetto = calculated_power.value * 3393;
			} else if (calculated_power.value <= 21.75) {
				priceNetto = calculated_power.value * 3379;
			} else if (calculated_power.value <= 22.5) {
				priceNetto = calculated_power.value * 3365;
			} else if (calculated_power.value <= 23.25) {
				priceNetto = calculated_power.value * 3353;
			} else if (calculated_power.value <= 24.0) {
				priceNetto = calculated_power.value * 3341;
			} else if (calculated_power.value <= 24.75) {
				priceNetto = calculated_power.value * 3370;
			} else if (calculated_power.value <= 25.5) {
				priceNetto = calculated_power.value * 3359;
			} else if (calculated_power.value <= 26.25) {
				priceNetto = calculated_power.value * 3348;
			} else if (calculated_power.value <= 27.0) {
				priceNetto = calculated_power.value * 3337;
			} else if (calculated_power.value <= 27.75) {
				priceNetto = calculated_power.value * 3327;
			} else if (calculated_power.value <= 28.5) {
				priceNetto = calculated_power.value * 3318;
			} else if (calculated_power.value <= 29.25) {
				priceNetto = calculated_power.value * 3309;
			} else if (calculated_power.value <= 30.0) {
				priceNetto = calculated_power.value * 3313;
			} else if (calculated_power.value <= 30.75) {
				priceNetto = calculated_power.value * 3206;
			} else if (calculated_power.value <= 31.5) {
				priceNetto = calculated_power.value * 3145;
			} else if (calculated_power.value <= 32.25) {
				priceNetto = calculated_power.value * 3137;
			} else if (calculated_power.value <= 33.0) {
				priceNetto = calculated_power.value * 3130;
			} else if (calculated_power.value <= 33.75) {
				priceNetto = calculated_power.value * 3123;
			} else if (calculated_power.value <= 34.5) {
				priceNetto = calculated_power.value * 3117;
			} else if (calculated_power.value <= 35.25) {
				priceNetto = calculated_power.value * 3111;
			} else if (calculated_power.value <= 36.0) {
				priceNetto = calculated_power.value * 3132;
			} else if (calculated_power.value <= 36.75) {
				priceNetto = calculated_power.value * 3126;
			} else if (calculated_power.value <= 37.5) {
				priceNetto = calculated_power.value * 3120;
			} else if (calculated_power.value <= 38.25) {
				priceNetto = calculated_power.value * 3114;
			} else if (calculated_power.value <= 39.0) {
				priceNetto = calculated_power.value * 3108;
			} else if (calculated_power.value <= 39.75) {
				priceNetto = calculated_power.value * 3115;
			} else if (calculated_power.value <= 40.5) {
				priceNetto = calculated_power.value * 3109;
			} else if (calculated_power.value <= 41.25) {
				priceNetto = calculated_power.value * 3075;
			} else if (calculated_power.value <= 42.0) {
				priceNetto = calculated_power.value * 3046;
			} else if (calculated_power.value <= 42.75) {
				priceNetto = calculated_power.value * 3041;
			} else if (calculated_power.value <= 43.5) {
				priceNetto = calculated_power.value * 3036;
			} else if (calculated_power.value <= 44.25) {
				priceNetto = calculated_power.value * 3032;
			} else if (calculated_power.value <= 45.0) {
				priceNetto = calculated_power.value * 3027;
			} else if (calculated_power.value <= 45.75) {
				priceNetto = calculated_power.value * 3052;
			} else if (calculated_power.value <= 46.5) {
				priceNetto = calculated_power.value * 3048;
			} else if (calculated_power.value <= 47.25) {
				priceNetto = calculated_power.value * 3043;
			} else if (calculated_power.value <= 48.0) {
				priceNetto = calculated_power.value * 3039;
			} else if (calculated_power.value <= 48.75) {
				priceNetto = calculated_power.value * 3035;
			} else if (calculated_power.value <= 49.5) {
				priceNetto = calculated_power.value * 3031;
			} else if (calculated_power.value > 49.5) {
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
	if (document.getElementById('hoymiles-inwerter').selected == true) {
		if (roofing.value == 0) {
			if (calculated_power.value >= 2.05) {
				priceNetto = 13358.22;
			}
			if (calculated_power.value >= 2.46) {
				priceNetto = 15149.28;
			}
			if (calculated_power.value >= 2.87) {
				priceNetto = 16920.25;
			}
			if (calculated_power.value >= 3.28) {
				priceNetto = 17995.05;
			}
			if (calculated_power.value >= 3.69) {
				priceNetto = 19576.05;
			}
			if (calculated_power.value >= 4.1) {
				priceNetto = 21149.04;
			}
			if (calculated_power.value >= 4.51) {
				priceNetto = 22467.51;
			}
			if (calculated_power.value >= 4.92) {
				priceNetto = 23998.43;
			}
			if (calculated_power.value >= 5.33) {
				priceNetto = 26293.79;
			}
			if (calculated_power.value >= 5.74) {
				priceNetto = 27504.46;
			}
			if (calculated_power.value >= 6.15) {
				priceNetto = 29042.17;
			}
			if (calculated_power.value >= 6.56) {
				priceNetto = 30580.38;
			}
			if (calculated_power.value >= 6.97) {
				priceNetto = 33423.61;
			}
			if (calculated_power.value >= 7.38) {
				priceNetto = 34723.74;
			}
			if (calculated_power.value >= 7.79) {
				priceNetto = 36088.79;
			}
			if (calculated_power.value >= 8.2) {
				priceNetto = 37184.51;
			}
			if (calculated_power.value >= 8.61) {
				priceNetto = 38268.71;
			}
			if (calculated_power.value >= 9.02) {
				priceNetto = 39242.67;
			}
			if (calculated_power.value >= 9.43) {
				priceNetto = 40874.33;
			}
			if (calculated_power.value >= 9.84) {
				priceNetto = 41786.96;
			}
			if (calculated_power.value >= 10.25) {
				priceNetto = 43823.47;
			}
			if (calculated_power.value >= 10.66) {
				priceNetto = 46581.79;
			}
			if (calculated_power.value >= 11.07) {
				priceNetto = 48256.33;
			}
			if (calculated_power.value >= 11.48) {
				priceNetto = 49692.02;
			}
			if (calculated_power.value >= 11.89) {
				priceNetto = 51781.43;
			}
			if (calculated_power.value >= 12.3) {
				priceNetto = 52849.17;
			}
			if (calculated_power.value >= 12.71) {
				priceNetto = 53257.15;
			}
			if (calculated_power.value >= 13.12) {
				priceNetto = 54636.48;
			}
			if (calculated_power.value >= 13.53) {
				priceNetto = 58316.82;
			}
			if (calculated_power.value >= 14.28) {
				priceNetto = 59466.25;
			}
			if (calculated_power.value >= 14.35) {
				priceNetto = 60970.85;
			}
			if (calculated_power.value >= 14.76) {
				priceNetto = 62386.02;
			}
			if (calculated_power.value >= 15.17) {
				priceNetto = 64303.64;
			}
			if (calculated_power.value >= 15.58) {
				priceNetto = 56439.37;
			}
			if (calculated_power.value >= 15.99) {
				priceNetto = 57685.77;
			}
			if (calculated_power.value >= 16.4) {
				priceNetto = 58848.67;
			}
			if (calculated_power.value >= 16.81) {
				priceNetto = 61273.33;
			}
			if (calculated_power.value >= 17.22) {
				priceNetto = 62260.43;
			}
			if (calculated_power.value >= 17.63) {
				priceNetto = 63467.8;
			}
			if (calculated_power.value >= 18.04) {
				priceNetto = 64618.43;
			}
			if (calculated_power.value >= 18.45) {
				priceNetto = 66238.83;
			}
			if (calculated_power.value >= 18.86) {
				priceNetto = 67385.37;
			}
			if (calculated_power.value >= 19.27) {
				priceNetto = 68760.35;
			}
			if (calculated_power.value >= 19.68) {
				priceNetto = 69906.9;
			}
			if (calculated_power.value >= 20.09) {
				priceNetto = 67511.35;
			}
			if (calculated_power.value >= 20.5) {
				priceNetto = 68456.94;
			}
			if (calculated_power.value >= 20.91) {
				priceNetto = 70650.96;
			}
			if (calculated_power.value >= 21.32) {
				priceNetto = 71626.96;
			}
			if (calculated_power.value >= 21.73) {
				priceNetto = 73246.27;
			}
			if (calculated_power.value >= 22.14) {
				priceNetto = 74211.86;
			}
			if (calculated_power.value >= 22.55) {
				priceNetto = 75405.88;
			}
			if (calculated_power.value >= 22.96) {
				priceNetto = 76371.46;
			}
			if (calculated_power.value >= 23.37) {
				priceNetto = 77990.77;
			}
			if (calculated_power.value >= 23.78) {
				priceNetto = 78444.93;
			}
			if (calculated_power.value >= 24.19) {
				priceNetto = 79630.14;
			}
			if (calculated_power.value >= 24.6) {
				priceNetto = 80787.3;
			}
			if (calculated_power.value >= 25.01) {
				priceNetto = 82617.64;
			}
			if (calculated_power.value >= 25.42) {
				priceNetto = 83574.4;
			}
			if (calculated_power.value >= 25.83) {
				priceNetto = 84759.6;
			}
			if (calculated_power.value >= 26.24) {
				priceNetto = 85716.37;
			}
			if (calculated_power.value >= 26.65) {
				priceNetto = 87427.06;
			}
			if (calculated_power.value >= 27.06) {
				priceNetto = 88383.83;
			}
			if (calculated_power.value >= 27.47) {
				priceNetto = 89569.03;
			}
			if (calculated_power.value >= 27.88) {
				priceNetto = 90726.2;
			}
			if (calculated_power.value >= 28.29) {
				priceNetto = 92336.69;
			}
			if (calculated_power.value >= 28.7) {
				priceNetto = 93293.46;
			}
			if (calculated_power.value >= 29.11) {
				priceNetto = 94478.66;
			}
			if (calculated_power.value >= 29.52) {
				priceNetto = 95435.43;
			}
			if (calculated_power.value >= 29.93) {
				priceNetto = 97045.92;
			}
			if (calculated_power.value >= 30.34) {
				priceNetto = 98002.69;
			}
			if (calculated_power.value >= 30.75) {
				priceNetto = 99187.89;
			}
			if (calculated_power.value >= 31.16) {
				priceNetto = 100144.65;
			}
			if (calculated_power.value >= 31.57) {
				priceNetto = 101775.99;
			}
			if (calculated_power.value >= 32.39) {
				priceNetto = 103917.96;
			}
			if (calculated_power.value >= 32.8) {
				priceNetto = 104874.72;
			}
			if (calculated_power.value >= 33.21) {
				priceNetto = 107191.63;
			}
			if (calculated_power.value >= 33.62) {
				priceNetto = 108148.39;
			}
			if (calculated_power.value >= 34.03) {
				priceNetto = 110035.0;
			}
			if (calculated_power.value >= 34.44) {
				priceNetto = 110991.76;
			}
			if (calculated_power.value >= 34.85) {
				priceNetto = 112602.25;
			}
			if (calculated_power.value >= 35.26) {
				priceNetto = 113559.02;
			}
			if (calculated_power.value >= 35.67) {
				priceNetto = 114744.22;
			}
			if (calculated_power.value >= 36.08) {
				priceNetto = 115700.99;
			}
			if (calculated_power.value >= 36.49) {
				priceNetto = 117332.32;
			}
			if (calculated_power.value >= 36.9) {
				priceNetto = 118289.09;
			}
			if (calculated_power.value >= 37.31) {
				priceNetto = 119474.29;
			}
			if (calculated_power.value >= 37.72) {
				priceNetto = 120431.06;
			}
			if (calculated_power.value >= 38.13) {
				priceNetto = 122041.55;
			}
			if (calculated_power.value >= 38.54) {
				priceNetto = 122998.32;
			}
			if (calculated_power.value >= 38.95) {
				priceNetto = 124183.52;
			}
			if (calculated_power.value >= 39.36) {
				priceNetto = 125140.29;
			}
			if (calculated_power.value >= 39.77) {
				priceNetto = 127502.28;
			}
			if (calculated_power.value >= 40.18) {
				priceNetto = 128459.05;
			}
			if (calculated_power.value >= 40.59) {
				priceNetto = 129644.25;
			}
			if (calculated_power.value >= 41.0) {
				priceNetto = 130601.01;
			}
			if (calculated_power.value >= 41.41) {
				priceNetto = 132382.85;
			}
			if (calculated_power.value >= 41.82) {
				priceNetto = 133808.55;
			}
			if (calculated_power.value >= 42.23) {
				priceNetto = 136021.12;
			}
			if (calculated_power.value >= 42.64) {
				priceNetto = 136977.89;
			}
			if (calculated_power.value >= 43.05) {
				priceNetto = 138588.38;
			}
			if (calculated_power.value >= 43.46) {
				priceNetto = 139545.15;
			}
			if (calculated_power.value >= 43.87) {
				priceNetto = 140730.35;
			}
			if (calculated_power.value >= 44.28) {
				priceNetto = 141687.12;
			}
			if (calculated_power.value >= 44.69) {
				priceNetto = 143297.61;
			}
			if (calculated_power.value >= 45.1) {
				priceNetto = 144254.38;
			}
			if (calculated_power.value >= 45.51) {
				priceNetto = 145439.58;
			}
			if (calculated_power.value >= 45.92) {
				priceNetto = 146396.34;
			}
			if (calculated_power.value >= 46.33) {
				priceNetto = 148006.84;
			}
			if (calculated_power.value >= 46.74) {
				priceNetto = 149464.6;
			}
			if (calculated_power.value >= 47.15) {
				priceNetto = 150649.81;
			}
			if (calculated_power.value >= 47.56) {
				priceNetto = 151606.57;
			}
			if (calculated_power.value >= 47.97) {
				priceNetto = 153217.07;
			}
			if (calculated_power.value >= 48.38) {
				priceNetto = 154173.83;
			}
			if (calculated_power.value >= 48.79) {
				priceNetto = 155359.03;
			}
			if (calculated_power.value >= 49.2) {
				priceNetto = 156315.8;
			}
			if (calculated_power.value >= 49.61) {
				priceNetto = 157270.0;
			}
		}

		if (roofing.value == 1) {
			if (calculated_power.value >= 2.05) {
				priceNetto = 13358.22;
			}
			if (calculated_power.value >= 2.46) {
				priceNetto = 15149.28;
			}
			if (calculated_power.value >= 2.87) {
				priceNetto = 16920.25;
			}
			if (calculated_power.value >= 3.28) {
				priceNetto = 17995.05;
			}
			if (calculated_power.value >= 3.69) {
				priceNetto = 19576.05;
			}
			if (calculated_power.value >= 4.1) {
				priceNetto = 21149.04;
			}
			if (calculated_power.value >= 4.51) {
				priceNetto = 22467.51;
			}
			if (calculated_power.value >= 4.92) {
				priceNetto = 23998.43;
			}
			if (calculated_power.value >= 5.33) {
				priceNetto = 26293.79;
			}
			if (calculated_power.value >= 5.74) {
				priceNetto = 27504.46;
			}
			if (calculated_power.value >= 6.15) {
				priceNetto = 29042.17;
			}
			if (calculated_power.value >= 6.56) {
				priceNetto = 30580.38;
			}
			if (calculated_power.value >= 6.97) {
				priceNetto = 33423.61;
			}
			if (calculated_power.value >= 7.38) {
				priceNetto = 34723.74;
			}
			if (calculated_power.value >= 7.79) {
				priceNetto = 36088.79;
			}
			if (calculated_power.value >= 8.2) {
				priceNetto = 37184.51;
			}
			if (calculated_power.value >= 8.61) {
				priceNetto = 38268.71;
			}
			if (calculated_power.value >= 9.02) {
				priceNetto = 39242.67;
			}
			if (calculated_power.value >= 9.43) {
				priceNetto = 40874.33;
			}
			if (calculated_power.value >= 9.84) {
				priceNetto = 41786.96;
			}
			if (calculated_power.value >= 10.25) {
				priceNetto = 44919.06;
			}
			if (calculated_power.value >= 10.66) {
				priceNetto = 47746.33;
			}
			if (calculated_power.value >= 11.07) {
				priceNetto = 49462.74;
			}
			if (calculated_power.value >= 11.48) {
				priceNetto = 50934.32;
			}
			if (calculated_power.value >= 11.89) {
				priceNetto = 53075.97;
			}
			if (calculated_power.value >= 12.3) {
				priceNetto = 54170.4;
			}
			if (calculated_power.value >= 12.71) {
				priceNetto = 54588.58;
			}
			if (calculated_power.value >= 13.12) {
				priceNetto = 56002.39;
			}
			if (calculated_power.value >= 13.53) {
				priceNetto = 59774.74;
			}
			if (calculated_power.value >= 14.28) {
				priceNetto = 60952.91;
			}
			if (calculated_power.value >= 14.35) {
				priceNetto = 62495.12;
			}
			if (calculated_power.value >= 14.76) {
				priceNetto = 63945.67;
			}
			if (calculated_power.value >= 15.17) {
				priceNetto = 65911.23;
			}
			if (calculated_power.value >= 15.58) {
				priceNetto = 57850.35;
			}
			if (calculated_power.value >= 15.99) {
				priceNetto = 59127.91;
			}
			if (calculated_power.value >= 16.4) {
				priceNetto = 60319.89;
			}
			if (calculated_power.value >= 16.81) {
				priceNetto = 62805.16;
			}
			if (calculated_power.value >= 17.22) {
				priceNetto = 63816.94;
			}
			if (calculated_power.value >= 17.63) {
				priceNetto = 65054.5;
			}
			if (calculated_power.value >= 18.04) {
				priceNetto = 66233.89;
			}
			if (calculated_power.value >= 18.45) {
				priceNetto = 67894.8;
			}
			if (calculated_power.value >= 18.86) {
				priceNetto = 69070.0;
			}
			if (calculated_power.value >= 19.27) {
				priceNetto = 70479.36;
			}
			if (calculated_power.value >= 19.68) {
				priceNetto = 71654.57;
			}
			if (calculated_power.value >= 20.09) {
				priceNetto = 69199.13;
			}
			if (calculated_power.value >= 20.5) {
				priceNetto = 70168.36;
			}
			if (calculated_power.value >= 20.91) {
				priceNetto = 72417.23;
			}
			if (calculated_power.value >= 21.32) {
				priceNetto = 73417.63;
			}
			if (calculated_power.value >= 21.73) {
				priceNetto = 75077.43;
			}
			if (calculated_power.value >= 22.14) {
				priceNetto = 76067.16;
			}
			if (calculated_power.value >= 22.55) {
				priceNetto = 77291.03;
			}
			if (calculated_power.value >= 22.96) {
				priceNetto = 78280.75;
			}
			if (calculated_power.value >= 23.37) {
				priceNetto = 79940.54;
			}
			if (calculated_power.value >= 23.78) {
				priceNetto = 80406.05;
			}
			if (calculated_power.value >= 24.19) {
				priceNetto = 81620.89;
			}
			if (calculated_power.value >= 24.6) {
				priceNetto = 82806.98;
			}
			if (calculated_power.value >= 25.01) {
				priceNetto = 84683.08;
			}
			if (calculated_power.value >= 25.42) {
				priceNetto = 85663.76;
			}
			if (calculated_power.value >= 25.83) {
				priceNetto = 86878.59;
			}
			if (calculated_power.value >= 26.24) {
				priceNetto = 87859.28;
			}
			if (calculated_power.value >= 26.65) {
				priceNetto = 89612.74;
			}
			if (calculated_power.value >= 27.06) {
				priceNetto = 90593.43;
			}
			if (calculated_power.value >= 27.47) {
				priceNetto = 91808.26;
			}
			if (calculated_power.value >= 27.88) {
				priceNetto = 92994.36;
			}
			if (calculated_power.value >= 28.29) {
				priceNetto = 94645.11;
			}
			if (calculated_power.value >= 28.7) {
				priceNetto = 95625.8;
			}
			if (calculated_power.value >= 29.11) {
				priceNetto = 96840.63;
			}
			if (calculated_power.value >= 29.52) {
				priceNetto = 97821.32;
			}
			if (calculated_power.value >= 29.93) {
				priceNetto = 99472.07;
			}
			if (calculated_power.value >= 30.34) {
				priceNetto = 100452.76;
			}
			if (calculated_power.value >= 30.75) {
				priceNetto = 101667.59;
			}
			if (calculated_power.value >= 31.16) {
				priceNetto = 102648.27;
			}
			if (calculated_power.value >= 31.57) {
				priceNetto = 104320.39;
			}
			if (calculated_power.value >= 32.39) {
				priceNetto = 106515.91;
			}
			if (calculated_power.value >= 32.8) {
				priceNetto = 107496.59;
			}
			if (calculated_power.value >= 33.21) {
				priceNetto = 109871.42;
			}
			if (calculated_power.value >= 33.62) {
				priceNetto = 110852.1;
			}
			if (calculated_power.value >= 34.03) {
				priceNetto = 112785.88;
			}
			if (calculated_power.value >= 34.44) {
				priceNetto = 113766.55;
			}
			if (calculated_power.value >= 34.85) {
				priceNetto = 115417.31;
			}
			if (calculated_power.value >= 35.26) {
				priceNetto = 116398.0;
			}
			if (calculated_power.value >= 35.67) {
				priceNetto = 117612.83;
			}
			if (calculated_power.value >= 36.08) {
				priceNetto = 118593.51;
			}
			if (calculated_power.value >= 36.49) {
				priceNetto = 120265.63;
			}
			if (calculated_power.value >= 36.9) {
				priceNetto = 121246.32;
			}
			if (calculated_power.value >= 37.31) {
				priceNetto = 122461.15;
			}
			if (calculated_power.value >= 37.72) {
				priceNetto = 123441.84;
			}
			if (calculated_power.value >= 38.13) {
				priceNetto = 125092.59;
			}
			if (calculated_power.value >= 38.54) {
				priceNetto = 126073.28;
			}
			if (calculated_power.value >= 38.95) {
				priceNetto = 127288.11;
			}
			if (calculated_power.value >= 39.36) {
				priceNetto = 128268.8;
			}
			if (calculated_power.value >= 39.77) {
				priceNetto = 130689.84;
			}
			if (calculated_power.value >= 40.18) {
				priceNetto = 131670.53;
			}
			if (calculated_power.value >= 40.59) {
				priceNetto = 132885.36;
			}
			if (calculated_power.value >= 41) {
				priceNetto = 133866.04;
			}
			if (calculated_power.value >= 41.41) {
				priceNetto = 135692.42;
			}
			if (calculated_power.value >= 41.82) {
				priceNetto = 137153.76;
			}
			if (calculated_power.value >= 42.23) {
				priceNetto = 139421.65;
			}
			if (calculated_power.value >= 42.64) {
				priceNetto = 140402.34;
			}
			if (calculated_power.value >= 43.05) {
				priceNetto = 142053.09;
			}
			if (calculated_power.value >= 43.46) {
				priceNetto = 143033.78;
			}
			if (calculated_power.value >= 43.87) {
				priceNetto = 144248.61;
			}
			if (calculated_power.value >= 44.28) {
				priceNetto = 145229.3;
			}
			if (calculated_power.value >= 44.69) {
				priceNetto = 146880.05;
			}
			if (calculated_power.value >= 45.1) {
				priceNetto = 147860.74;
			}
			if (calculated_power.value >= 45.51) {
				priceNetto = 149075.57;
			}
			if (calculated_power.value >= 45.92) {
				priceNetto = 150056.25;
			}
			if (calculated_power.value >= 46.33) {
				priceNetto = 151707.01;
			}
			if (calculated_power.value >= 46.74) {
				priceNetto = 153201.22;
			}
			if (calculated_power.value >= 47.15) {
				priceNetto = 154416.06;
			}
			if (calculated_power.value >= 47.56) {
				priceNetto = 155396.73;
			}
			if (calculated_power.value >= 47.97) {
				priceNetto = 157047.5;
			}
			if (calculated_power.value >= 48.38) {
				priceNetto = 158028.18;
			}
			if (calculated_power.value >= 48.79) {
				priceNetto = 159243.01;
			}
			if (calculated_power.value >= 49.2) {
				priceNetto = 160223.7;
			}
			if (calculated_power.value >= 49.61) {
				priceNetto = 161201.75;
			}
		}

		if (roofing.value == 2) {
			if (calculated_power >= 2.05) {
				priceNetto = 13358.22;
			}
			if (calculated_power >= 2.46) {
				priceNetto = 15149.28;
			}
			if (calculated_power >= 2.87) {
				priceNetto = 16920.25;
			}
			if (calculated_power >= 3.28) {
				priceNetto = 17995.05;
			}
			if (calculated_power >= 3.69) {
				priceNetto = 19576.05;
			}
			if (calculated_power >= 4.1) {
				priceNetto = 21149.04;
			}
			if (calculated_power >= 4.51) {
				priceNetto = 22467.51;
			}
			if (calculated_power >= 4.92) {
				priceNetto = 23998.43;
			}
			if (calculated_power >= 5.33) {
				priceNetto = 26293.79;
			}
			if (calculated_power >= 5.74) {
				priceNetto = 27504.46;
			}
			if (calculated_power >= 6.15) {
				priceNetto = 29042.17;
			}
			if (calculated_power >= 6.56) {
				priceNetto = 30580.38;
			}
			if (calculated_power >= 6.97) {
				priceNetto = 33423.61;
			}
			if (calculated_power >= 7.38) {
				priceNetto = 34723.74;
			}
			if (calculated_power >= 7.79) {
				priceNetto = 36088.79;
			}
			if (calculated_power >= 8.2) {
				priceNetto = 37184.51;
			}
			if (calculated_power >= 8.61) {
				priceNetto = 38268.71;
			}
			if (calculated_power >= 9.02) {
				priceNetto = 39242.67;
			}
			if (calculated_power >= 9.43) {
				priceNetto = 40874.33;
			}
			if (calculated_power >= 9.84) {
				priceNetto = 41786.96;
			}
			if (calculated_power >= 10.25) {
				priceNetto = 44919.06;
			}
			if (calculated_power >= 10.66) {
				priceNetto = 47746.33;
			}
			if (calculated_power >= 11.07) {
				priceNetto = 49462.74;
			}
			if (calculated_power >= 11.48) {
				priceNetto = 50934.32;
			}
			if (calculated_power >= 11.89) {
				priceNetto = 53075.97;
			}
			if (calculated_power >= 12.3) {
				priceNetto = 54170.4;
			}
			if (calculated_power >= 12.71) {
				priceNetto = 54588.58;
			}
			if (calculated_power >= 13.12) {
				priceNetto = 56002.39;
			}
			if (calculated_power >= 13.53) {
				priceNetto = 59774.74;
			}
			if (calculated_power >= 14.28) {
				priceNetto = 60952.91;
			}
			if (calculated_power >= 14.35) {
				priceNetto = 62495.12;
			}
			if (calculated_power >= 14.76) {
				priceNetto = 63945.67;
			}
			if (calculated_power >= 15.17) {
				priceNetto = 65911.23;
			}
			if (calculated_power >= 15.58) {
				priceNetto = 57850.35;
			}
			if (calculated_power >= 15.99) {
				priceNetto = 59127.91;
			}
			if (calculated_power >= 16.4) {
				priceNetto = 60319.89;
			}
			if (calculated_power >= 16.81) {
				priceNetto = 62805.16;
			}
			if (calculated_power >= 17.22) {
				priceNetto = 63816.94;
			}
			if (calculated_power >= 17.63) {
				priceNetto = 65054.5;
			}
			if (calculated_power >= 18.04) {
				priceNetto = 66233.89;
			}
			if (calculated_power >= 18.45) {
				priceNetto = 67894.8;
			}
			if (calculated_power >= 18.86) {
				priceNetto = 69070.0;
			}
			if (calculated_power >= 19.27) {
				priceNetto = 70479.36;
			}
			if (calculated_power >= 19.68) {
				priceNetto = 71654.57;
			}
			if (calculated_power >= 20.09) {
				priceNetto = 69199.13;
			}
			if (calculated_power >= 20.5) {
				priceNetto = 70168.36;
			}
			if (calculated_power >= 20.91) {
				priceNetto = 72417.23;
			}
			if (calculated_power >= 21.32) {
				priceNetto = 73417.63;
			}
			if (calculated_power >= 21.73) {
				priceNetto = 75077.43;
			}
			if (calculated_power >= 22.14) {
				priceNetto = 76067.16;
			}
			if (calculated_power >= 22.55) {
				priceNetto = 77291.03;
			}
			if (calculated_power >= 22.96) {
				priceNetto = 78280.75;
			}
			if (calculated_power >= 23.37) {
				priceNetto = 79940.54;
			}
			if (calculated_power >= 23.78) {
				priceNetto = 80406.05;
			}
			if (calculated_power >= 24.19) {
				priceNetto = 81620.89;
			}
			if (calculated_power >= 24.6) {
				priceNetto = 82806.98;
			}
			if (calculated_power >= 25.01) {
				priceNetto = 84683.08;
			}
			if (calculated_power >= 25.42) {
				priceNetto = 85663.76;
			}
			if (calculated_power >= 25.83) {
				priceNetto = 86878.59;
			}
			if (calculated_power >= 26.24) {
				priceNetto = 87859.28;
			}
			if (calculated_power >= 26.65) {
				priceNetto = 89612.74;
			}
			if (calculated_power >= 27.06) {
				priceNetto = 90593.43;
			}
			if (calculated_power >= 27.47) {
				priceNetto = 91808.26;
			}
			if (calculated_power >= 27.88) {
				priceNetto = 92994.36;
			}
			if (calculated_power >= 28.29) {
				priceNetto = 94645.11;
			}
			if (calculated_power >= 28.7) {
				priceNetto = 95625.8;
			}
			if (calculated_power >= 29.11) {
				priceNetto = 96840.63;
			}
			if (calculated_power >= 29.52) {
				priceNetto = 97821.32;
			}
			if (calculated_power >= 29.93) {
				priceNetto = 99472.07;
			}
			if (calculated_power >= 30.34) {
				priceNetto = 100452.76;
			}
			if (calculated_power >= 30.75) {
				priceNetto = 101667.59;
			}
			if (calculated_power >= 31.16) {
				priceNetto = 102648.27;
			}
			if (calculated_power >= 31.57) {
				priceNetto = 104320.39;
			}
			if (calculated_power >= 32.39) {
				priceNetto = 106515.91;
			}
			if (calculated_power >= 32.8) {
				priceNetto = 107496.59;
			}
			if (calculated_power >= 33.21) {
				priceNetto = 109871.42;
			}
			if (calculated_power >= 33.62) {
				priceNetto = 110852.1;
			}
			if (calculated_power >= 34.03) {
				priceNetto = 112785.88;
			}
			if (calculated_power >= 34.44) {
				priceNetto = 113766.55;
			}
			if (calculated_power >= 34.85) {
				priceNetto = 115417.31;
			}
			if (calculated_power >= 35.26) {
				priceNetto = 116398.0;
			}
			if (calculated_power >= 35.67) {
				priceNetto = 117612.83;
			}
			if (calculated_power >= 36.08) {
				priceNetto = 118593.51;
			}
			if (calculated_power >= 36.49) {
				priceNetto = 120265.63;
			}
			if (calculated_power >= 36.9) {
				priceNetto = 121246.32;
			}
			if (calculated_power >= 37.31) {
				priceNetto = 122461.15;
			}
			if (calculated_power >= 37.72) {
				priceNetto = 123441.84;
			}
			if (calculated_power >= 38.13) {
				priceNetto = 125092.59;
			}
			if (calculated_power >= 38.54) {
				priceNetto = 126073.28;
			}
			if (calculated_power >= 38.95) {
				priceNetto = 127288.11;
			}
			if (calculated_power >= 39.36) {
				priceNetto = 128268.8;
			}
			if (calculated_power >= 39.77) {
				priceNetto = 130689.84;
			}
			if (calculated_power >= 40.18) {
				priceNetto = 131670.53;
			}
			if (calculated_power >= 40.59) {
				priceNetto = 132885.36;
			}
			if (calculated_power >= 41.0) {
				priceNetto = 133866.04;
			}
			if (calculated_power >= 41.41) {
				priceNetto = 135692.42;
			}
			if (calculated_power >= 41.82) {
				priceNetto = 137153.76;
			}
			if (calculated_power >= 42.23) {
				priceNetto = 139421.65;
			}
			if (calculated_power >= 42.64) {
				priceNetto = 140402.34;
			}
			if (calculated_power >= 43.05) {
				priceNetto = 142053.09;
			}
			if (calculated_power >= 43.46) {
				priceNetto = 143033.78;
			}
			if (calculated_power >= 43.87) {
				priceNetto = 144248.61;
			}
			if (calculated_power >= 44.28) {
				priceNetto = 145229.3;
			}
			if (calculated_power >= 44.69) {
				priceNetto = 146880.05;
			}
			if (calculated_power >= 45.1) {
				priceNetto = 147860.74;
			}
			if (calculated_power >= 45.51) {
				priceNetto = 149075.57;
			}
			if (calculated_power >= 45.92) {
				priceNetto = 150056.25;
			}
			if (calculated_power >= 46.33) {
				priceNetto = 151707.01;
			}
			if (calculated_power >= 46.74) {
				priceNetto = 153201.22;
			}
			if (calculated_power >= 47.15) {
				priceNetto = 154416.06;
			}
			if (calculated_power >= 47.56) {
				priceNetto = 155396.73;
			}
			if (calculated_power >= 47.97) {
				priceNetto = 157047.5;
			}
			if (calculated_power >= 48.38) {
				priceNetto = 158028.18;
			}
			if (calculated_power >= 48.79) {
				priceNetto = 159243.01;
			}
			if (calculated_power >= 49.2) {
				priceNetto = 160223.7;
			}
			if (calculated_power >= 49.61) {
				priceNetto = 161201.75;
			}
		}

		if (roofing.value == 3) {
			if (calculated_power >= 2.05) {
				priceNetto = 13358.22;
			}
			if (calculated_power >= 2.46) {
				priceNetto = 15149.28;
			}
			if (calculated_power >= 2.87) {
				priceNetto = 16920.25;
			}
			if (calculated_power >= 3.28) {
				priceNetto = 17995.05;
			}
			if (calculated_power >= 3.69) {
				priceNetto = 19576.05;
			}
			if (calculated_power >= 4.1) {
				priceNetto = 21149.04;
			}
			if (calculated_power >= 4.51) {
				priceNetto = 22467.51;
			}
			if (calculated_power >= 4.92) {
				priceNetto = 23998.43;
			}
			if (calculated_power >= 5.33) {
				priceNetto = 26293.79;
			}
			if (calculated_power >= 5.74) {
				priceNetto = 27504.46;
			}
			if (calculated_power >= 6.15) {
				priceNetto = 29042.17;
			}
			if (calculated_power >= 6.56) {
				priceNetto = 30580.38;
			}
			if (calculated_power >= 6.97) {
				priceNetto = 33423.61;
			}
			if (calculated_power >= 7.38) {
				priceNetto = 34723.74;
			}
			if (calculated_power >= 7.79) {
				priceNetto = 36088.79;
			}
			if (calculated_power >= 8.2) {
				priceNetto = 37184.51;
			}
			if (calculated_power >= 8.61) {
				priceNetto = 38268.71;
			}
			if (calculated_power >= 9.02) {
				priceNetto = 39242.67;
			}
			if (calculated_power >= 9.43) {
				priceNetto = 40874.33;
			}
			if (calculated_power >= 9.84) {
				priceNetto = 41786.96;
			}
			if (calculated_power >= 10.25) {
				priceNetto = 44919.06;
			}
			if (calculated_power >= 10.66) {
				priceNetto = 47746.33;
			}
			if (calculated_power >= 11.07) {
				priceNetto = 49462.74;
			}
			if (calculated_power >= 11.48) {
				priceNetto = 50934.32;
			}
			if (calculated_power >= 11.89) {
				priceNetto = 53075.97;
			}
			if (calculated_power >= 12.3) {
				priceNetto = 54170.4;
			}
			if (calculated_power >= 12.71) {
				priceNetto = 54588.58;
			}
			if (calculated_power >= 13.12) {
				priceNetto = 56002.39;
			}
			if (calculated_power >= 13.53) {
				priceNetto = 59774.74;
			}
			if (calculated_power >= 14.28) {
				priceNetto = 60952.91;
			}
			if (calculated_power >= 14.35) {
				priceNetto = 62495.12;
			}
			if (calculated_power >= 14.76) {
				priceNetto = 63945.67;
			}
			if (calculated_power >= 15.17) {
				priceNetto = 65911.23;
			}
			if (calculated_power >= 15.58) {
				priceNetto = 57850.35;
			}
			if (calculated_power >= 15.99) {
				priceNetto = 59127.91;
			}
			if (calculated_power >= 16.4) {
				priceNetto = 60319.89;
			}
			if (calculated_power >= 16.81) {
				priceNetto = 62805.16;
			}
			if (calculated_power >= 17.22) {
				priceNetto = 63816.94;
			}
			if (calculated_power >= 17.63) {
				priceNetto = 65054.5;
			}
			if (calculated_power >= 18.04) {
				priceNetto = 66233.89;
			}
			if (calculated_power >= 18.45) {
				priceNetto = 67894.8;
			}
			if (calculated_power >= 18.86) {
				priceNetto = 69070.0;
			}
			if (calculated_power >= 19.27) {
				priceNetto = 70479.36;
			}
			if (calculated_power >= 19.68) {
				priceNetto = 71654.57;
			}
			if (calculated_power >= 20.09) {
				priceNetto = 69199.13;
			}
			if (calculated_power >= 20.5) {
				priceNetto = 70168.36;
			}
			if (calculated_power >= 20.91) {
				priceNetto = 72417.23;
			}
			if (calculated_power >= 21.32) {
				priceNetto = 73417.63;
			}
			if (calculated_power >= 21.73) {
				priceNetto = 75077.43;
			}
			if (calculated_power >= 22.14) {
				priceNetto = 76067.16;
			}
			if (calculated_power >= 22.55) {
				priceNetto = 77291.03;
			}
			if (calculated_power >= 22.96) {
				priceNetto = 78280.75;
			}
			if (calculated_power >= 23.37) {
				priceNetto = 79940.54;
			}
			if (calculated_power >= 23.78) {
				priceNetto = 80406.05;
			}
			if (calculated_power >= 24.19) {
				priceNetto = 81620.89;
			}
			if (calculated_power >= 24.6) {
				priceNetto = 82806.98;
			}
			if (calculated_power >= 25.01) {
				priceNetto = 84683.08;
			}
			if (calculated_power >= 25.42) {
				priceNetto = 85663.76;
			}
			if (calculated_power >= 25.83) {
				priceNetto = 86878.59;
			}
			if (calculated_power >= 26.24) {
				priceNetto = 87859.28;
			}
			if (calculated_power >= 26.65) {
				priceNetto = 89612.74;
			}
			if (calculated_power >= 27.06) {
				priceNetto = 90593.43;
			}
			if (calculated_power >= 27.47) {
				priceNetto = 91808.26;
			}
			if (calculated_power >= 27.88) {
				priceNetto = 92994.36;
			}
			if (calculated_power >= 28.29) {
				priceNetto = 94645.11;
			}
			if (calculated_power >= 28.7) {
				priceNetto = 95625.8;
			}
			if (calculated_power >= 29.11) {
				priceNetto = 96840.63;
			}
			if (calculated_power >= 29.52) {
				priceNetto = 97821.32;
			}
			if (calculated_power >= 29.93) {
				priceNetto = 99472.07;
			}
			if (calculated_power >= 30.34) {
				priceNetto = 100452.76;
			}
			if (calculated_power >= 30.75) {
				priceNetto = 101667.59;
			}
			if (calculated_power >= 31.16) {
				priceNetto = 102648.27;
			}
			if (calculated_power >= 31.57) {
				priceNetto = 104320.39;
			}
			if (calculated_power >= 32.39) {
				priceNetto = 106515.91;
			}
			if (calculated_power >= 32.8) {
				priceNetto = 107496.59;
			}
			if (calculated_power >= 33.21) {
				priceNetto = 109871.42;
			}
			if (calculated_power >= 33.62) {
				priceNetto = 110852.1;
			}
			if (calculated_power >= 34.03) {
				priceNetto = 112785.88;
			}
			if (calculated_power >= 34.44) {
				priceNetto = 113766.55;
			}
			if (calculated_power >= 34.85) {
				priceNetto = 115417.31;
			}
			if (calculated_power >= 35.26) {
				priceNetto = 116398.0;
			}
			if (calculated_power >= 35.67) {
				priceNetto = 117612.83;
			}
			if (calculated_power >= 36.08) {
				priceNetto = 118593.51;
			}
			if (calculated_power >= 36.49) {
				priceNetto = 120265.63;
			}
			if (calculated_power >= 36.9) {
				priceNetto = 121246.32;
			}
			if (calculated_power >= 37.31) {
				priceNetto = 122461.15;
			}
			if (calculated_power >= 37.72) {
				priceNetto = 123441.84;
			}
			if (calculated_power >= 38.13) {
				priceNetto = 125092.59;
			}
			if (calculated_power >= 38.54) {
				priceNetto = 126073.28;
			}
			if (calculated_power >= 38.95) {
				priceNetto = 127288.11;
			}
			if (calculated_power >= 39.36) {
				priceNetto = 128268.8;
			}
			if (calculated_power >= 39.77) {
				priceNetto = 130689.84;
			}
			if (calculated_power >= 40.18) {
				priceNetto = 131670.53;
			}
			if (calculated_power >= 40.59) {
				priceNetto = 132885.36;
			}
			if (calculated_power >= 41.0) {
				priceNetto = 133866.04;
			}
			if (calculated_power >= 41.41) {
				priceNetto = 135692.42;
			}
			if (calculated_power >= 41.82) {
				priceNetto = 137153.76;
			}
			if (calculated_power >= 42.23) {
				priceNetto = 139421.65;
			}
			if (calculated_power >= 42.64) {
				priceNetto = 140402.34;
			}
			if (calculated_power >= 43.05) {
				priceNetto = 142053.09;
			}
			if (calculated_power >= 43.46) {
				priceNetto = 143033.78;
			}
			if (calculated_power >= 43.87) {
				priceNetto = 144248.61;
			}
			if (calculated_power >= 44.28) {
				priceNetto = 145229.3;
			}
			if (calculated_power >= 44.69) {
				priceNetto = 146880.05;
			}
			if (calculated_power >= 45.1) {
				priceNetto = 147860.74;
			}
			if (calculated_power >= 45.51) {
				priceNetto = 149075.57;
			}
			if (calculated_power >= 45.92) {
				priceNetto = 150056.25;
			}
			if (calculated_power >= 46.33) {
				priceNetto = 151707.01;
			}
			if (calculated_power >= 46.74) {
				priceNetto = 153201.22;
			}
			if (calculated_power >= 47.15) {
				priceNetto = 154416.06;
			}
			if (calculated_power >= 47.56) {
				priceNetto = 155396.73;
			}
			if (calculated_power >= 47.97) {
				priceNetto = 157047.5;
			}
			if (calculated_power >= 48.38) {
				priceNetto = 158028.18;
			}
			if (calculated_power >= 48.79) {
				priceNetto = 159243.01;
			}
			if (calculated_power >= 49.2) {
				priceNetto = 160223.7;
			}
			if (calculated_power >= 49.61) {
				priceNetto = 161201.75;
			}
		}

		if (roofing.value == 4) {
			if (calculated_power >= 2.05) {
				priceNetto = 13358.22;
			}
			if (calculated_power >= 2.46) {
				priceNetto = 15149.28;
			}
			if (calculated_power >= 2.87) {
				priceNetto = 16920.25;
			}
			if (calculated_power >= 3.28) {
				priceNetto = 17995.05;
			}
			if (calculated_power >= 3.69) {
				priceNetto = 19576.05;
			}
			if (calculated_power >= 4.1) {
				priceNetto = 21149.04;
			}
			if (calculated_power >= 4.51) {
				priceNetto = 22467.51;
			}
			if (calculated_power >= 4.92) {
				priceNetto = 23998.43;
			}
			if (calculated_power >= 5.33) {
				priceNetto = 26293.79;
			}
			if (calculated_power >= 5.74) {
				priceNetto = 27504.46;
			}
			if (calculated_power >= 6.15) {
				priceNetto = 29042.17;
			}
			if (calculated_power >= 6.56) {
				priceNetto = 30580.38;
			}
			if (calculated_power >= 6.97) {
				priceNetto = 33423.61;
			}
			if (calculated_power >= 7.38) {
				priceNetto = 34723.74;
			}
			if (calculated_power >= 7.79) {
				priceNetto = 36088.79;
			}
			if (calculated_power >= 8.2) {
				priceNetto = 37184.51;
			}
			if (calculated_power >= 8.61) {
				priceNetto = 38268.71;
			}
			if (calculated_power >= 9.02) {
				priceNetto = 39242.67;
			}
			if (calculated_power >= 9.43) {
				priceNetto = 40874.33;
			}
			if (calculated_power >= 9.84) {
				priceNetto = 41786.96;
			}
			if (calculated_power >= 10.25) {
				priceNetto = 44919.06;
			}
			if (calculated_power >= 10.66) {
				priceNetto = 47746.33;
			}
			if (calculated_power >= 11.07) {
				priceNetto = 49462.74;
			}
			if (calculated_power >= 11.48) {
				priceNetto = 50934.32;
			}
			if (calculated_power >= 11.89) {
				priceNetto = 53075.97;
			}
			if (calculated_power >= 12.3) {
				priceNetto = 54170.4;
			}
			if (calculated_power >= 12.71) {
				priceNetto = 54588.58;
			}
			if (calculated_power >= 13.12) {
				priceNetto = 56002.39;
			}
			if (calculated_power >= 13.53) {
				priceNetto = 59774.74;
			}
			if (calculated_power >= 14.28) {
				priceNetto = 60952.91;
			}
			if (calculated_power >= 14.35) {
				priceNetto = 62495.12;
			}
			if (calculated_power >= 14.76) {
				priceNetto = 63945.67;
			}
			if (calculated_power >= 15.17) {
				priceNetto = 65911.23;
			}
			if (calculated_power >= 15.58) {
				priceNetto = 57850.35;
			}
			if (calculated_power >= 15.99) {
				priceNetto = 59127.91;
			}
			if (calculated_power >= 16.4) {
				priceNetto = 60319.89;
			}
			if (calculated_power >= 16.81) {
				priceNetto = 62805.16;
			}
			if (calculated_power >= 17.22) {
				priceNetto = 63816.94;
			}
			if (calculated_power >= 17.63) {
				priceNetto = 65054.5;
			}
			if (calculated_power >= 18.04) {
				priceNetto = 66233.89;
			}
			if (calculated_power >= 18.45) {
				priceNetto = 67894.8;
			}
			if (calculated_power >= 18.86) {
				priceNetto = 69070.0;
			}
			if (calculated_power >= 19.27) {
				priceNetto = 70479.36;
			}
			if (calculated_power >= 19.68) {
				priceNetto = 71654.57;
			}
			if (calculated_power >= 20.09) {
				priceNetto = 69199.13;
			}
			if (calculated_power >= 20.5) {
				priceNetto = 70168.36;
			}
			if (calculated_power >= 20.91) {
				priceNetto = 72417.23;
			}
			if (calculated_power >= 21.32) {
				priceNetto = 73417.63;
			}
			if (calculated_power >= 21.73) {
				priceNetto = 75077.43;
			}
			if (calculated_power >= 22.14) {
				priceNetto = 76067.16;
			}
			if (calculated_power >= 22.55) {
				priceNetto = 77291.03;
			}
			if (calculated_power >= 22.96) {
				priceNetto = 78280.75;
			}
			if (calculated_power >= 23.37) {
				priceNetto = 79940.54;
			}
			if (calculated_power >= 23.78) {
				priceNetto = 80406.05;
			}
			if (calculated_power >= 24.19) {
				priceNetto = 81620.89;
			}
			if (calculated_power >= 24.6) {
				priceNetto = 82806.98;
			}
			if (calculated_power >= 25.01) {
				priceNetto = 84683.08;
			}
			if (calculated_power >= 25.42) {
				priceNetto = 85663.76;
			}
			if (calculated_power >= 25.83) {
				priceNetto = 86878.59;
			}
			if (calculated_power >= 26.24) {
				priceNetto = 87859.28;
			}
			if (calculated_power >= 26.65) {
				priceNetto = 89612.74;
			}
			if (calculated_power >= 27.06) {
				priceNetto = 90593.43;
			}
			if (calculated_power >= 27.47) {
				priceNetto = 91808.26;
			}
			if (calculated_power >= 27.88) {
				priceNetto = 92994.36;
			}
			if (calculated_power >= 28.29) {
				priceNetto = 94645.11;
			}
			if (calculated_power >= 28.7) {
				priceNetto = 95625.8;
			}
			if (calculated_power >= 29.11) {
				priceNetto = 96840.63;
			}
			if (calculated_power >= 29.52) {
				priceNetto = 97821.32;
			}
			if (calculated_power >= 29.93) {
				priceNetto = 99472.07;
			}
			if (calculated_power >= 30.34) {
				priceNetto = 100452.76;
			}
			if (calculated_power >= 30.75) {
				priceNetto = 101667.59;
			}
			if (calculated_power >= 31.16) {
				priceNetto = 102648.27;
			}
			if (calculated_power >= 31.57) {
				priceNetto = 104320.39;
			}
			if (calculated_power >= 32.39) {
				priceNetto = 106515.91;
			}
			if (calculated_power >= 32.8) {
				priceNetto = 107496.59;
			}
			if (calculated_power >= 33.21) {
				priceNetto = 109871.42;
			}
			if (calculated_power >= 33.62) {
				priceNetto = 110852.1;
			}
			if (calculated_power >= 34.03) {
				priceNetto = 112785.88;
			}
			if (calculated_power >= 34.44) {
				priceNetto = 113766.55;
			}
			if (calculated_power >= 34.85) {
				priceNetto = 115417.31;
			}
			if (calculated_power >= 35.26) {
				priceNetto = 116398.0;
			}
			if (calculated_power >= 35.67) {
				priceNetto = 117612.83;
			}
			if (calculated_power >= 36.08) {
				priceNetto = 118593.51;
			}
			if (calculated_power >= 36.49) {
				priceNetto = 120265.63;
			}
			if (calculated_power >= 36.9) {
				priceNetto = 121246.32;
			}
			if (calculated_power >= 37.31) {
				priceNetto = 122461.15;
			}
			if (calculated_power >= 37.72) {
				priceNetto = 123441.84;
			}
			if (calculated_power >= 38.13) {
				priceNetto = 125092.59;
			}
			if (calculated_power >= 38.54) {
				priceNetto = 126073.28;
			}
			if (calculated_power >= 38.95) {
				priceNetto = 127288.11;
			}
			if (calculated_power >= 39.36) {
				priceNetto = 128268.8;
			}
			if (calculated_power >= 39.77) {
				priceNetto = 130689.84;
			}
			if (calculated_power >= 40.18) {
				priceNetto = 131670.53;
			}
			if (calculated_power >= 40.59) {
				priceNetto = 132885.36;
			}
			if (calculated_power >= 41.0) {
				priceNetto = 133866.04;
			}
			if (calculated_power >= 41.41) {
				priceNetto = 135692.42;
			}
			if (calculated_power >= 41.82) {
				priceNetto = 137153.76;
			}
			if (calculated_power >= 42.23) {
				priceNetto = 139421.65;
			}
			if (calculated_power >= 42.64) {
				priceNetto = 140402.34;
			}
			if (calculated_power >= 43.05) {
				priceNetto = 142053.09;
			}
			if (calculated_power >= 43.46) {
				priceNetto = 143033.78;
			}
			if (calculated_power >= 43.87) {
				priceNetto = 144248.61;
			}
			if (calculated_power >= 44.28) {
				priceNetto = 145229.3;
			}
			if (calculated_power >= 44.69) {
				priceNetto = 146880.05;
			}
			if (calculated_power >= 45.1) {
				priceNetto = 147860.74;
			}
			if (calculated_power >= 45.51) {
				priceNetto = 149075.57;
			}
			if (calculated_power >= 45.92) {
				priceNetto = 150056.25;
			}
			if (calculated_power >= 46.33) {
				priceNetto = 151707.01;
			}
			if (calculated_power >= 46.74) {
				priceNetto = 153201.22;
			}
			if (calculated_power >= 47.15) {
				priceNetto = 154416.06;
			}
			if (calculated_power >= 47.56) {
				priceNetto = 155396.73;
			}
			if (calculated_power >= 47.97) {
				priceNetto = 157047.5;
			}
			if (calculated_power >= 48.38) {
				priceNetto = 158028.18;
			}
			if (calculated_power >= 48.79) {
				priceNetto = 159243.01;
			}
			if (calculated_power >= 49.2) {
				priceNetto = 160223.7;
			}
			if (calculated_power >= 49.61) {
				priceNetto = 161201.75;
			}
		}
	}
	if (document.getElementById('hoymiles-inwerter').selected == false) {
		if (calculated_power.value <= 11.25) {
			if (office_level.value == 'ZL') {
				priceNetto = priceNetto + Math.ceil(calculated_power.value) * 100;
			}
			if (office_level.value == 'SR') {
				priceNetto = priceNetto + Math.ceil(calculated_power.value) * 200;
			}

			if (office_level.value == 'BR') {
				priceNetto = priceNetto + Math.ceil(calculated_power.value) * 300;
			}
		}
		if (vat_value.value == 0.08) {
			priceNetto = priceNetto + 139;
		}
		if (vat_value.value == 0.23) {
			priceNetto = priceNetto + 122;
		}
	}
	if (document.getElementById('hoymiles-inwerter').selected == true) {
		return priceNetto;
	}
	return priceNetto * 1.05 + 1000;
};
let zero_price_calc;
const suggestPrice = () => {
	if (inverter_phase.value == 1) {
		if (calculated_power.value <= 2.25) {
			zero_price_calc = 14355;
		} else if (calculated_power.value <= 2.625) {
			zero_price_calc = 15584;
		} else if (calculated_power.value <= 3.0) {
			zero_price_calc = 17332;
		} else if (calculated_power.value <= 3.375) {
			zero_price_calc = 17598;
		} else if (calculated_power.value <= 3.75) {
			zero_price_calc = 20032;
		}
	}
	if (inverter_phase.value == 3) {
		if (calculated_power.value <= 3.0) {
			zero_price_calc = 19162;
		} else if (calculated_power.value <= 3.375) {
			zero_price_calc = 19216;
		} else if (calculated_power.value <= 3.75) {
			zero_price_calc = 22300;
		} else if (calculated_power.value <= 4.125) {
			zero_price_calc = 22496;
		} else if (calculated_power.value <= 4.5) {
			zero_price_calc = 23936;
		} else if (calculated_power.value <= 4.875) {
			zero_price_calc = 25607;
		} else if (calculated_power.value <= 5.25) {
			zero_price_calc = 27307;
		} else if (calculated_power.value <= 5.625) {
			zero_price_calc = 28747;
		} else if (calculated_power.value <= 6.0) {
			zero_price_calc = 30447;
		} else if (calculated_power.value <= 6.375) {
			zero_price_calc = 32268;
		} else if (calculated_power.value <= 6.75) {
			zero_price_calc = 34488;
		} else if (calculated_power.value <= 7.125) {
			zero_price_calc = 36188;
		} else if (calculated_power.value <= 7.5) {
			zero_price_calc = 37943;
		} else if (calculated_power.value <= 7.875) {
			zero_price_calc = 38863;
		} else if (calculated_power.value <= 8.25) {
			zero_price_calc = 41084;
		} else if (calculated_power.value <= 8.625) {
			zero_price_calc = 42524;
		} else if (calculated_power.value <= 9.0) {
			zero_price_calc = 44224;
		} else if (calculated_power.value <= 9.375) {
			zero_price_calc = 45664;
		} else if (calculated_power.value <= 9.75) {
			zero_price_calc = 47837;
		} else if (calculated_power.value <= 10.125) {
			zero_price_calc = 48782;
		} else if (calculated_power.value <= 10.5) {
			zero_price_calc = 49494;
		} else if (calculated_power.value <= 10.875) {
			zero_price_calc = 50161;
		} else if (calculated_power.value <= 11.25) {
			zero_price_calc = 51115;
		} else if (calculated_power.value <= 11.625) {
			zero_price_calc = 49740;
		} else if (calculated_power.value <= 12.0) {
			zero_price_calc = 51344;
		} else if (calculated_power.value <= 12.375) {
			zero_price_calc = 52676;
		} else if (calculated_power.value <= 12.75) {
			zero_price_calc = 54008;
		} else if (calculated_power.value <= 13.125) {
			zero_price_calc = 55339;
		} else if (calculated_power.value <= 13.5) {
			zero_price_calc = 56671;
		} else if (calculated_power.value <= 13.875) {
			zero_price_calc = 58002;
		} else if (calculated_power.value <= 14.25) {
			zero_price_calc = 59334;
		} else if (calculated_power.value <= 14.625) {
			zero_price_calc = 60666;
		} else if (calculated_power.value <= 15.0) {
			zero_price_calc = 62511;
		} else if (calculated_power.value <= 15.375) {
			zero_price_calc = 63843;
		} else if (calculated_power.value <= 15.75) {
			zero_price_calc = 65174;
		} else if (calculated_power.value <= 16.125) {
			zero_price_calc = 66506;
		} else if (calculated_power.value <= 16.5) {
			zero_price_calc = 67838;
		} else if (calculated_power.value <= 16.875) {
			zero_price_calc = 69169;
		} else if (calculated_power.value <= 17.25) {
			zero_price_calc = 71807;
		} else if (calculated_power.value <= 17.625) {
			zero_price_calc = 73138;
		} else if (calculated_power.value <= 18.0) {
			zero_price_calc = 74470;
		} else if (calculated_power.value <= 18.375) {
			zero_price_calc = 75802;
		} else if (calculated_power.value <= 18.75) {
			zero_price_calc = 77133;
		} else if (calculated_power.value <= 19.125) {
			zero_price_calc = 78465;
		} else if (calculated_power.value <= 19.5) {
			zero_price_calc = 79796;
		} else if (calculated_power.value <= 19.875) {
			zero_price_calc = 81583;
		} else if (calculated_power.value <= 20.25) {
			zero_price_calc = 82915;
		} else if (calculated_power.value <= 20.625) {
			zero_price_calc = 84246;
		} else if (calculated_power.value <= 21.0) {
			zero_price_calc = 85578;
		} else if (calculated_power.value <= 21.375) {
			zero_price_calc = 86909;
		} else if (calculated_power.value <= 21.75) {
			zero_price_calc = 88241;
		} else if (calculated_power.value <= 22.125) {
			zero_price_calc = 89573;
		} else if (calculated_power.value <= 22.5) {
			zero_price_calc = 90904;
		} else if (calculated_power.value <= 22.875) {
			zero_price_calc = 92236;
		} else if (calculated_power.value <= 23.25) {
			zero_price_calc = 93568;
		} else if (calculated_power.value <= 23.625) {
			zero_price_calc = 94899;
		} else if (calculated_power.value <= 24.0) {
			zero_price_calc = 96231;
		} else if (calculated_power.value <= 24.375) {
			zero_price_calc = 98808;
		} else if (calculated_power.value <= 24.75) {
			zero_price_calc = 100140;
		} else if (calculated_power.value <= 25.125) {
			zero_price_calc = 101472;
		} else if (calculated_power.value <= 25.5) {
			zero_price_calc = 102803;
		} else if (calculated_power.value <= 25.875) {
			zero_price_calc = 104135;
		} else if (calculated_power.value <= 26.25) {
			zero_price_calc = 105466;
		} else if (calculated_power.value <= 26.625) {
			zero_price_calc = 106798;
		} else if (calculated_power.value <= 27.0) {
			zero_price_calc = 108130;
		} else if (calculated_power.value <= 27.375) {
			zero_price_calc = 109461;
		} else if (calculated_power.value <= 27.75) {
			zero_price_calc = 110793;
		} else if (calculated_power.value <= 28.125) {
			zero_price_calc = 112125;
		} else if (calculated_power.value <= 28.5) {
			zero_price_calc = 113456;
		} else if (calculated_power.value <= 28.875) {
			zero_price_calc = 114788;
		} else if (calculated_power.value <= 29.25) {
			zero_price_calc = 116120;
		} else if (calculated_power.value <= 29.625) {
			zero_price_calc = 117911;
		} else if (calculated_power.value <= 30.0) {
			zero_price_calc = 119243;
		} else if (calculated_power.value <= 30.375) {
			zero_price_calc = 120574;
		} else if (calculated_power.value <= 30.75) {
			zero_price_calc = 118113;
		} else if (calculated_power.value <= 31.125) {
			zero_price_calc = 119399;
		} else if (calculated_power.value <= 31.5) {
			zero_price_calc = 120684;
		} else if (calculated_power.value <= 31.875) {
			zero_price_calc = 121970;
		} else if (calculated_power.value <= 32.25) {
			zero_price_calc = 123255;
		} else if (calculated_power.value <= 32.625) {
			zero_price_calc = 124540;
		} else if (calculated_power.value <= 33.0) {
			zero_price_calc = 125826;
		} else if (calculated_power.value <= 33.375) {
			zero_price_calc = 127111;
		} else if (calculated_power.value <= 33.75) {
			zero_price_calc = 128396;
		} else if (calculated_power.value <= 34.125) {
			zero_price_calc = 129682;
		} else if (calculated_power.value <= 34.5) {
			zero_price_calc = 130967;
		} else if (calculated_power.value <= 34.875) {
			zero_price_calc = 132253;
		} else if (calculated_power.value <= 35.25) {
			zero_price_calc = 133538;
		} else if (calculated_power.value <= 35.625) {
			zero_price_calc = 136067;
		} else if (calculated_power.value <= 36.0) {
			zero_price_calc = 137352;
		} else if (calculated_power.value <= 36.375) {
			zero_price_calc = 138637;
		} else if (calculated_power.value <= 36.75) {
			zero_price_calc = 139923;
		} else if (calculated_power.value <= 37.125) {
			zero_price_calc = 141208;
		} else if (calculated_power.value <= 37.5) {
			zero_price_calc = 142493;
		} else if (calculated_power.value <= 37.875) {
			zero_price_calc = 143779;
		} else if (calculated_power.value <= 38.25) {
			zero_price_calc = 145064;
		} else if (calculated_power.value <= 38.625) {
			zero_price_calc = 146350;
		} else if (calculated_power.value <= 39.0) {
			zero_price_calc = 147635;
		} else if (calculated_power.value <= 39.375) {
			zero_price_calc = 148920;
		} else if (calculated_power.value <= 39.75) {
			zero_price_calc = 150780;
		} else if (calculated_power.value <= 40.125) {
			zero_price_calc = 146612;
		} else if (calculated_power.value <= 40.5) {
			zero_price_calc = 147412;
		} else if (calculated_power.value <= 40.875) {
			zero_price_calc = 148212;
		} else if (calculated_power.value <= 41.25) {
			zero_price_calc = 149012;
		} else if (calculated_power.value <= 41.625) {
			zero_price_calc = 149812;
		} else if (calculated_power.value <= 42.0) {
			zero_price_calc = 150612;
		} else if (calculated_power.value <= 42.375) {
			zero_price_calc = 151412;
		} else if (calculated_power.value <= 42.75) {
			zero_price_calc = 152212;
		} else if (calculated_power.value <= 43.125) {
			zero_price_calc = 153012;
		} else if (calculated_power.value <= 43.5) {
			zero_price_calc = 153812;
		} else if (calculated_power.value <= 43.875) {
			zero_price_calc = 154612;
		} else if (calculated_power.value <= 44.25) {
			zero_price_calc = 155412;
		} else if (calculated_power.value <= 44.625) {
			zero_price_calc = 156212;
		} else if (calculated_power.value <= 45.0) {
			zero_price_calc = 157012;
		} else if (calculated_power.value <= 45.375) {
			zero_price_calc = 157812;
		} else if (calculated_power.value <= 45.75) {
			zero_price_calc = 158612;
		} else if (calculated_power.value <= 46.125) {
			zero_price_calc = 159412;
		} else if (calculated_power.value <= 46.5) {
			zero_price_calc = 160212;
		} else if (calculated_power.value <= 46.875) {
			zero_price_calc = 161012;
		} else if (calculated_power.value <= 47.25) {
			zero_price_calc = 161812;
		} else if (calculated_power.value <= 47.625) {
			zero_price_calc = 162612;
		} else if (calculated_power.value <= 48.0) {
			zero_price_calc = 163412;
		} else if (calculated_power.value <= 48.375) {
			zero_price_calc = 164212;
		} else if (calculated_power.value <= 48.75) {
			zero_price_calc = 165012;
		} else if (calculated_power.value <= 49.125) {
			zero_price_calc = 165812;
		} else if (calculated_power.value <= 49.5) {
			zero_price_calc = 166612;
		} else if (calculated_power.value > 49.5) {
			const diff = calculated_power.value - 49.5;
			const moc_w_kWp = diff * 1000;
			const panels = Math.ceil(moc_w_kWp / panel_type.value);
			const addedCost = panels * 1400;
			zero_price_calc = 166612 + addedCost;
		}
	}

	if (calculated_power.value <= 11.25) {
		if (office_level.value == 'ZL') {
			zero_price_calc = zero_price_calc + Math.ceil(calculated_power.value) * 200;
		}
		if (office_level.value == 'SR') {
			zero_price_calc = zero_price_calc + Math.ceil(calculated_power.value) * 400;
		}

		if (office_level.value == 'BR') {
			zero_price_calc = zero_price_calc + Math.ceil(calculated_power.value) * 600;
		}
	}
	return zero_price_calc * 1.05;
};
