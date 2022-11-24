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
				priceNetto = 13692.18;
			}
			if (calculated_power.value >= 2.46) {
				priceNetto = 15528.01;
			}
			if (calculated_power.value >= 2.87) {
				priceNetto = 17343.26;
			}
			if (calculated_power.value >= 3.28) {
				priceNetto = 18444.93;
			}
			if (calculated_power.value >= 3.69) {
				priceNetto = 20065.45;
			}
			if (calculated_power.value >= 4.1) {
				priceNetto = 21677.77;
			}
			if (calculated_power.value >= 4.51) {
				priceNetto = 23029.2;
			}
			if (calculated_power.value >= 4.92) {
				priceNetto = 24598.39;
			}
			if (calculated_power.value >= 5.33) {
				priceNetto = 26951.13;
			}
			if (calculated_power.value >= 5.74) {
				priceNetto = 28192.07;
			}
			if (calculated_power.value >= 6.15) {
				priceNetto = 29768.22;
			}
			if (calculated_power.value >= 6.56) {
				priceNetto = 31344.89;
			}
			if (calculated_power.value >= 6.97) {
				priceNetto = 34259.2;
			}
			if (calculated_power.value >= 7.38) {
				priceNetto = 35591.83;
			}
			if (calculated_power.value >= 7.79) {
				priceNetto = 36991.01;
			}
			if (calculated_power.value >= 8.2) {
				priceNetto = 38114.12;
			}
			if (calculated_power.value >= 8.61) {
				priceNetto = 39225.43;
			}
			if (calculated_power.value >= 9.02) {
				priceNetto = 40223.74;
			}
			if (calculated_power.value >= 9.43) {
				priceNetto = 41896.19;
			}
			if (calculated_power.value >= 9.84) {
				priceNetto = 42831.63;
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
			if (calculated_power.value >= 41.0) {
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

		if (roofing.value == 1) {
			if (calculated_power.value >= 2.05) {
				priceNetto = 14020.3;
			}
			if (calculated_power.value >= 2.46) {
				priceNetto = 15921.76;
			}
			if (calculated_power.value >= 2.87) {
				priceNetto = 17802.63;
			}
			if (calculated_power.value >= 3.28) {
				priceNetto = 18969.92;
			}
			if (calculated_power.value >= 3.69) {
				priceNetto = 20656.07;
			}
			if (calculated_power.value >= 4.1) {
				priceNetto = 22334.01;
			}
			if (calculated_power.value >= 4.51) {
				priceNetto = 23751.07;
			}
			if (calculated_power.value >= 4.92) {
				priceNetto = 25385.89;
			}
			if (calculated_power.value >= 5.33) {
				priceNetto = 27804.26;
			}
			if (calculated_power.value >= 5.74) {
				priceNetto = 29110.82;
			}
			if (calculated_power.value >= 6.15) {
				priceNetto = 30752.59;
			}
			if (calculated_power.value >= 6.56) {
				priceNetto = 32394.88;
			}
			if (calculated_power.value >= 6.97) {
				priceNetto = 35374.82;
			}
			if (calculated_power.value >= 7.38) {
				priceNetto = 36773.08;
			}
			if (calculated_power.value >= 7.79) {
				priceNetto = 38237.88;
			}
			if (calculated_power.value >= 8.2) {
				priceNetto = 39426.62;
			}
			if (calculated_power.value >= 8.61) {
				priceNetto = 40603.55;
			}
			if (calculated_power.value >= 9.02) {
				priceNetto = 41667.48;
			}
			if (calculated_power.value >= 9.43) {
				priceNetto = 43405.56;
			}
			if (calculated_power.value >= 9.84) {
				priceNetto = 44406.63;
			}
			if (calculated_power.value >= 10.25) {
				priceNetto = 47723.67;
			}
			if (calculated_power.value >= 10.66) {
				priceNetto = 50688.89;
			}
			if (calculated_power.value >= 11.07) {
				priceNetto = 52515.47;
			}
			if (calculated_power.value >= 11.48) {
				priceNetto = 54091.11;
			}
			if (calculated_power.value >= 11.89) {
				priceNetto = 56353.56;
			}
			if (calculated_power.value >= 12.3) {
				priceNetto = 57542.62;
			}
			if (calculated_power.value >= 12.71) {
				priceNetto = 58038.52;
			}
			if (calculated_power.value >= 13.12) {
				priceNetto = 59554.94;
			}
			if (calculated_power.value >= 13.53) {
				priceNetto = 63488.86;
			}
			if (calculated_power.value >= 14.28) {
				priceNetto = 64763.75;
			}
			if (calculated_power.value >= 14.35) {
				priceNetto = 66411.78;
			}
			if (calculated_power.value >= 14.76) {
				priceNetto = 67965.86;
			}
			if (calculated_power.value >= 15.17) {
				priceNetto = 70047.83;
			}
			if (calculated_power.value >= 15.58) {
				priceNetto = 61852.69;
			}
			if (calculated_power.value >= 15.99) {
				priceNetto = 63229.46;
			}
			if (calculated_power.value >= 16.4) {
				priceNetto = 64518.5;
			}
			if (calculated_power.value >= 16.81) {
				priceNetto = 67133.17;
			}
			if (calculated_power.value >= 17.22) {
				priceNetto = 68237.51;
			}
			if (calculated_power.value >= 17.63) {
				priceNetto = 69573.26;
			}
			if (calculated_power.value >= 18.04) {
				priceNetto = 70849.41;
			}
			if (calculated_power.value >= 18.45) {
				priceNetto = 72619.11;
			}
			if (calculated_power.value >= 18.86) {
				priceNetto = 73890.96;
			}
			if (calculated_power.value >= 19.27) {
				priceNetto = 75402.81;
			}
			if (calculated_power.value >= 19.68) {
				priceNetto = 76674.67;
			}
			if (calculated_power.value >= 20.09) {
				priceNetto = 74225.11;
			}
			if (calculated_power.value >= 20.5) {
				priceNetto = 75285.84;
			}
			if (calculated_power.value >= 20.91) {
				priceNetto = 77658.19;
			}
			if (calculated_power.value >= 21.32) {
				priceNetto = 78750.87;
			}
			if (calculated_power.value >= 21.73) {
				priceNetto = 80519.42;
			}
			if (calculated_power.value >= 22.14) {
				priceNetto = 81601.16;
			}
			if (calculated_power.value >= 22.55) {
				priceNetto = 82922.89;
			}
			if (calculated_power.value >= 22.96) {
				priceNetto = 84004.62;
			}
			if (calculated_power.value >= 23.37) {
				priceNetto = 85773.17;
			}
			if (calculated_power.value >= 23.78) {
				priceNetto = 86317.59;
			}
			if (calculated_power.value >= 24.19) {
				priceNetto = 87630.07;
			}
			if (calculated_power.value >= 24.6) {
				priceNetto = 88913.07;
			}
			if (calculated_power.value >= 25.01) {
				priceNetto = 90903.34;
			}
			if (calculated_power.value >= 25.42) {
				priceNetto = 91975.8;
			}
			if (calculated_power.value >= 25.83) {
				priceNetto = 93288.27;
			}
			if (calculated_power.value >= 26.24) {
				priceNetto = 94360.74;
			}
			if (calculated_power.value >= 26.65) {
				priceNetto = 96225.3;
			}
			if (calculated_power.value >= 27.06) {
				priceNetto = 97297.77;
			}
			if (calculated_power.value >= 27.47) {
				priceNetto = 98610.24;
			}
			if (calculated_power.value >= 27.88) {
				priceNetto = 99893.25;
			}
			if (calculated_power.value >= 28.29) {
				priceNetto = 101652.54;
			}
			if (calculated_power.value >= 28.7) {
				priceNetto = 102725.01;
			}
			if (calculated_power.value >= 29.11) {
				priceNetto = 104037.48;
			}
			if (calculated_power.value >= 29.52) {
				priceNetto = 105109.95;
			}
			if (calculated_power.value >= 29.93) {
				priceNetto = 106869.24;
			}
			if (calculated_power.value >= 30.34) {
				priceNetto = 107941.71;
			}
			if (calculated_power.value >= 30.75) {
				priceNetto = 109254.17;
			}
			if (calculated_power.value >= 31.16) {
				priceNetto = 110326.63;
			}
			if (calculated_power.value >= 31.57) {
				priceNetto = 112107.83;
			}
			if (calculated_power.value >= 32.39) {
				priceNetto = 114425.5;
			}
			if (calculated_power.value >= 32.8) {
				priceNetto = 115497.96;
			}
			if (calculated_power.value >= 33.21) {
				priceNetto = 117999.43;
			}
			if (calculated_power.value >= 33.62) {
				priceNetto = 119071.89;
			}
			if (calculated_power.value >= 34.03) {
				priceNetto = 121121.28;
			}
			if (calculated_power.value >= 34.44) {
				priceNetto = 122193.74;
			}
			if (calculated_power.value >= 34.85) {
				priceNetto = 123953.02;
			}
			if (calculated_power.value >= 35.26) {
				priceNetto = 125025.49;
			}
			if (calculated_power.value >= 35.67) {
				priceNetto = 126337.96;
			}
			if (calculated_power.value >= 36.08) {
				priceNetto = 127410.43;
			}
			if (calculated_power.value >= 36.49) {
				priceNetto = 129191.61;
			}
			if (calculated_power.value >= 36.9) {
				priceNetto = 130264.09;
			}
			if (calculated_power.value >= 37.31) {
				priceNetto = 131576.55;
			}
			if (calculated_power.value >= 37.72) {
				priceNetto = 132649.02;
			}
			if (calculated_power.value >= 38.13) {
				priceNetto = 134408.31;
			}
			if (calculated_power.value >= 38.54) {
				priceNetto = 135480.78;
			}
			if (calculated_power.value >= 38.95) {
				priceNetto = 136793.25;
			}
			if (calculated_power.value >= 39.36) {
				priceNetto = 137865.72;
			}
			if (calculated_power.value >= 39.77) {
				priceNetto = 140414.55;
			}
			if (calculated_power.value >= 40.18) {
				priceNetto = 141487.02;
			}
			if (calculated_power.value >= 40.59) {
				priceNetto = 142799.49;
			}
			if (calculated_power.value >= 41.0) {
				priceNetto = 143871.95;
			}
			if (calculated_power.value >= 41.41) {
				priceNetto = 145811.26;
			}
			if (calculated_power.value >= 41.82) {
				priceNetto = 147376.4;
			}
			if (calculated_power.value >= 42.23) {
				priceNetto = 149768.25;
			}
			if (calculated_power.value >= 42.64) {
				priceNetto = 150840.72;
			}
			if (calculated_power.value >= 43.05) {
				priceNetto = 152600.01;
			}
			if (calculated_power.value >= 43.46) {
				priceNetto = 153672.48;
			}
			if (calculated_power.value >= 43.87) {
				priceNetto = 154984.94;
			}
			if (calculated_power.value >= 44.28) {
				priceNetto = 156057.42;
			}
			if (calculated_power.value >= 44.69) {
				priceNetto = 157816.7;
			}
			if (calculated_power.value >= 45.1) {
				priceNetto = 158889.17;
			}
			if (calculated_power.value >= 45.51) {
				priceNetto = 160201.64;
			}
			if (calculated_power.value >= 45.92) {
				priceNetto = 161274.1;
			}
			if (calculated_power.value >= 46.33) {
				priceNetto = 163033.4;
			}
			if (calculated_power.value >= 46.74) {
				priceNetto = 164632.22;
			}
			if (calculated_power.value >= 47.15) {
				priceNetto = 165944.7;
			}
			if (calculated_power.value >= 47.56) {
				priceNetto = 167017.16;
			}
			if (calculated_power.value >= 47.97) {
				priceNetto = 168776.46;
			}
			if (calculated_power.value >= 48.38) {
				priceNetto = 169848.92;
			}
			if (calculated_power.value >= 48.79) {
				priceNetto = 171161.38;
			}
			if (calculated_power.value >= 49.2) {
				priceNetto = 172233.86;
			}
			if (calculated_power.value >= 49.61) {
				priceNetto = 173303.63;
			}
		}

		if (roofing.value == 2) {
			if (calculated_power.value >= 2.05) {
				priceNetto = 14294.27;
			}
			if (calculated_power.value >= 2.46) {
				priceNetto = 16250.52;
			}
			if (calculated_power.value >= 2.87) {
				priceNetto = 18186.18;
			}
			if (calculated_power.value >= 3.28) {
				priceNetto = 19408.27;
			}
			if (calculated_power.value >= 3.69) {
				priceNetto = 21149.21;
			}
			if (calculated_power.value >= 4.1) {
				priceNetto = 22881.95;
			}
			if (calculated_power.value >= 4.51) {
				priceNetto = 24353.8;
			}
			if (calculated_power.value >= 4.92) {
				priceNetto = 26043.41;
			}
			if (calculated_power.value >= 5.33) {
				priceNetto = 28516.57;
			}
			if (calculated_power.value >= 5.74) {
				priceNetto = 29877.92;
			}
			if (calculated_power.value >= 6.15) {
				priceNetto = 31574.49;
			}
			if (calculated_power.value >= 6.56) {
				priceNetto = 33271.58;
			}
			if (calculated_power.value >= 6.97) {
				priceNetto = 36306.31;
			}
			if (calculated_power.value >= 7.38) {
				priceNetto = 37759.36;
			}
			if (calculated_power.value >= 7.79) {
				priceNetto = 39278.95;
			}
			if (calculated_power.value >= 8.2) {
				priceNetto = 40522.48;
			}
			if (calculated_power.value >= 8.61) {
				priceNetto = 41754.21;
			}
			if (calculated_power.value >= 9.02) {
				priceNetto = 42872.93;
			}
			if (calculated_power.value >= 9.43) {
				priceNetto = 44665.8;
			}
			if (calculated_power.value >= 9.84) {
				priceNetto = 45721.67;
			}
			if (calculated_power.value >= 10.25) {
				priceNetto = 48743.37;
			}
			if (calculated_power.value >= 10.66) {
				priceNetto = 51749.38;
			}
			if (calculated_power.value >= 11.07) {
				priceNetto = 53616.75;
			}
			if (calculated_power.value >= 11.48) {
				priceNetto = 55233.18;
			}
			if (calculated_power.value >= 11.89) {
				priceNetto = 57536.41;
			}
			if (calculated_power.value >= 12.3) {
				priceNetto = 58766.26;
			}
			if (calculated_power.value >= 12.71) {
				priceNetto = 59302.95;
			}
			if (calculated_power.value >= 13.12) {
				priceNetto = 60860.16;
			}
			if (calculated_power.value >= 13.53) {
				priceNetto = 64834.87;
			}
			if (calculated_power.value >= 14.28) {
				priceNetto = 66150.55;
			}
			if (calculated_power.value >= 14.35) {
				priceNetto = 67839.37;
			}
			if (calculated_power.value >= 14.76) {
				priceNetto = 69434.24;
			}
			if (calculated_power.value >= 15.17) {
				priceNetto = 71556.99;
			}
			if (calculated_power.value >= 15.58) {
				priceNetto = 63402.64;
			}
			if (calculated_power.value >= 15.99) {
				priceNetto = 64820.2;
			}
			if (calculated_power.value >= 16.4) {
				priceNetto = 66150.02;
			}
			if (calculated_power.value >= 16.81) {
				priceNetto = 68805.48;
			}
			if (calculated_power.value >= 17.22) {
				priceNetto = 69950.61;
			}
			if (calculated_power.value >= 17.63) {
				priceNetto = 71327.16;
			}
			if (calculated_power.value >= 18.04) {
				priceNetto = 72644.09;
			}
			if (calculated_power.value >= 18.45) {
				priceNetto = 74454.58;
			}
			if (calculated_power.value >= 18.86) {
				priceNetto = 75767.21;
			}
			if (calculated_power.value >= 19.27) {
				priceNetto = 77319.85;
			}
			if (calculated_power.value >= 19.68) {
				priceNetto = 78632.5;
			}
			if (calculated_power.value >= 20.09) {
				priceNetto = 76223.73;
			}
			if (calculated_power.value >= 20.5) {
				priceNetto = 77325.25;
			}
			if (calculated_power.value >= 20.91) {
				priceNetto = 79738.39;
			}
			if (calculated_power.value >= 21.32) {
				priceNetto = 80871.85;
			}
			if (calculated_power.value >= 21.73) {
				priceNetto = 82681.2;
			}
			if (calculated_power.value >= 22.14) {
				priceNetto = 83803.72;
			}
			if (calculated_power.value >= 22.55) {
				priceNetto = 85166.24;
			}
			if (calculated_power.value >= 22.96) {
				priceNetto = 86288.76;
			}
			if (calculated_power.value >= 23.37) {
				priceNetto = 88098.1;
			}
			if (calculated_power.value >= 23.78) {
				priceNetto = 88683.3;
			}
			if (calculated_power.value >= 24.19) {
				priceNetto = 90036.57;
			}
			if (calculated_power.value >= 24.6) {
				priceNetto = 91360.36;
			}
			if (calculated_power.value >= 25.01) {
				priceNetto = 93391.42;
			}
			if (calculated_power.value >= 25.42) {
				priceNetto = 94504.67;
			}
			if (calculated_power.value >= 25.83) {
				priceNetto = 95857.92;
			}
			if (calculated_power.value >= 26.24) {
				priceNetto = 96971.18;
			}
			if (calculated_power.value >= 26.65) {
				priceNetto = 98876.53;
			}
			if (calculated_power.value >= 27.06) {
				priceNetto = 99989.79;
			}
			if (calculated_power.value >= 27.47) {
				priceNetto = 101343.04;
			}
			if (calculated_power.value >= 27.88) {
				priceNetto = 102666.85;
			}
			if (calculated_power.value >= 28.29) {
				priceNetto = 104466.92;
			}
			if (calculated_power.value >= 28.7) {
				priceNetto = 105580.18;
			}
			if (calculated_power.value >= 29.11) {
				priceNetto = 106933.44;
			}
			if (calculated_power.value >= 29.52) {
				priceNetto = 108046.7;
			}
			if (calculated_power.value >= 29.93) {
				priceNetto = 109846.77;
			}
			if (calculated_power.value >= 30.34) {
				priceNetto = 110960.03;
			}
			if (calculated_power.value >= 30.75) {
				priceNetto = 112313.29;
			}
			if (calculated_power.value >= 31.16) {
				priceNetto = 113426.54;
			}
			if (calculated_power.value >= 31.57) {
				priceNetto = 115248.52;
			}
			if (calculated_power.value >= 32.39) {
				priceNetto = 117606.98;
			}
			if (calculated_power.value >= 32.8) {
				priceNetto = 118720.23;
			}
			if (calculated_power.value >= 33.21) {
				priceNetto = 121262.48;
			}
			if (calculated_power.value >= 33.62) {
				priceNetto = 122375.73;
			}
			if (calculated_power.value >= 34.03) {
				priceNetto = 124465.9;
			}
			if (calculated_power.value >= 34.44) {
				priceNetto = 125579.15;
			}
			if (calculated_power.value >= 34.85) {
				priceNetto = 127379.23;
			}
			if (calculated_power.value >= 35.26) {
				priceNetto = 128492.49;
			}
			if (calculated_power.value >= 35.67) {
				priceNetto = 129845.74;
			}
			if (calculated_power.value >= 36.08) {
				priceNetto = 130959.0;
			}
			if (calculated_power.value >= 36.49) {
				priceNetto = 132780.97;
			}
			if (calculated_power.value >= 36.9) {
				priceNetto = 133894.23;
			}
			if (calculated_power.value >= 37.31) {
				priceNetto = 135247.49;
			}
			if (calculated_power.value >= 37.72) {
				priceNetto = 136360.75;
			}
			if (calculated_power.value >= 38.13) {
				priceNetto = 138160.82;
			}
			if (calculated_power.value >= 38.54) {
				priceNetto = 139274.08;
			}
			if (calculated_power.value >= 38.95) {
				priceNetto = 140627.34;
			}
			if (calculated_power.value >= 39.36) {
				priceNetto = 141740.59;
			}
			if (calculated_power.value >= 39.77) {
				priceNetto = 144330.21;
			}
			if (calculated_power.value >= 40.18) {
				priceNetto = 145443.47;
			}
			if (calculated_power.value >= 40.59) {
				priceNetto = 146796.73;
			}
			if (calculated_power.value >= 41.0) {
				priceNetto = 147909.98;
			}
			if (calculated_power.value >= 41.41) {
				priceNetto = 149890.08;
			}
			if (calculated_power.value >= 41.82) {
				priceNetto = 151496.01;
			}
			if (calculated_power.value >= 42.23) {
				priceNetto = 153928.64;
			}
			if (calculated_power.value >= 42.64) {
				priceNetto = 155041.9;
			}
			if (calculated_power.value >= 43.05) {
				priceNetto = 156841.98;
			}
			if (calculated_power.value >= 43.46) {
				priceNetto = 157955.24;
			}
			if (calculated_power.value >= 43.87) {
				priceNetto = 159308.49;
			}
			if (calculated_power.value >= 44.28) {
				priceNetto = 160421.75;
			}
			if (calculated_power.value >= 44.69) {
				priceNetto = 162221.82;
			}
			if (calculated_power.value >= 45.1) {
				priceNetto = 163335.08;
			}
			if (calculated_power.value >= 45.51) {
				priceNetto = 164688.34;
			}
			if (calculated_power.value >= 45.92) {
				priceNetto = 165801.59;
			}
			if (calculated_power.value >= 46.33) {
				priceNetto = 167601.67;
			}
			if (calculated_power.value >= 46.74) {
				priceNetto = 169241.29;
			}
			if (calculated_power.value >= 47.15) {
				priceNetto = 170594.55;
			}
			if (calculated_power.value >= 47.56) {
				priceNetto = 171707.8;
			}
			if (calculated_power.value >= 47.97) {
				priceNetto = 173507.88;
			}
			if (calculated_power.value >= 48.38) {
				priceNetto = 174621.13;
			}
			if (calculated_power.value >= 48.79) {
				priceNetto = 175974.39;
			}
			if (calculated_power.value >= 49.2) {
				priceNetto = 177087.65;
			}
			if (calculated_power.value >= 49.61) {
				priceNetto = 178198.21;
			}
		}

		if (roofing.value == 3) {
			if (calculated_power.value >= 2.05) {
				priceNetto = 14343.84;
			}
			if (calculated_power.value >= 2.46) {
				priceNetto = 16310.01;
			}
			if (calculated_power.value >= 2.87) {
				priceNetto = 18255.59;
			}
			if (calculated_power.value >= 3.28) {
				priceNetto = 19487.59;
			}
			if (calculated_power.value >= 3.69) {
				priceNetto = 21238.45;
			}
			if (calculated_power.value >= 4.1) {
				priceNetto = 22981.1;
			}
			if (calculated_power.value >= 4.51) {
				priceNetto = 24462.86;
			}
			if (calculated_power.value >= 4.92) {
				priceNetto = 26162.39;
			}
			if (calculated_power.value >= 5.33) {
				priceNetto = 28645.47;
			}
			if (calculated_power.value >= 5.74) {
				priceNetto = 30016.74;
			}
			if (calculated_power.value >= 6.15) {
				priceNetto = 31723.22;
			}
			if (calculated_power.value >= 6.56) {
				priceNetto = 33430.22;
			}
			if (calculated_power.value >= 6.97) {
				priceNetto = 36474.86;
			}
			if (calculated_power.value >= 7.38) {
				priceNetto = 37937.83;
			}
			if (calculated_power.value >= 7.79) {
				priceNetto = 39467.34;
			}
			if (calculated_power.value >= 8.2) {
				priceNetto = 40720.79;
			}
			if (calculated_power.value >= 8.61) {
				priceNetto = 41962.42;
			}
			if (calculated_power.value >= 9.02) {
				priceNetto = 43091.07;
			}
			if (calculated_power.value >= 9.43) {
				priceNetto = 44893.85;
			}
			if (calculated_power.value >= 9.84) {
				priceNetto = 45959.63;
			}
			if (calculated_power.value >= 10.25) {
				priceNetto = 49381.82;
			}
			if (calculated_power.value >= 10.66) {
				priceNetto = 52413.37;
			}
			if (calculated_power.value >= 11.07) {
				priceNetto = 54306.28;
			}
			if (calculated_power.value >= 11.48) {
				priceNetto = 55948.24;
			}
			if (calculated_power.value >= 11.89) {
				priceNetto = 58277.02;
			}
			if (calculated_power.value >= 12.3) {
				priceNetto = 59532.41;
			}
			if (calculated_power.value >= 12.71) {
				priceNetto = 60094.63;
			}
			if (calculated_power.value >= 13.12) {
				priceNetto = 61677.38;
			}
			if (calculated_power.value >= 13.53) {
				priceNetto = 65677.63;
			}
			if (calculated_power.value >= 14.28) {
				priceNetto = 67018.84;
			}
			if (calculated_power.value >= 14.35) {
				priceNetto = 68733.2;
			}
			if (calculated_power.value >= 14.76) {
				priceNetto = 70353.61;
			}
			if (calculated_power.value >= 15.17) {
				priceNetto = 72501.9;
			}
			if (calculated_power.value >= 15.58) {
				priceNetto = 64373.09;
			}
			if (calculated_power.value >= 15.99) {
				priceNetto = 65816.18;
			}
			if (calculated_power.value >= 16.4) {
				priceNetto = 67171.55;
			}
			if (calculated_power.value >= 16.81) {
				priceNetto = 69852.55;
			}
			if (calculated_power.value >= 17.22) {
				priceNetto = 71023.21;
			}
			if (calculated_power.value >= 17.63) {
				priceNetto = 72425.29;
			}
			if (calculated_power.value >= 18.04) {
				priceNetto = 73767.77;
			}
			if (calculated_power.value >= 18.45) {
				priceNetto = 75603.79;
			}
			if (calculated_power.value >= 18.86) {
				priceNetto = 76941.96;
			}
			if (calculated_power.value >= 19.27) {
				priceNetto = 78520.14;
			}
			if (calculated_power.value >= 19.68) {
				priceNetto = 79858.33;
			}
			if (calculated_power.value >= 20.09) {
				priceNetto = 77475.1;
			}
			if (calculated_power.value >= 20.5) {
				priceNetto = 78602.15;
			}
			if (calculated_power.value >= 20.91) {
				priceNetto = 81040.83;
			}
			if (calculated_power.value >= 21.32) {
				priceNetto = 82199.83;
			}
			if (calculated_power.value >= 21.73) {
				priceNetto = 84034.71;
			}
			if (calculated_power.value >= 22.14) {
				priceNetto = 85182.78;
			}
			if (calculated_power.value >= 22.55) {
				priceNetto = 86570.84;
			}
			if (calculated_power.value >= 22.96) {
				priceNetto = 87718.89;
			}
			if (calculated_power.value >= 23.37) {
				priceNetto = 89553.77;
			}
			if (calculated_power.value >= 23.78) {
				priceNetto = 90164.51;
			}
			if (calculated_power.value >= 24.19) {
				priceNetto = 91543.32;
			}
			if (calculated_power.value >= 24.6) {
				priceNetto = 92892.65;
			}
			if (calculated_power.value >= 25.01) {
				priceNetto = 94949.24;
			}
			if (calculated_power.value >= 25.42) {
				priceNetto = 96088.03;
			}
			if (calculated_power.value >= 25.83) {
				priceNetto = 97466.82;
			}
			if (calculated_power.value >= 26.24) {
				priceNetto = 98605.62;
			}
			if (calculated_power.value >= 26.65) {
				priceNetto = 100536.5;
			}
			if (calculated_power.value >= 27.06) {
				priceNetto = 101675.3;
			}
			if (calculated_power.value >= 27.47) {
				priceNetto = 103054.09;
			}
			if (calculated_power.value >= 27.88) {
				priceNetto = 104403.44;
			}
			if (calculated_power.value >= 28.29) {
				priceNetto = 106229.05;
			}
			if (calculated_power.value >= 28.7) {
				priceNetto = 107367.85;
			}
			if (calculated_power.value >= 29.11) {
				priceNetto = 108746.64;
			}
			if (calculated_power.value >= 29.52) {
				priceNetto = 109885.44;
			}
			if (calculated_power.value >= 29.93) {
				priceNetto = 111711.05;
			}
			if (calculated_power.value >= 30.34) {
				priceNetto = 112849.85;
			}
			if (calculated_power.value >= 30.75) {
				priceNetto = 114228.64;
			}
			if (calculated_power.value >= 31.16) {
				priceNetto = 115367.43;
			}
			if (calculated_power.value >= 31.57) {
				priceNetto = 117214.95;
			}
			if (calculated_power.value >= 32.39) {
				priceNetto = 119598.95;
			}
			if (calculated_power.value >= 32.8) {
				priceNetto = 120737.73;
			}
			if (calculated_power.value >= 33.21) {
				priceNetto = 123305.53;
			}
			if (calculated_power.value >= 33.62) {
				priceNetto = 124444.32;
			}
			if (calculated_power.value >= 34.03) {
				priceNetto = 126560.03;
			}
			if (calculated_power.value >= 34.44) {
				priceNetto = 127698.81;
			}
			if (calculated_power.value >= 34.85) {
				priceNetto = 129524.43;
			}
			if (calculated_power.value >= 35.26) {
				priceNetto = 130663.23;
			}
			if (calculated_power.value >= 35.67) {
				priceNetto = 132042.02;
			}
			if (calculated_power.value >= 36.08) {
				priceNetto = 133180.82;
			}
			if (calculated_power.value >= 36.49) {
				priceNetto = 135028.32;
			}
			if (calculated_power.value >= 36.9) {
				priceNetto = 136167.12;
			}
			if (calculated_power.value >= 37.31) {
				priceNetto = 137545.91;
			}
			if (calculated_power.value >= 37.72) {
				priceNetto = 138684.71;
			}
			if (calculated_power.value >= 38.13) {
				priceNetto = 140510.32;
			}
			if (calculated_power.value >= 38.54) {
				priceNetto = 141649.12;
			}
			if (calculated_power.value >= 38.95) {
				priceNetto = 143027.91;
			}
			if (calculated_power.value >= 39.36) {
				priceNetto = 144166.71;
			}
			if (calculated_power.value >= 39.77) {
				priceNetto = 146781.87;
			}
			if (calculated_power.value >= 40.18) {
				priceNetto = 147920.67;
			}
			if (calculated_power.value >= 40.59) {
				priceNetto = 149299.46;
			}
			if (calculated_power.value >= 41.0) {
				priceNetto = 150438.25;
			}
			if (calculated_power.value >= 41.41) {
				priceNetto = 152443.88;
			}
			if (calculated_power.value >= 41.82) {
				priceNetto = 154075.35;
			}
			if (calculated_power.value >= 42.23) {
				priceNetto = 156533.53;
			}
			if (calculated_power.value >= 42.64) {
				priceNetto = 157672.32;
			}
			if (calculated_power.value >= 43.05) {
				priceNetto = 159497.94;
			}
			if (calculated_power.value >= 43.46) {
				priceNetto = 160636.73;
			}
			if (calculated_power.value >= 43.87) {
				priceNetto = 162015.53;
			}
			if (calculated_power.value >= 44.28) {
				priceNetto = 163154.32;
			}
			if (calculated_power.value >= 44.69) {
				priceNetto = 164979.94;
			}
			if (calculated_power.value >= 45.1) {
				priceNetto = 166118.73;
			}
			if (calculated_power.value >= 45.51) {
				priceNetto = 167497.53;
			}
			if (calculated_power.value >= 45.92) {
				priceNetto = 168636.31;
			}
			if (calculated_power.value >= 46.33) {
				priceNetto = 170461.94;
			}
			if (calculated_power.value >= 46.74) {
				priceNetto = 172127.09;
			}
			if (calculated_power.value >= 47.15) {
				priceNetto = 173505.89;
			}
			if (calculated_power.value >= 47.56) {
				priceNetto = 174644.68;
			}
			if (calculated_power.value >= 47.97) {
				priceNetto = 176470.3;
			}
			if (calculated_power.value >= 48.38) {
				priceNetto = 177609.09;
			}
			if (calculated_power.value >= 48.79) {
				priceNetto = 178987.88;
			}
			if (calculated_power.value >= 49.2) {
				priceNetto = 180126.68;
			}
			if (calculated_power.value >= 49.61) {
				priceNetto = 181262.78;
			}
		}

		if (roofing.value == 4) {
			if (calculated_power.value >= 2.05) {
				priceNetto = 14421.57;
			}
			if (calculated_power.value >= 2.46) {
				priceNetto = 16403.28;
			}
			if (calculated_power.value >= 2.87) {
				priceNetto = 18364.41;
			}
			if (calculated_power.value >= 3.28) {
				priceNetto = 19611.96;
			}
			if (calculated_power.value >= 3.69) {
				priceNetto = 21378.36;
			}
			if (calculated_power.value >= 4.1) {
				priceNetto = 23136.55;
			}
			if (calculated_power.value >= 4.51) {
				priceNetto = 24633.86;
			}
			if (calculated_power.value >= 4.92) {
				priceNetto = 26348.93;
			}
			if (calculated_power.value >= 5.33) {
				priceNetto = 28847.56;
			}
			if (calculated_power.value >= 5.74) {
				priceNetto = 30234.37;
			}
			if (calculated_power.value >= 6.15) {
				priceNetto = 31956.4;
			}
			if (calculated_power.value >= 6.56) {
				priceNetto = 33678.95;
			}
			if (calculated_power.value >= 6.97) {
				priceNetto = 36739.14;
			}
			if (calculated_power.value >= 7.38) {
				priceNetto = 38217.65;
			}
			if (calculated_power.value >= 7.79) {
				priceNetto = 39762.7;
			}
			if (calculated_power.value >= 8.2) {
				priceNetto = 41031.69;
			}
			if (calculated_power.value >= 8.61) {
				priceNetto = 42288.88;
			}
			if (calculated_power.value >= 9.02) {
				priceNetto = 43433.07;
			}
			if (calculated_power.value >= 9.43) {
				priceNetto = 45251.4;
			}
			if (calculated_power.value >= 9.84) {
				priceNetto = 46332.72;
			}
			if (calculated_power.value >= 10.25) {
				priceNetto = 49780.17;
			}
			if (calculated_power.value >= 10.66) {
				priceNetto = 52827.66;
			}
			if (calculated_power.value >= 11.07) {
				priceNetto = 54736.5;
			}
			if (calculated_power.value >= 11.48) {
				priceNetto = 56394.39;
			}
			if (calculated_power.value >= 11.89) {
				priceNetto = 58739.11;
			}
			if (calculated_power.value >= 12.3) {
				priceNetto = 60010.43;
			}
			if (calculated_power.value >= 12.71) {
				priceNetto = 60588.59;
			}
			if (calculated_power.value >= 13.12) {
				priceNetto = 62187.27;
			}
			if (calculated_power.value >= 13.53) {
				priceNetto = 66203.45;
			}
			if (calculated_power.value >= 14.28) {
				priceNetto = 67560.6;
			}
			if (calculated_power.value >= 14.35) {
				priceNetto = 69290.89;
			}
			if (calculated_power.value >= 14.76) {
				priceNetto = 70927.23;
			}
			if (calculated_power.value >= 15.17) {
				priceNetto = 73091.46;
			}
			if (calculated_power.value >= 15.58) {
				priceNetto = 64978.58;
			}
			if (calculated_power.value >= 15.99) {
				priceNetto = 66437.61;
			}
			if (calculated_power.value >= 16.4) {
				priceNetto = 67808.91;
			}
			if (calculated_power.value >= 16.81) {
				priceNetto = 70505.84;
			}
			if (calculated_power.value >= 17.22) {
				priceNetto = 71692.44;
			}
			if (calculated_power.value >= 17.63) {
				priceNetto = 73110.46;
			}
			if (calculated_power.value >= 18.04) {
				priceNetto = 74468.86;
			}
			if (calculated_power.value >= 18.45) {
				priceNetto = 76320.82;
			}
			if (calculated_power.value >= 18.86) {
				priceNetto = 77674.93;
			}
			if (calculated_power.value >= 19.27) {
				priceNetto = 79269.04;
			}
			if (calculated_power.value >= 19.68) {
				priceNetto = 80623.16;
			}
			if (calculated_power.value >= 20.09) {
				priceNetto = 78255.86;
			}
			if (calculated_power.value >= 20.5) {
				priceNetto = 79398.85;
			}
			if (calculated_power.value >= 20.91) {
				priceNetto = 81853.47;
			}
			if (calculated_power.value >= 21.32) {
				priceNetto = 83028.4;
			}
			if (calculated_power.value >= 21.73) {
				priceNetto = 84879.22;
			}
			if (calculated_power.value >= 22.14) {
				priceNetto = 86043.22;
			}
			if (calculated_power.value >= 22.55) {
				priceNetto = 87447.21;
			}
			if (calculated_power.value >= 22.96) {
				priceNetto = 88611.2;
			}
			if (calculated_power.value >= 23.37) {
				priceNetto = 90462.01;
			}
			if (calculated_power.value >= 23.78) {
				priceNetto = 91088.69;
			}
			if (calculated_power.value >= 24.19) {
				priceNetto = 92483.42;
			}
			if (calculated_power.value >= 24.6) {
				priceNetto = 93848.69;
			}
			if (calculated_power.value >= 25.01) {
				priceNetto = 95921.22;
			}
			if (calculated_power.value >= 25.42) {
				priceNetto = 97075.94;
			}
			if (calculated_power.value >= 25.83) {
				priceNetto = 98470.67;
			}
			if (calculated_power.value >= 26.24) {
				priceNetto = 99625.4;
			}
			if (calculated_power.value >= 26.65) {
				priceNetto = 101572.22;
			}
			if (calculated_power.value >= 27.06) {
				priceNetto = 102726.95;
			}
			if (calculated_power.value >= 27.47) {
				priceNetto = 104121.67;
			}
			if (calculated_power.value >= 27.88) {
				priceNetto = 105486.95;
			}
			if (calculated_power.value >= 28.29) {
				priceNetto = 107328.5;
			}
			if (calculated_power.value >= 28.7) {
				priceNetto = 108483.23;
			}
			if (calculated_power.value >= 29.11) {
				priceNetto = 109877.96;
			}
			if (calculated_power.value >= 29.52) {
				priceNetto = 111032.69;
			}
			if (calculated_power.value >= 29.93) {
				priceNetto = 112874.24;
			}
			if (calculated_power.value >= 30.34) {
				priceNetto = 114028.97;
			}
			if (calculated_power.value >= 30.75) {
				priceNetto = 115423.69;
			}
			if (calculated_power.value >= 31.16) {
				priceNetto = 116578.42;
			}
			if (calculated_power.value >= 31.57) {
				priceNetto = 118441.87;
			}
			if (calculated_power.value >= 32.39) {
				priceNetto = 120841.8;
			}
			if (calculated_power.value >= 32.8) {
				priceNetto = 121996.52;
			}
			if (calculated_power.value >= 33.21) {
				priceNetto = 124580.25;
			}
			if (calculated_power.value >= 33.62) {
				priceNetto = 125734.97;
			}
			if (calculated_power.value >= 34.03) {
				priceNetto = 127866.62;
			}
			if (calculated_power.value >= 34.44) {
				priceNetto = 129021.34;
			}
			if (calculated_power.value >= 34.85) {
				priceNetto = 130862.89;
			}
			if (calculated_power.value >= 35.26) {
				priceNetto = 132017.62;
			}
			if (calculated_power.value >= 35.67) {
				priceNetto = 133412.34;
			}
			if (calculated_power.value >= 36.08) {
				priceNetto = 134567.08;
			}
			if (calculated_power.value >= 36.49) {
				priceNetto = 136430.52;
			}
			if (calculated_power.value >= 36.9) {
				priceNetto = 137585.25;
			}
			if (calculated_power.value >= 37.31) {
				priceNetto = 138979.98;
			}
			if (calculated_power.value >= 37.72) {
				priceNetto = 140134.71;
			}
			if (calculated_power.value >= 38.13) {
				priceNetto = 141976.26;
			}
			if (calculated_power.value >= 38.54) {
				priceNetto = 143130.99;
			}
			if (calculated_power.value >= 38.95) {
				priceNetto = 144525.71;
			}
			if (calculated_power.value >= 39.36) {
				priceNetto = 145680.45;
			}
			if (calculated_power.value >= 39.77) {
				priceNetto = 148311.54;
			}
			if (calculated_power.value >= 40.18) {
				priceNetto = 149466.27;
			}
			if (calculated_power.value >= 40.59) {
				priceNetto = 150861.0;
			}
			if (calculated_power.value >= 41.0) {
				priceNetto = 152015.72;
			}
			if (calculated_power.value >= 41.41) {
				priceNetto = 154037.29;
			}
			if (calculated_power.value >= 41.82) {
				priceNetto = 155684.69;
			}
			if (calculated_power.value >= 42.23) {
				priceNetto = 158158.8;
			}
			if (calculated_power.value >= 42.64) {
				priceNetto = 159313.53;
			}
			if (calculated_power.value >= 43.05) {
				priceNetto = 161155.08;
			}
			if (calculated_power.value >= 43.46) {
				priceNetto = 162309.81;
			}
			if (calculated_power.value >= 43.87) {
				priceNetto = 163704.53;
			}
			if (calculated_power.value >= 44.28) {
				priceNetto = 164859.27;
			}
			if (calculated_power.value >= 44.69) {
				priceNetto = 166700.81;
			}
			if (calculated_power.value >= 45.1) {
				priceNetto = 167855.54;
			}
			if (calculated_power.value >= 45.51) {
				priceNetto = 169250.27;
			}
			if (calculated_power.value >= 45.92) {
				priceNetto = 170404.99;
			}
			if (calculated_power.value >= 46.33) {
				priceNetto = 172246.55;
			}
			if (calculated_power.value >= 46.74) {
				priceNetto = 173927.63;
			}
			if (calculated_power.value >= 47.15) {
				priceNetto = 175322.37;
			}
			if (calculated_power.value >= 47.56) {
				priceNetto = 176477.09;
			}
			if (calculated_power.value >= 47.97) {
				priceNetto = 178318.65;
			}
			if (calculated_power.value >= 48.38) {
				priceNetto = 179473.37;
			}
			if (calculated_power.value >= 48.79) {
				priceNetto = 180868.1;
			}
			if (calculated_power.value >= 49.2) {
				priceNetto = 182022.83;
			}
			if (calculated_power.value >= 49.61) {
				priceNetto = 183174.86;
			}
		}
	}
	if (document.getElementById('hoymiles-inwerter').selected == false) {
		if (office_level.value == 'ZL') {
			priceNetto = priceNetto + Math.ceil(calculated_power.value) * 200;
		}
		if (office_level.value == 'SR') {
			priceNetto = priceNetto + Math.ceil(calculated_power.value) * 300;
		}

		if (office_level.value == 'BR') {
			priceNetto = priceNetto + Math.ceil(calculated_power.value) * 400;
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

	if (office_level.value == 'ZL') {
		zero_price_calc = zero_price_calc + Math.ceil(calculated_power.value) * 200;
	}
	if (office_level.value == 'SR') {
		zero_price_calc = zero_price_calc + Math.ceil(calculated_power.value) * 300;
	}

	if (office_level.value == 'BR') {
		zero_price_calc = zero_price_calc + Math.ceil(calculated_power.value) * 400;
	}
	return zero_price_calc * 1.05;
};
