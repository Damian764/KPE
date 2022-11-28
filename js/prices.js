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
		const sunLink410W = document.getElementById('sun-link-410W');
		const trinaSolar420W = document.getElementById('trina-solar-420W');
		const sunLink455W = document.getElementById('sun-link-455W');
		const trinaSolar455W = document.getElementById('trina-solar-455W');
		const trinaSolar460W = document.getElementById('trina-solar-460W');
		if (roofing.value == 0) {
			if (sunLink410W.selected == true || trinaSolar420W.selected == true) {
				if (calculated_power.value >= 2.05) priceNetto = 13692.18;
				if (calculated_power.value >= 2.46) priceNetto = 15528.01;
				if (calculated_power.value >= 2.87) priceNetto = 17343.26;
				if (calculated_power.value >= 3.28) priceNetto = 18444.93;
				if (calculated_power.value >= 3.69) priceNetto = 20065.45;
				if (calculated_power.value >= 4.1) priceNetto = 21677.77;
				if (calculated_power.value >= 4.51) priceNetto = 23029.2;
				if (calculated_power.value >= 4.92) priceNetto = 24598.39;
				if (calculated_power.value >= 5.33) priceNetto = 26951.13;
				if (calculated_power.value >= 5.74) priceNetto = 28192.07;
				if (calculated_power.value >= 6.15) priceNetto = 29768.22;
				if (calculated_power.value >= 6.56) priceNetto = 31344.89;
				if (calculated_power.value >= 6.97) priceNetto = 34259.2;
				if (calculated_power.value >= 7.38) priceNetto = 35591.83;
				if (calculated_power.value >= 7.79) priceNetto = 36991.01;
				if (calculated_power.value >= 8.2) priceNetto = 38114.12;
				if (calculated_power.value >= 8.61) priceNetto = 39225.43;
				if (calculated_power.value >= 9.02) priceNetto = 40223.74;
				if (calculated_power.value >= 9.43) priceNetto = 41896.19;
				if (calculated_power.value >= 9.84) priceNetto = 42831.63;
				if (calculated_power.value >= 10.25) priceNetto = 44919.06;
				if (calculated_power.value >= 10.66) priceNetto = 47746.33;
				if (calculated_power.value >= 11.07) priceNetto = 49462.74;
				if (calculated_power.value >= 11.48) priceNetto = 50934.32;
				if (calculated_power.value >= 11.89) priceNetto = 53075.97;
				if (calculated_power.value >= 12.3) priceNetto = 54170.4;
				if (calculated_power.value >= 12.71) priceNetto = 54588.58;
				if (calculated_power.value >= 13.12) priceNetto = 56002.39;
				if (calculated_power.value >= 13.53) priceNetto = 59774.74;
				if (calculated_power.value >= 14.28) priceNetto = 60952.91;
				if (calculated_power.value >= 14.35) priceNetto = 62495.12;
				if (calculated_power.value >= 14.76) priceNetto = 63125.67;
				if (calculated_power.value >= 15.17) priceNetto = 63536.31;
				if (calculated_power.value >= 15.58) priceNetto = 63946.03;
				if (calculated_power.value >= 15.99) priceNetto = 64346.43;
				if (calculated_power.value >= 16.4) priceNetto = 64761.55;
				if (calculated_power.value >= 16.81) priceNetto = 65138.75;
				if (calculated_power.value >= 17.22) priceNetto = 65511.34;
				if (calculated_power.value >= 17.63) priceNetto = 65890.08;
				if (calculated_power.value >= 18.04) priceNetto = 66233.89;
				if (calculated_power.value >= 18.45) priceNetto = 67894.8;
				if (calculated_power.value >= 18.86) priceNetto = 69070.0;
				if (calculated_power.value >= 19.27) priceNetto = 70479.36;
				if (calculated_power.value >= 19.68) priceNetto = 71654.57;
				if (calculated_power.value >= 20.09) priceNetto = 69199.13;
				if (calculated_power.value >= 20.5) priceNetto = 70168.36;
				if (calculated_power.value >= 20.91) priceNetto = 72417.23;
				if (calculated_power.value >= 21.32) priceNetto = 73417.63;
				if (calculated_power.value >= 21.73) priceNetto = 75077.43;
				if (calculated_power.value >= 22.14) priceNetto = 76067.16;
				if (calculated_power.value >= 22.55) priceNetto = 77291.03;
				if (calculated_power.value >= 22.96) priceNetto = 78280.75;
				if (calculated_power.value >= 23.37) priceNetto = 79940.54;
				if (calculated_power.value >= 23.78) priceNetto = 80406.05;
				if (calculated_power.value >= 24.19) priceNetto = 81620.89;
				if (calculated_power.value >= 24.6) priceNetto = 82806.98;
				if (calculated_power.value >= 25.01) priceNetto = 84683.08;
				if (calculated_power.value >= 25.42) priceNetto = 85663.76;
				if (calculated_power.value >= 25.83) priceNetto = 86878.59;
				if (calculated_power.value >= 26.24) priceNetto = 87859.28;
				if (calculated_power.value >= 26.65) priceNetto = 89612.74;
				if (calculated_power.value >= 27.06) priceNetto = 90593.43;
				if (calculated_power.value >= 27.47) priceNetto = 91808.26;
				if (calculated_power.value >= 27.88) priceNetto = 92994.36;
				if (calculated_power.value >= 28.29) priceNetto = 94645.11;
				if (calculated_power.value >= 28.7) priceNetto = 95625.8;
				if (calculated_power.value >= 29.11) priceNetto = 96840.63;
				if (calculated_power.value >= 29.52) priceNetto = 97821.32;
				if (calculated_power.value >= 29.93) priceNetto = 99472.07;
				if (calculated_power.value >= 30.34) priceNetto = 100452.76;
				if (calculated_power.value >= 30.75) priceNetto = 101667.59;
				if (calculated_power.value >= 31.16) priceNetto = 102648.27;
				if (calculated_power.value >= 31.57) priceNetto = 104320.39;
				if (calculated_power.value >= 32.39) priceNetto = 106515.91;
				if (calculated_power.value >= 32.8) priceNetto = 107496.59;
				if (calculated_power.value >= 33.21) priceNetto = 109871.42;
				if (calculated_power.value >= 33.62) priceNetto = 110852.1;
				if (calculated_power.value >= 34.03) priceNetto = 112785.88;
				if (calculated_power.value >= 34.44) priceNetto = 113766.55;
				if (calculated_power.value >= 34.85) priceNetto = 115417.31;
				if (calculated_power.value >= 35.26) priceNetto = 116398.0;
				if (calculated_power.value >= 35.67) priceNetto = 117612.83;
				if (calculated_power.value >= 36.08) priceNetto = 118593.51;
				if (calculated_power.value >= 36.49) priceNetto = 120265.63;
				if (calculated_power.value >= 36.9) priceNetto = 121246.32;
				if (calculated_power.value >= 37.31) priceNetto = 122461.15;
				if (calculated_power.value >= 37.72) priceNetto = 123441.84;
				if (calculated_power.value >= 38.13) priceNetto = 125092.59;
				if (calculated_power.value >= 38.54) priceNetto = 126073.28;
				if (calculated_power.value >= 38.95) priceNetto = 127288.11;
				if (calculated_power.value >= 39.36) priceNetto = 128268.8;
				if (calculated_power.value >= 39.77) priceNetto = 130689.84;
				if (calculated_power.value >= 40.18) priceNetto = 131670.53;
				if (calculated_power.value >= 40.59) priceNetto = 132885.36;
				if (calculated_power.value >= 41.0) priceNetto = 133866.04;
				if (calculated_power.value >= 41.41) priceNetto = 135384.87;
				if (calculated_power.value >= 41.82) priceNetto = 136897.51;
				if (calculated_power.value >= 42.23) priceNetto = 138499.15;
				if (calculated_power.value >= 42.64) priceNetto = 139913.41;
				if (calculated_power.value >= 43.05) priceNetto = 141540.59;
				if (calculated_power.value >= 43.46) priceNetto = 143033.78;
				if (calculated_power.value >= 43.87) priceNetto = 144248.61;
				if (calculated_power.value >= 44.28) priceNetto = 145229.3;
				if (calculated_power.value >= 44.69) priceNetto = 146880.05;
				if (calculated_power.value >= 45.1) priceNetto = 147860.74;
				if (calculated_power.value >= 45.51) priceNetto = 149075.57;
				if (calculated_power.value >= 45.92) priceNetto = 150056.25;
				if (calculated_power.value >= 46.33) priceNetto = 151707.01;
				if (calculated_power.value >= 46.74) priceNetto = 153201.22;
				if (calculated_power.value >= 47.15) priceNetto = 154416.06;
				if (calculated_power.value >= 47.56) priceNetto = 155396.73;
				if (calculated_power.value >= 47.97) priceNetto = 157047.5;
				if (calculated_power.value >= 48.38) priceNetto = 158028.18;
				if (calculated_power.value >= 48.79) priceNetto = 159243.01;
				if (calculated_power.value >= 49.2) priceNetto = 160223.7;
				if (calculated_power.value >= 49.61) priceNetto = 161201.75;
			}

			if (sunLink455W.selected == true || trinaSolar455W.selected == true || trinaSolar460W.selected == true) {
				if (calculated_power.value >= 2.27) priceNetto = 14510.02;
				if (calculated_power.value >= 2.73) priceNetto = 16521.76;
				if (calculated_power.value >= 3.18) priceNetto = 18513.19;
				if (calculated_power.value >= 3.64) priceNetto = 19760.67;
				if (calculated_power.value >= 4.09) priceNetto = 21555.02;
				if (calculated_power.value >= 4.55) priceNetto = 23090.55;
				if (calculated_power.value >= 5.0) priceNetto = 24839.56;
				if (calculated_power.value >= 5.46) priceNetto = 26219.45;
				if (calculated_power.value >= 5.91) priceNetto = 28703.14;
				if (calculated_power.value >= 6.37) priceNetto = 30464.63;
				if (calculated_power.value >= 6.82) priceNetto = 32836.55;
				if (calculated_power.value >= 7.28) priceNetto = 34338.75;
				if (calculated_power.value >= 7.73) priceNetto = 36727.52;
				if (calculated_power.value >= 8.19) priceNetto = 37636.46;
				if (calculated_power.value >= 8.64) priceNetto = 39108.03;
				if (calculated_power.value >= 9.1) priceNetto = 40302.16;
				if (calculated_power.value >= 9.55) priceNetto = 42328.71;
				if (calculated_power.value >= 10.01) priceNetto = 43429.84;
				if (calculated_power.value >= 10.46) priceNetto = 46634.13;
				if (calculated_power.value >= 10.92) priceNetto = 47736.24;
				if (calculated_power.value >= 11.37) priceNetto = 50023.43;
				if (calculated_power.value >= 11.83) priceNetto = 51649.72;
				if (calculated_power.value >= 12.28) priceNetto = 53506.94;
				if (calculated_power.value >= 12.74) priceNetto = 55133.23;
				if (calculated_power.value >= 13.19) priceNetto = 57420.43;
				if (calculated_power.value >= 13.65) priceNetto = 58628.23;
				if (calculated_power.value >= 14.1) priceNetto = 59041.23;
				if (calculated_power.value >= 14.56) priceNetto = 60603.41;
				if (calculated_power.value >= 15.01) priceNetto = 64692.52;
				if (calculated_power.value >= 15.47) priceNetto = 56712.24;
				if (calculated_power.value >= 15.92) priceNetto = 58125.6;
				if (calculated_power.value >= 16.38) priceNetto = 59455.58;
				if (calculated_power.value >= 16.83) priceNetto = 61274.43;
				if (calculated_power.value >= 17.29) priceNetto = 62423.06;
				if (calculated_power.value >= 17.74) priceNetto = 63793.34;
				if (calculated_power.value >= 18.2) priceNetto = 65109.36;
				if (calculated_power.value >= 18.65) priceNetto = 67679.85;
				if (calculated_power.value >= 19.11) priceNetto = 68795.92;
				if (calculated_power.value >= 19.56) priceNetto = 70133.66;
				if (calculated_power.value >= 20.02) priceNetto = 71435.73;
				if (calculated_power.value >= 20.47) priceNetto = 74622.58;
				if (calculated_power.value >= 20.93) priceNetto = 75962.38;
				if (calculated_power.value >= 21.38) priceNetto = 77522.6;
				if (calculated_power.value >= 21.84) priceNetto = 78851.87;
				if (calculated_power.value >= 22.29) priceNetto = 75355.66;
				if (calculated_power.value >= 22.75) priceNetto = 76456.37;
				if (calculated_power.value >= 23.2) priceNetto = 77788.02;
				if (calculated_power.value >= 23.66) priceNetto = 78888.72;
				if (calculated_power.value >= 24.11) priceNetto = 80650.34;
				if (calculated_power.value >= 24.57) priceNetto = 81751.05;
				if (calculated_power.value >= 25.02) priceNetto = 83082.7;
				if (calculated_power.value >= 25.48) priceNetto = 84183.4;
				if (calculated_power.value >= 25.93) priceNetto = 85945.02;
				if (calculated_power.value >= 26.39) priceNetto = 86464.05;
				if (calculated_power.value >= 26.84) priceNetto = 87785.67;
				if (calculated_power.value >= 27.3) priceNetto = 89078.95;
				if (calculated_power.value >= 27.75) priceNetto = 91052.79;
				if (calculated_power.value >= 28.21) priceNetto = 92143.47;
				if (calculated_power.value >= 28.66) priceNetto = 93465.09;
				if (calculated_power.value >= 29.12) priceNetto = 94555.77;
				if (calculated_power.value >= 29.57) priceNetto = 96408.67;
				if (calculated_power.value >= 30.03) priceNetto = 97499.33;
				if (calculated_power.value >= 30.48) priceNetto = 98820.95;
				if (calculated_power.value >= 30.94) priceNetto = 100135.3;
				if (calculated_power.value >= 31.39) priceNetto = 101886.9;
				if (calculated_power.value >= 31.85) priceNetto = 102977.57;
				if (calculated_power.value >= 32.3) priceNetto = 104299.2;
				if (calculated_power.value >= 32.76) priceNetto = 105389.87;
				if (calculated_power.value >= 33.21) priceNetto = 107141.46;
				if (calculated_power.value >= 33.67) priceNetto = 108232.13;
				if (calculated_power.value >= 34.12) priceNetto = 109553.76;
				if (calculated_power.value >= 34.58) priceNetto = 110644.43;
				if (calculated_power.value >= 35.03) priceNetto = 112396.02;
				if (calculated_power.value >= 35.49) priceNetto = 113486.69;
				if (calculated_power.value >= 35.94) priceNetto = 114829.39;
				if (calculated_power.value >= 36.4) priceNetto = 115920.07;
				if (calculated_power.value >= 36.85) priceNetto = 118385.84;
				if (calculated_power.value >= 37.31) priceNetto = 119476.51;
				if (calculated_power.value >= 37.76) priceNetto = 121507.25;
				if (calculated_power.value >= 38.22) priceNetto = 122597.92;
				if (calculated_power.value >= 38.67) priceNetto = 124349.51;
				if (calculated_power.value >= 39.13) priceNetto = 125440.19;
				if (calculated_power.value >= 39.58) priceNetto = 126761.81;
				if (calculated_power.value >= 40.04) priceNetto = 127852.49;
				if (calculated_power.value >= 40.49) priceNetto = 129604.07;
				if (calculated_power.value >= 40.95) priceNetto = 130694.75;
				if (calculated_power.value >= 41.4) priceNetto = 132490.47;
				if (calculated_power.value >= 41.86) priceNetto = 133581.14;
				if (calculated_power.value >= 42.31) priceNetto = 135332.73;
				if (calculated_power.value >= 42.77) priceNetto = 136423.4;
				if (calculated_power.value >= 43.22) priceNetto = 137745.03;
				if (calculated_power.value >= 43.68) priceNetto = 138835.7;
				if (calculated_power.value >= 44.13) priceNetto = 141347.06;
				if (calculated_power.value >= 44.59) priceNetto = 142437.73;
				if (calculated_power.value >= 45.04) priceNetto = 143759.36;
				if (calculated_power.value >= 45.5) priceNetto = 144850.02;
				if (calculated_power.value >= 45.95) priceNetto = 146774.85;
				if (calculated_power.value >= 46.4) priceNetto = 147865.52;
				if (calculated_power.value >= 46.86) priceNetto = 150225.81;
				if (calculated_power.value >= 47.31) priceNetto = 151316.48;
				if (calculated_power.value >= 47.77) priceNetto = 153068.08;
				if (calculated_power.value >= 48.22) priceNetto = 154158.76;
				if (calculated_power.value >= 48.68) priceNetto = 155480.38;
				if (calculated_power.value >= 49.13) priceNetto = 156571.05;
				if (calculated_power.value >= 49.59) priceNetto = 158322.64;
				if (calculated_power.value >= 50.04) priceNetto = 159413.32;
				if (calculated_power.value >= 50.5) priceNetto = 160734.94;
			}
		}

		if (roofing.value == 1) {
			if (sunLink410W.selected == true || trinaSolar420W.selected == true) {
				if (calculated_power.value >= 2.05) priceNetto = 14020.3;
				if (calculated_power.value >= 2.46) priceNetto = 15921.76;
				if (calculated_power.value >= 2.87) priceNetto = 17802.63;
				if (calculated_power.value >= 3.28) priceNetto = 18969.92;
				if (calculated_power.value >= 3.69) priceNetto = 20656.07;
				if (calculated_power.value >= 4.1) priceNetto = 22334.01;
				if (calculated_power.value >= 4.51) priceNetto = 23751.07;
				if (calculated_power.value >= 4.92) priceNetto = 25385.89;
				if (calculated_power.value >= 5.33) priceNetto = 27804.26;
				if (calculated_power.value >= 5.74) priceNetto = 29110.82;
				if (calculated_power.value >= 6.15) priceNetto = 30752.59;
				if (calculated_power.value >= 6.56) priceNetto = 32394.88;
				if (calculated_power.value >= 6.97) priceNetto = 35374.82;
				if (calculated_power.value >= 7.38) priceNetto = 36773.08;
				if (calculated_power.value >= 7.79) priceNetto = 38237.88;
				if (calculated_power.value >= 8.2) priceNetto = 39426.62;
				if (calculated_power.value >= 8.61) priceNetto = 40603.55;
				if (calculated_power.value >= 9.02) priceNetto = 41667.48;
				if (calculated_power.value >= 9.43) priceNetto = 43405.56;
				if (calculated_power.value >= 9.84) priceNetto = 44406.63;
				if (calculated_power.value >= 10.25) priceNetto = 47723.67;
				if (calculated_power.value >= 10.66) priceNetto = 50688.89;
				if (calculated_power.value >= 11.07) priceNetto = 52515.47;
				if (calculated_power.value >= 11.48) priceNetto = 54091.11;
				if (calculated_power.value >= 11.89) priceNetto = 56353.56;
				if (calculated_power.value >= 12.3) priceNetto = 57542.62;
				if (calculated_power.value >= 12.71) priceNetto = 58038.52;
				if (calculated_power.value >= 13.12) priceNetto = 59554.94;
				if (calculated_power.value >= 13.53) priceNetto = 63488.86;
				if (calculated_power.value >= 14.28) priceNetto = 64763.75;
				if (calculated_power.value >= 14.35) priceNetto = 66411.78;
				if (calculated_power.value >= 14.76) priceNetto = 67125.36;
				if (calculated_power.value >= 15.17) priceNetto = 67613.53;
				if (calculated_power.value >= 15.58) priceNetto = 68100.76;
				if (calculated_power.value >= 15.99) priceNetto = 68578.43;
				if (calculated_power.value >= 16.4) priceNetto = 69071.2;
				if (calculated_power.value >= 16.81) priceNetto = 69525.1;
				if (calculated_power.value >= 17.22) priceNetto = 69974.26;
				if (calculated_power.value >= 17.63) priceNetto = 70429.73;
				if (calculated_power.value >= 18.04) priceNetto = 70849.41;
				if (calculated_power.value >= 18.45) priceNetto = 72619.11;
				if (calculated_power.value >= 18.86) priceNetto = 73890.96;
				if (calculated_power.value >= 19.27) priceNetto = 75402.81;
				if (calculated_power.value >= 19.68) priceNetto = 76674.67;
				if (calculated_power.value >= 20.09) priceNetto = 74225.11;
				if (calculated_power.value >= 20.5) priceNetto = 75285.84;
				if (calculated_power.value >= 20.91) priceNetto = 77658.19;
				if (calculated_power.value >= 21.32) priceNetto = 78750.87;
				if (calculated_power.value >= 21.73) priceNetto = 80519.42;
				if (calculated_power.value >= 22.14) priceNetto = 81601.16;
				if (calculated_power.value >= 22.55) priceNetto = 82922.89;
				if (calculated_power.value >= 22.96) priceNetto = 84004.62;
				if (calculated_power.value >= 23.37) priceNetto = 85773.17;
				if (calculated_power.value >= 23.78) priceNetto = 86317.59;
				if (calculated_power.value >= 24.19) priceNetto = 87630.07;
				if (calculated_power.value >= 24.6) priceNetto = 88913.07;
				if (calculated_power.value >= 25.01) priceNetto = 90903.34;
				if (calculated_power.value >= 25.42) priceNetto = 91975.8;
				if (calculated_power.value >= 25.83) priceNetto = 93288.27;
				if (calculated_power.value >= 26.24) priceNetto = 94360.74;
				if (calculated_power.value >= 26.65) priceNetto = 96225.3;
				if (calculated_power.value >= 27.06) priceNetto = 97297.77;
				if (calculated_power.value >= 27.47) priceNetto = 98610.24;
				if (calculated_power.value >= 27.88) priceNetto = 99893.25;
				if (calculated_power.value >= 28.29) priceNetto = 101652.54;
				if (calculated_power.value >= 28.7) priceNetto = 102725.01;
				if (calculated_power.value >= 29.11) priceNetto = 104037.48;
				if (calculated_power.value >= 29.52) priceNetto = 105109.95;
				if (calculated_power.value >= 29.93) priceNetto = 106869.24;
				if (calculated_power.value >= 30.34) priceNetto = 107941.71;
				if (calculated_power.value >= 30.75) priceNetto = 109254.17;
				if (calculated_power.value >= 31.16) priceNetto = 110326.63;
				if (calculated_power.value >= 31.57) priceNetto = 112107.83;
				if (calculated_power.value >= 32.39) priceNetto = 114425.5;
				if (calculated_power.value >= 32.8) priceNetto = 115497.96;
				if (calculated_power.value >= 33.21) priceNetto = 117999.43;
				if (calculated_power.value >= 33.62) priceNetto = 119071.89;
				if (calculated_power.value >= 34.03) priceNetto = 121121.28;
				if (calculated_power.value >= 34.44) priceNetto = 122193.74;
				if (calculated_power.value >= 34.85) priceNetto = 123953.02;
				if (calculated_power.value >= 35.26) priceNetto = 125025.49;
				if (calculated_power.value >= 35.67) priceNetto = 126337.96;
				if (calculated_power.value >= 36.08) priceNetto = 127410.43;
				if (calculated_power.value >= 36.49) priceNetto = 129191.61;
				if (calculated_power.value >= 36.9) priceNetto = 130264.09;
				if (calculated_power.value >= 37.31) priceNetto = 131576.55;
				if (calculated_power.value >= 37.72) priceNetto = 132649.02;
				if (calculated_power.value >= 38.13) priceNetto = 134408.31;
				if (calculated_power.value >= 38.54) priceNetto = 135480.78;
				if (calculated_power.value >= 38.95) priceNetto = 136793.25;
				if (calculated_power.value >= 39.36) priceNetto = 137865.72;
				if (calculated_power.value >= 39.77) priceNetto = 140414.55;
				if (calculated_power.value >= 40.18) priceNetto = 141487.02;
				if (calculated_power.value >= 40.59) priceNetto = 142799.49;
				if (calculated_power.value >= 41.0) priceNetto = 143871.95;
				if (calculated_power.value >= 41.41) priceNetto = 145496.02;
				if (calculated_power.value >= 41.82) priceNetto = 147113.75;
				if (calculated_power.value >= 42.23) priceNetto = 148822.69;
				if (calculated_power.value >= 42.64) priceNetto = 150339.57;
				if (calculated_power.value >= 43.05) priceNetto = 152074.69;
				if (calculated_power.value >= 43.46) priceNetto = 153672.48;
				if (calculated_power.value >= 43.87) priceNetto = 154984.94;
				if (calculated_power.value >= 44.28) priceNetto = 156057.42;
				if (calculated_power.value >= 44.69) priceNetto = 157816.7;
				if (calculated_power.value >= 45.1) priceNetto = 158889.17;
				if (calculated_power.value >= 45.51) priceNetto = 160201.64;
				if (calculated_power.value >= 45.92) priceNetto = 161274.1;
				if (calculated_power.value >= 46.33) priceNetto = 163033.4;
				if (calculated_power.value >= 46.74) priceNetto = 164632.22;
				if (calculated_power.value >= 47.15) priceNetto = 165944.7;
				if (calculated_power.value >= 47.56) priceNetto = 167017.16;
				if (calculated_power.value >= 47.97) priceNetto = 168776.46;
				if (calculated_power.value >= 48.38) priceNetto = 169848.92;
				if (calculated_power.value >= 48.79) priceNetto = 171161.38;
				if (calculated_power.value >= 49.2) priceNetto = 172233.86;
				if (calculated_power.value >= 49.61) priceNetto = 173303.63;
			}
			if (sunLink455W.selected == true || trinaSolar455W.selected == true || trinaSolar460W.selected == true) {
				if (calculated_power.value >= 2.27) priceNetto = 14838.15;
				if (calculated_power.value >= 2.73) priceNetto = 16915.51;
				if (calculated_power.value >= 3.18) priceNetto = 18972.56;
				if (calculated_power.value >= 3.64) priceNetto = 20285.67;
				if (calculated_power.value >= 4.09) priceNetto = 22145.64;
				if (calculated_power.value >= 4.55) priceNetto = 23746.8;
				if (calculated_power.value >= 5.0) priceNetto = 25561.43;
				if (calculated_power.value >= 5.46) priceNetto = 27006.94;
				if (calculated_power.value >= 5.91) priceNetto = 29556.26;
				if (calculated_power.value >= 6.37) priceNetto = 31383.38;
				if (calculated_power.value >= 6.82) priceNetto = 33820.92;
				if (calculated_power.value >= 7.28) priceNetto = 35388.74;
				if (calculated_power.value >= 7.73) priceNetto = 37843.14;
				if (calculated_power.value >= 8.19) priceNetto = 38817.7;
				if (calculated_power.value >= 8.64) priceNetto = 40354.9;
				if (calculated_power.value >= 9.1) priceNetto = 41614.65;
				if (calculated_power.value >= 9.55) priceNetto = 43706.83;
				if (calculated_power.value >= 10.01) priceNetto = 44873.58;
				if (calculated_power.value >= 10.46) priceNetto = 48143.5;
				if (calculated_power.value >= 10.92) priceNetto = 49311.23;
				if (calculated_power.value >= 11.37) priceNetto = 51664.05;
				if (calculated_power.value >= 11.83) priceNetto = 53355.96;
				if (calculated_power.value >= 12.28) priceNetto = 55278.81;
				if (calculated_power.value >= 12.74) priceNetto = 56970.72;
				if (calculated_power.value >= 13.19) priceNetto = 59323.55;
				if (calculated_power.value >= 13.65) priceNetto = 60596.97;
				if (calculated_power.value >= 14.1) priceNetto = 61075.59;
				if (calculated_power.value >= 14.56) priceNetto = 62703.4;
				if (calculated_power.value >= 15.01) priceNetto = 66858.13;
				if (calculated_power.value >= 15.47) priceNetto = 58943.48;
				if (calculated_power.value >= 15.92) priceNetto = 60422.47;
				if (calculated_power.value >= 16.38) priceNetto = 61818.06;
				if (calculated_power.value >= 16.83) priceNetto = 63702.54;
				if (calculated_power.value >= 17.29) priceNetto = 64916.8;
				if (calculated_power.value >= 17.74) priceNetto = 66352.7;
				if (calculated_power.value >= 18.2) priceNetto = 67734.35;
				if (calculated_power.value >= 18.65) priceNetto = 70370.46;
				if (calculated_power.value >= 19.11) priceNetto = 71552.16;
				if (calculated_power.value >= 19.56) priceNetto = 72955.52;
				if (calculated_power.value >= 20.02) priceNetto = 74323.22;
				if (calculated_power.value >= 20.47) priceNetto = 77575.69;
				if (calculated_power.value >= 20.93) priceNetto = 78981.12;
				if (calculated_power.value >= 21.38) priceNetto = 80606.96;
				if (calculated_power.value >= 21.84) priceNetto = 82001.86;
				if (calculated_power.value >= 22.29) priceNetto = 78571.27;
				if (calculated_power.value >= 22.75) priceNetto = 79737.6;
				if (calculated_power.value >= 23.2) priceNetto = 81134.88;
				if (calculated_power.value >= 23.66) priceNetto = 82301.21;
				if (calculated_power.value >= 24.11) priceNetto = 84128.45;
				if (calculated_power.value >= 24.57) priceNetto = 85294.78;
				if (calculated_power.value >= 25.02) priceNetto = 86692.05;
				if (calculated_power.value >= 25.48) priceNetto = 87858.38;
				if (calculated_power.value >= 25.93) priceNetto = 89685.62;
				if (calculated_power.value >= 26.39) priceNetto = 90270.28;
				if (calculated_power.value >= 26.84) priceNetto = 91657.52;
				if (calculated_power.value >= 27.3) priceNetto = 93016.43;
				if (calculated_power.value >= 27.75) priceNetto = 95055.9;
				if (calculated_power.value >= 28.21) priceNetto = 96212.2;
				if (calculated_power.value >= 28.66) priceNetto = 97599.44;
				if (calculated_power.value >= 29.12) priceNetto = 98755.75;
				if (calculated_power.value >= 29.57) priceNetto = 100674.27;
				if (calculated_power.value >= 30.03) priceNetto = 101830.56;
				if (calculated_power.value >= 30.48) priceNetto = 103217.81;
				if (calculated_power.value >= 30.94) priceNetto = 104597.78;
				if (calculated_power.value >= 31.39) priceNetto = 106415.0;
				if (calculated_power.value >= 31.85) priceNetto = 107571.3;
				if (calculated_power.value >= 32.3) priceNetto = 108958.55;
				if (calculated_power.value >= 32.76) priceNetto = 110114.84;
				if (calculated_power.value >= 33.21) priceNetto = 111932.06;
				if (calculated_power.value >= 33.67) priceNetto = 113088.36;
				if (calculated_power.value >= 34.12) priceNetto = 114475.61;
				if (calculated_power.value >= 34.58) priceNetto = 115631.9;
				if (calculated_power.value >= 35.03) priceNetto = 117449.12;
				if (calculated_power.value >= 35.49) priceNetto = 118605.42;
				if (calculated_power.value >= 35.94) priceNetto = 120013.74;
				if (calculated_power.value >= 36.4) priceNetto = 121170.04;
				if (calculated_power.value >= 36.85) priceNetto = 123701.43;
				if (calculated_power.value >= 37.31) priceNetto = 124857.73;
				if (calculated_power.value >= 37.76) priceNetto = 126954.09;
				if (calculated_power.value >= 38.22) priceNetto = 128110.4;
				if (calculated_power.value >= 38.67) priceNetto = 129927.61;
				if (calculated_power.value >= 39.13) priceNetto = 131083.91;
				if (calculated_power.value >= 39.58) priceNetto = 132471.15;
				if (calculated_power.value >= 40.04) priceNetto = 133627.46;
				if (calculated_power.value >= 40.49) priceNetto = 135444.67;
				if (calculated_power.value >= 40.95) priceNetto = 136600.97;
				if (calculated_power.value >= 41.4) priceNetto = 138462.31;
				if (calculated_power.value >= 41.86) priceNetto = 139618.6;
				if (calculated_power.value >= 42.31) priceNetto = 141435.83;
				if (calculated_power.value >= 42.77) priceNetto = 142592.12;
				if (calculated_power.value >= 43.22) priceNetto = 143979.37;
				if (calculated_power.value >= 43.68) priceNetto = 145135.66;
				if (calculated_power.value >= 44.13) priceNetto = 147712.65;
				if (calculated_power.value >= 44.59) priceNetto = 148868.94;
				if (calculated_power.value >= 45.04) priceNetto = 150256.2;
				if (calculated_power.value >= 45.5) priceNetto = 151412.49;
				if (calculated_power.value >= 45.95) priceNetto = 153402.94;
				if (calculated_power.value >= 46.4) priceNetto = 154559.24;
				if (calculated_power.value >= 46.86) priceNetto = 156985.16;
				if (calculated_power.value >= 47.31) priceNetto = 158141.45;
				if (calculated_power.value >= 47.77) priceNetto = 159958.67;
				if (calculated_power.value >= 48.22) priceNetto = 161114.97;
				if (calculated_power.value >= 48.68) priceNetto = 162502.21;
				if (calculated_power.value >= 49.13) priceNetto = 163658.52;
				if (calculated_power.value >= 49.59) priceNetto = 165475.73;
				if (calculated_power.value >= 50.04) priceNetto = 166632.03;
				if (calculated_power.value >= 50.5) priceNetto = 168019.27;
			}
		}

		if (roofing.value == 2) {
			if (sunLink410W.selected == true || trinaSolar420W.selected == true) {
				if (calculated_power.value >= 2.05) priceNetto = 14294.27;
				if (calculated_power.value >= 2.46) priceNetto = 16250.52;
				if (calculated_power.value >= 2.87) priceNetto = 18186.18;
				if (calculated_power.value >= 3.28) priceNetto = 19408.27;
				if (calculated_power.value >= 3.69) priceNetto = 21149.21;
				if (calculated_power.value >= 4.1) priceNetto = 22881.95;
				if (calculated_power.value >= 4.51) priceNetto = 24353.8;
				if (calculated_power.value >= 4.92) priceNetto = 26043.41;
				if (calculated_power.value >= 5.33) priceNetto = 28516.57;
				if (calculated_power.value >= 5.74) priceNetto = 29877.92;
				if (calculated_power.value >= 6.15) priceNetto = 31574.49;
				if (calculated_power.value >= 6.56) priceNetto = 33271.58;
				if (calculated_power.value >= 6.97) priceNetto = 36306.31;
				if (calculated_power.value >= 7.38) priceNetto = 37759.36;
				if (calculated_power.value >= 7.79) priceNetto = 39278.95;
				if (calculated_power.value >= 8.2) priceNetto = 40522.48;
				if (calculated_power.value >= 8.61) priceNetto = 41754.21;
				if (calculated_power.value >= 9.02) priceNetto = 42872.93;
				if (calculated_power.value >= 9.43) priceNetto = 44665.8;
				if (calculated_power.value >= 9.84) priceNetto = 45721.67;
				if (calculated_power.value >= 10.25) priceNetto = 48743.37;
				if (calculated_power.value >= 10.66) priceNetto = 51749.38;
				if (calculated_power.value >= 11.07) priceNetto = 53616.75;
				if (calculated_power.value >= 11.48) priceNetto = 55233.18;
				if (calculated_power.value >= 11.89) priceNetto = 57536.41;
				if (calculated_power.value >= 12.3) priceNetto = 58766.26;
				if (calculated_power.value >= 12.71) priceNetto = 59302.95;
				if (calculated_power.value >= 13.12) priceNetto = 60860.16;
				if (calculated_power.value >= 13.53) priceNetto = 64834.87;
				if (calculated_power.value >= 14.28) priceNetto = 66150.55;
				if (calculated_power.value >= 14.35) priceNetto = 67839.37;
				if (calculated_power.value >= 14.76) priceNetto = 68593.74;
				if (calculated_power.value >= 15.17) priceNetto = 69122.69;
				if (calculated_power.value >= 15.58) priceNetto = 69650.71;
				if (calculated_power.value >= 15.99) priceNetto = 70169.17;
				if (calculated_power.value >= 16.4) priceNetto = 70702.73;
				if (calculated_power.value >= 16.81) priceNetto = 71197.41;
				if (calculated_power.value >= 17.22) priceNetto = 71687.37;
				if (calculated_power.value >= 17.63) priceNetto = 72183.63;
				if (calculated_power.value >= 18.04) priceNetto = 72644.09;
				if (calculated_power.value >= 18.45) priceNetto = 74454.58;
				if (calculated_power.value >= 18.86) priceNetto = 75767.21;
				if (calculated_power.value >= 19.27) priceNetto = 77319.85;
				if (calculated_power.value >= 19.68) priceNetto = 78632.5;
				if (calculated_power.value >= 20.09) priceNetto = 76223.73;
				if (calculated_power.value >= 20.5) priceNetto = 77325.25;
				if (calculated_power.value >= 20.91) priceNetto = 79738.39;
				if (calculated_power.value >= 21.32) priceNetto = 80871.85;
				if (calculated_power.value >= 21.73) priceNetto = 82681.2;
				if (calculated_power.value >= 22.14) priceNetto = 83803.72;
				if (calculated_power.value >= 22.55) priceNetto = 85166.24;
				if (calculated_power.value >= 22.96) priceNetto = 86288.76;
				if (calculated_power.value >= 23.37) priceNetto = 88098.1;
				if (calculated_power.value >= 23.78) priceNetto = 88683.3;
				if (calculated_power.value >= 24.19) priceNetto = 90036.57;
				if (calculated_power.value >= 24.6) priceNetto = 91360.36;
				if (calculated_power.value >= 25.01) priceNetto = 93391.42;
				if (calculated_power.value >= 25.42) priceNetto = 94504.67;
				if (calculated_power.value >= 25.83) priceNetto = 95857.92;
				if (calculated_power.value >= 26.24) priceNetto = 96971.18;
				if (calculated_power.value >= 26.65) priceNetto = 98876.53;
				if (calculated_power.value >= 27.06) priceNetto = 99989.79;
				if (calculated_power.value >= 27.47) priceNetto = 101343.04;
				if (calculated_power.value >= 27.88) priceNetto = 102666.85;
				if (calculated_power.value >= 28.29) priceNetto = 104466.92;
				if (calculated_power.value >= 28.7) priceNetto = 105580.18;
				if (calculated_power.value >= 29.11) priceNetto = 106933.44;
				if (calculated_power.value >= 29.52) priceNetto = 108046.7;
				if (calculated_power.value >= 29.93) priceNetto = 109846.77;
				if (calculated_power.value >= 30.34) priceNetto = 110960.03;
				if (calculated_power.value >= 30.75) priceNetto = 112313.29;
				if (calculated_power.value >= 31.16) priceNetto = 113426.54;
				if (calculated_power.value >= 31.57) priceNetto = 115248.52;
				if (calculated_power.value >= 32.39) priceNetto = 117606.98;
				if (calculated_power.value >= 32.8) priceNetto = 118720.23;
				if (calculated_power.value >= 33.21) priceNetto = 121262.48;
				if (calculated_power.value >= 33.62) priceNetto = 122375.73;
				if (calculated_power.value >= 34.03) priceNetto = 124465.9;
				if (calculated_power.value >= 34.44) priceNetto = 125579.15;
				if (calculated_power.value >= 34.85) priceNetto = 127379.23;
				if (calculated_power.value >= 35.26) priceNetto = 128492.49;
				if (calculated_power.value >= 35.67) priceNetto = 129845.74;
				if (calculated_power.value >= 36.08) priceNetto = 130959.0;
				if (calculated_power.value >= 36.49) priceNetto = 132780.97;
				if (calculated_power.value >= 36.9) priceNetto = 133894.23;
				if (calculated_power.value >= 37.31) priceNetto = 135247.49;
				if (calculated_power.value >= 37.72) priceNetto = 136360.75;
				if (calculated_power.value >= 38.13) priceNetto = 138160.82;
				if (calculated_power.value >= 38.54) priceNetto = 139274.08;
				if (calculated_power.value >= 38.95) priceNetto = 140627.34;
				if (calculated_power.value >= 39.36) priceNetto = 141740.59;
				if (calculated_power.value >= 39.77) priceNetto = 144330.21;
				if (calculated_power.value >= 40.18) priceNetto = 145443.47;
				if (calculated_power.value >= 40.59) priceNetto = 146796.73;
				if (calculated_power.value >= 41.0) priceNetto = 147909.98;
				if (calculated_power.value >= 41.41) priceNetto = 149574.84;
				if (calculated_power.value >= 41.82) priceNetto = 151233.35;
				if (calculated_power.value >= 42.23) priceNetto = 152983.08;
				if (calculated_power.value >= 42.64) priceNetto = 154540.75;
				if (calculated_power.value >= 43.05) priceNetto = 156316.66;
				if (calculated_power.value >= 43.46) priceNetto = 157955.24;
				if (calculated_power.value >= 43.87) priceNetto = 159308.49;
				if (calculated_power.value >= 44.28) priceNetto = 160421.75;
				if (calculated_power.value >= 44.69) priceNetto = 162221.82;
				if (calculated_power.value >= 45.1) priceNetto = 163335.08;
				if (calculated_power.value >= 45.51) priceNetto = 164688.34;
				if (calculated_power.value >= 45.92) priceNetto = 165801.59;
				if (calculated_power.value >= 46.33) priceNetto = 167601.67;
				if (calculated_power.value >= 46.74) priceNetto = 169241.29;
				if (calculated_power.value >= 47.15) priceNetto = 170594.55;
				if (calculated_power.value >= 47.56) priceNetto = 171707.8;
				if (calculated_power.value >= 47.97) priceNetto = 173507.88;
				if (calculated_power.value >= 48.38) priceNetto = 174621.13;
				if (calculated_power.value >= 48.79) priceNetto = 175974.39;
				if (calculated_power.value >= 49.2) priceNetto = 177087.65;
				if (calculated_power.value >= 49.61) priceNetto = 178198.21;
			}
			if (sunLink455W.selected == true || trinaSolar455W.selected == true || trinaSolar460W.selected == true) {
				if (calculated_power.value >= 2.27) priceNetto = 15112.11;
				if (calculated_power.value >= 2.73) priceNetto = 17244.27;
				if (calculated_power.value >= 3.18) priceNetto = 19356.12;
				if (calculated_power.value >= 3.64) priceNetto = 20724.02;
				if (calculated_power.value >= 4.09) priceNetto = 22638.78;
				if (calculated_power.value >= 4.55) priceNetto = 24294.73;
				if (calculated_power.value >= 5.0) priceNetto = 26164.16;
				if (calculated_power.value >= 5.46) priceNetto = 27664.46;
				if (calculated_power.value >= 5.91) priceNetto = 30268.57;
				if (calculated_power.value >= 6.37) priceNetto = 32150.49;
				if (calculated_power.value >= 6.82) priceNetto = 34642.82;
				if (calculated_power.value >= 7.28) priceNetto = 36265.43;
				if (calculated_power.value >= 7.73) priceNetto = 38774.62;
				if (calculated_power.value >= 8.19) priceNetto = 39803.98;
				if (calculated_power.value >= 8.64) priceNetto = 41395.97;
				if (calculated_power.value >= 9.1) priceNetto = 42710.52;
				if (calculated_power.value >= 9.55) priceNetto = 44857.49;
				if (calculated_power.value >= 10.01) priceNetto = 46079.04;
				if (calculated_power.value >= 10.46) priceNetto = 49403.75;
				if (calculated_power.value >= 10.92) priceNetto = 50626.27;
				if (calculated_power.value >= 11.37) priceNetto = 53033.88;
				if (calculated_power.value >= 11.83) priceNetto = 54780.58;
				if (calculated_power.value >= 12.28) priceNetto = 56758.23;
				if (calculated_power.value >= 12.74) priceNetto = 58504.93;
				if (calculated_power.value >= 13.19) priceNetto = 60912.55;
				if (calculated_power.value >= 13.65) priceNetto = 62240.77;
				if (calculated_power.value >= 14.1) priceNetto = 62774.19;
				if (calculated_power.value >= 14.56) priceNetto = 64456.79;
				if (calculated_power.value >= 15.01) priceNetto = 68666.31;
				if (calculated_power.value >= 15.47) priceNetto = 60806.45;
				if (calculated_power.value >= 15.92) priceNetto = 62340.23;
				if (calculated_power.value >= 16.38) priceNetto = 63790.62;
				if (calculated_power.value >= 16.83) priceNetto = 65729.89;
				if (calculated_power.value >= 17.29) priceNetto = 66998.95;
				if (calculated_power.value >= 17.74) priceNetto = 68489.64;
				if (calculated_power.value >= 18.2) priceNetto = 69926.08;
				if (calculated_power.value >= 18.65) priceNetto = 72616.99;
				if (calculated_power.value >= 19.11) priceNetto = 73853.48;
				if (calculated_power.value >= 19.56) priceNetto = 75311.63;
				if (calculated_power.value >= 20.02) priceNetto = 76734.13;
				if (calculated_power.value >= 20.47) priceNetto = 80041.39;
				if (calculated_power.value >= 20.93) priceNetto = 81501.61;
				if (calculated_power.value >= 21.38) priceNetto = 83182.25;
				if (calculated_power.value >= 21.84) priceNetto = 84631.94;
				if (calculated_power.value >= 22.29) priceNetto = 81256.15;
				if (calculated_power.value >= 22.75) priceNetto = 82477.27;
				if (calculated_power.value >= 23.2) priceNetto = 83929.34;
				if (calculated_power.value >= 23.66) priceNetto = 85150.46;
				if (calculated_power.value >= 24.11) priceNetto = 87032.5;
				if (calculated_power.value >= 24.57) priceNetto = 88253.62;
				if (calculated_power.value >= 25.02) priceNetto = 89705.69;
				if (calculated_power.value >= 25.48) priceNetto = 90926.81;
				if (calculated_power.value >= 25.93) priceNetto = 92808.85;
				if (calculated_power.value >= 26.39) priceNetto = 93448.29;
				if (calculated_power.value >= 26.84) priceNetto = 94890.33;
				if (calculated_power.value >= 27.3) priceNetto = 96304.03;
				if (calculated_power.value >= 27.75) priceNetto = 98398.29;
				if (calculated_power.value >= 28.21) priceNetto = 99609.39;
				if (calculated_power.value >= 28.66) priceNetto = 101051.42;
				if (calculated_power.value >= 29.12) priceNetto = 102262.52;
				if (calculated_power.value >= 29.57) priceNetto = 104235.84;
				if (calculated_power.value >= 30.03) priceNetto = 105446.92;
				if (calculated_power.value >= 30.48) priceNetto = 106888.96;
				if (calculated_power.value >= 30.94) priceNetto = 108323.73;
				if (calculated_power.value >= 31.39) priceNetto = 110195.74;
				if (calculated_power.value >= 31.85) priceNetto = 111406.83;
				if (calculated_power.value >= 32.3) priceNetto = 112848.88;
				if (calculated_power.value >= 32.76) priceNetto = 114059.96;
				if (calculated_power.value >= 33.21) priceNetto = 115931.98;
				if (calculated_power.value >= 33.67) priceNetto = 117143.06;
				if (calculated_power.value >= 34.12) priceNetto = 118585.11;
				if (calculated_power.value >= 34.58) priceNetto = 119796.19;
				if (calculated_power.value >= 35.03) priceNetto = 121668.21;
				if (calculated_power.value >= 35.49) priceNetto = 122879.3;
				if (calculated_power.value >= 35.94) priceNetto = 124342.41;
				if (calculated_power.value >= 36.4) priceNetto = 125553.51;
				if (calculated_power.value >= 36.85) priceNetto = 128139.69;
				if (calculated_power.value >= 37.31) priceNetto = 129350.79;
				if (calculated_power.value >= 37.76) priceNetto = 131501.94;
				if (calculated_power.value >= 38.22) priceNetto = 132713.04;
				if (calculated_power.value >= 38.67) priceNetto = 134585.04;
				if (calculated_power.value >= 39.13) priceNetto = 135796.14;
				if (calculated_power.value >= 39.58) priceNetto = 137238.17;
				if (calculated_power.value >= 40.04) priceNetto = 138449.27;
				if (calculated_power.value >= 40.49) priceNetto = 140321.28;
				if (calculated_power.value >= 40.95) priceNetto = 141532.37;
				if (calculated_power.value >= 41.4) priceNetto = 143448.51;
				if (calculated_power.value >= 41.86) priceNetto = 144659.59;
				if (calculated_power.value >= 42.31) priceNetto = 146531.61;
				if (calculated_power.value >= 42.77) priceNetto = 147742.69;
				if (calculated_power.value >= 43.22) priceNetto = 149184.74;
				if (calculated_power.value >= 43.68) priceNetto = 150395.82;
				if (calculated_power.value >= 44.13) priceNetto = 153027.61;
				if (calculated_power.value >= 44.59) priceNetto = 154238.69;
				if (calculated_power.value >= 45.04) priceNetto = 155680.74;
				if (calculated_power.value >= 45.5) priceNetto = 156891.82;
				if (calculated_power.value >= 45.95) priceNetto = 158937.06;
				if (calculated_power.value >= 46.4) priceNetto = 160148.16;
				if (calculated_power.value >= 46.86) priceNetto = 162628.87;
				if (calculated_power.value >= 47.31) priceNetto = 163839.95;
				if (calculated_power.value >= 47.77) priceNetto = 165711.97;
				if (calculated_power.value >= 48.22) priceNetto = 166923.06;
				if (calculated_power.value >= 48.68) priceNetto = 168365.1;
				if (calculated_power.value >= 49.13) priceNetto = 169576.2;
				if (calculated_power.value >= 49.59) priceNetto = 171448.2;
				if (calculated_power.value >= 50.04) priceNetto = 172659.3;
				if (calculated_power.value >= 50.5) priceNetto = 174101.33;
			}
		}

		if (roofing.value == 3) {
			if (sunLink410W.selected == true || trinaSolar420W.selected == true) {
				if (calculated_power.value >= 2.05) priceNetto = 14343.84;
				if (calculated_power.value >= 2.46) priceNetto = 16310.01;
				if (calculated_power.value >= 2.87) priceNetto = 18255.59;
				if (calculated_power.value >= 3.28) priceNetto = 19487.59;
				if (calculated_power.value >= 3.69) priceNetto = 21238.45;
				if (calculated_power.value >= 4.1) priceNetto = 22981.1;
				if (calculated_power.value >= 4.51) priceNetto = 24462.86;
				if (calculated_power.value >= 4.92) priceNetto = 26162.39;
				if (calculated_power.value >= 5.33) priceNetto = 28645.47;
				if (calculated_power.value >= 5.74) priceNetto = 30016.74;
				if (calculated_power.value >= 6.15) priceNetto = 31723.22;
				if (calculated_power.value >= 6.56) priceNetto = 33430.22;
				if (calculated_power.value >= 6.97) priceNetto = 36474.86;
				if (calculated_power.value >= 7.38) priceNetto = 37937.83;
				if (calculated_power.value >= 7.79) priceNetto = 39467.34;
				if (calculated_power.value >= 8.2) priceNetto = 40720.79;
				if (calculated_power.value >= 8.61) priceNetto = 41962.42;
				if (calculated_power.value >= 9.02) priceNetto = 43091.07;
				if (calculated_power.value >= 9.43) priceNetto = 44893.85;
				if (calculated_power.value >= 9.84) priceNetto = 45959.63;
				if (calculated_power.value >= 10.25) priceNetto = 49381.82;
				if (calculated_power.value >= 10.66) priceNetto = 52413.37;
				if (calculated_power.value >= 11.07) priceNetto = 54306.28;
				if (calculated_power.value >= 11.48) priceNetto = 55948.24;
				if (calculated_power.value >= 11.89) priceNetto = 58277.02;
				if (calculated_power.value >= 12.3) priceNetto = 59532.41;
				if (calculated_power.value >= 12.71) priceNetto = 60094.63;
				if (calculated_power.value >= 13.12) priceNetto = 61677.38;
				if (calculated_power.value >= 13.53) priceNetto = 65677.63;
				if (calculated_power.value >= 14.28) priceNetto = 67018.84;
				if (calculated_power.value >= 14.35) priceNetto = 68733.2;
				if (calculated_power.value >= 14.76) priceNetto = 69513.11;
				if (calculated_power.value >= 15.17) priceNetto = 70067.6;
				if (calculated_power.value >= 15.58) priceNetto = 70621.16;
				if (calculated_power.value >= 15.99) priceNetto = 71165.16;
				if (calculated_power.value >= 16.4) priceNetto = 71724.25;
				if (calculated_power.value >= 16.81) priceNetto = 72244.47;
				if (calculated_power.value >= 17.22) priceNetto = 72759.97;
				if (calculated_power.value >= 17.63) priceNetto = 73281.76;
				if (calculated_power.value >= 18.04) priceNetto = 73767.77;
				if (calculated_power.value >= 18.45) priceNetto = 75603.79;
				if (calculated_power.value >= 18.86) priceNetto = 76941.96;
				if (calculated_power.value >= 19.27) priceNetto = 78520.14;
				if (calculated_power.value >= 19.68) priceNetto = 79858.33;
				if (calculated_power.value >= 20.09) priceNetto = 77475.1;
				if (calculated_power.value >= 20.5) priceNetto = 78602.15;
				if (calculated_power.value >= 20.91) priceNetto = 81040.83;
				if (calculated_power.value >= 21.32) priceNetto = 82199.83;
				if (calculated_power.value >= 21.73) priceNetto = 84034.71;
				if (calculated_power.value >= 22.14) priceNetto = 85182.78;
				if (calculated_power.value >= 22.55) priceNetto = 86570.84;
				if (calculated_power.value >= 22.96) priceNetto = 87718.89;
				if (calculated_power.value >= 23.37) priceNetto = 89553.77;
				if (calculated_power.value >= 23.78) priceNetto = 90164.51;
				if (calculated_power.value >= 24.19) priceNetto = 91543.32;
				if (calculated_power.value >= 24.6) priceNetto = 92892.65;
				if (calculated_power.value >= 25.01) priceNetto = 94949.24;
				if (calculated_power.value >= 25.42) priceNetto = 96088.03;
				if (calculated_power.value >= 25.83) priceNetto = 97466.82;
				if (calculated_power.value >= 26.24) priceNetto = 98605.62;
				if (calculated_power.value >= 26.65) priceNetto = 100536.5;
				if (calculated_power.value >= 27.06) priceNetto = 101675.3;
				if (calculated_power.value >= 27.47) priceNetto = 103054.09;
				if (calculated_power.value >= 27.88) priceNetto = 104403.44;
				if (calculated_power.value >= 28.29) priceNetto = 106229.05;
				if (calculated_power.value >= 28.7) priceNetto = 107367.85;
				if (calculated_power.value >= 29.11) priceNetto = 108746.64;
				if (calculated_power.value >= 29.52) priceNetto = 109885.44;
				if (calculated_power.value >= 29.93) priceNetto = 111711.05;
				if (calculated_power.value >= 30.34) priceNetto = 112849.85;
				if (calculated_power.value >= 30.75) priceNetto = 114228.64;
				if (calculated_power.value >= 31.16) priceNetto = 115367.43;
				if (calculated_power.value >= 31.57) priceNetto = 117214.95;
				if (calculated_power.value >= 32.39) priceNetto = 119598.95;
				if (calculated_power.value >= 32.8) priceNetto = 120737.73;
				if (calculated_power.value >= 33.21) priceNetto = 123305.53;
				if (calculated_power.value >= 33.62) priceNetto = 124444.32;
				if (calculated_power.value >= 34.03) priceNetto = 126560.03;
				if (calculated_power.value >= 34.44) priceNetto = 127698.81;
				if (calculated_power.value >= 34.85) priceNetto = 129524.43;
				if (calculated_power.value >= 35.26) priceNetto = 130663.23;
				if (calculated_power.value >= 35.67) priceNetto = 132042.02;
				if (calculated_power.value >= 36.08) priceNetto = 133180.82;
				if (calculated_power.value >= 36.49) priceNetto = 135028.32;
				if (calculated_power.value >= 36.9) priceNetto = 136167.12;
				if (calculated_power.value >= 37.31) priceNetto = 137545.91;
				if (calculated_power.value >= 37.72) priceNetto = 138684.71;
				if (calculated_power.value >= 38.13) priceNetto = 140510.32;
				if (calculated_power.value >= 38.54) priceNetto = 141649.12;
				if (calculated_power.value >= 38.95) priceNetto = 143027.91;
				if (calculated_power.value >= 39.36) priceNetto = 144166.71;
				if (calculated_power.value >= 39.77) priceNetto = 146781.87;
				if (calculated_power.value >= 40.18) priceNetto = 147920.67;
				if (calculated_power.value >= 40.59) priceNetto = 149299.46;
				if (calculated_power.value >= 41.0) priceNetto = 150438.25;
				if (calculated_power.value >= 41.41) priceNetto = 152128.64;
				if (calculated_power.value >= 41.82) priceNetto = 153812.7;
				if (calculated_power.value >= 42.23) priceNetto = 155587.96;
				if (calculated_power.value >= 42.64) priceNetto = 157171.18;
				if (calculated_power.value >= 43.05) priceNetto = 158972.62;
				if (calculated_power.value >= 43.46) priceNetto = 160636.73;
				if (calculated_power.value >= 43.87) priceNetto = 162015.53;
				if (calculated_power.value >= 44.28) priceNetto = 163154.32;
				if (calculated_power.value >= 44.69) priceNetto = 164979.94;
				if (calculated_power.value >= 45.1) priceNetto = 166118.73;
				if (calculated_power.value >= 45.51) priceNetto = 167497.53;
				if (calculated_power.value >= 45.92) priceNetto = 168636.31;
				if (calculated_power.value >= 46.33) priceNetto = 170461.94;
				if (calculated_power.value >= 46.74) priceNetto = 172127.09;
				if (calculated_power.value >= 47.15) priceNetto = 173505.89;
				if (calculated_power.value >= 47.56) priceNetto = 174644.68;
				if (calculated_power.value >= 47.97) priceNetto = 176470.3;
				if (calculated_power.value >= 48.38) priceNetto = 177609.09;
				if (calculated_power.value >= 48.79) priceNetto = 178987.88;
				if (calculated_power.value >= 49.2) priceNetto = 180126.68;
				if (calculated_power.value >= 49.61) priceNetto = 181262.78;
			}
			if (sunLink455W.selected == true || trinaSolar455W.selected == true || trinaSolar460W.selected == true) {
				if (calculated_power.value >= 2.27) priceNetto = 15161.69;
				if (calculated_power.value >= 2.73) priceNetto = 17303.76;
				if (calculated_power.value >= 3.18) priceNetto = 19425.52;
				if (calculated_power.value >= 3.64) priceNetto = 20803.34;
				if (calculated_power.value >= 4.09) priceNetto = 22728.01;
				if (calculated_power.value >= 4.55) priceNetto = 24393.88;
				if (calculated_power.value >= 5.0) priceNetto = 26273.23;
				if (calculated_power.value >= 5.46) priceNetto = 27783.44;
				if (calculated_power.value >= 5.91) priceNetto = 30397.47;
				if (calculated_power.value >= 6.37) priceNetto = 32289.3;
				if (calculated_power.value >= 6.82) priceNetto = 34791.55;
				if (calculated_power.value >= 7.28) priceNetto = 36424.08;
				if (calculated_power.value >= 7.73) priceNetto = 38943.18;
				if (calculated_power.value >= 8.19) priceNetto = 39982.45;
				if (calculated_power.value >= 8.64) priceNetto = 41584.36;
				if (calculated_power.value >= 9.1) priceNetto = 42908.82;
				if (calculated_power.value >= 9.55) priceNetto = 45065.71;
				if (calculated_power.value >= 10.01) priceNetto = 46297.17;
				if (calculated_power.value >= 10.46) priceNetto = 49631.8;
				if (calculated_power.value >= 10.92) priceNetto = 50864.23;
				if (calculated_power.value >= 11.37) priceNetto = 53281.76;
				if (calculated_power.value >= 11.83) priceNetto = 55038.38;
				if (calculated_power.value >= 12.28) priceNetto = 57025.94;
				if (calculated_power.value >= 12.74) priceNetto = 58782.56;
				if (calculated_power.value >= 13.19) priceNetto = 61200.1;
				if (calculated_power.value >= 13.65) priceNetto = 62538.23;
				if (calculated_power.value >= 14.1) priceNetto = 63081.56;
				if (calculated_power.value >= 14.56) priceNetto = 64774.08;
				if (calculated_power.value >= 15.01) priceNetto = 68993.51;
				if (calculated_power.value >= 15.47) priceNetto = 61143.57;
				if (calculated_power.value >= 15.92) priceNetto = 62687.27;
				if (calculated_power.value >= 16.38) priceNetto = 64147.57;
				if (calculated_power.value >= 16.83) priceNetto = 66096.75;
				if (calculated_power.value >= 17.29) priceNetto = 67375.72;
				if (calculated_power.value >= 17.74) priceNetto = 68876.34;
				if (calculated_power.value >= 18.2) priceNetto = 70322.69;
				if (calculated_power.value >= 18.65) priceNetto = 73023.51;
				if (calculated_power.value >= 19.11) priceNetto = 74269.92;
				if (calculated_power.value >= 19.56) priceNetto = 75737.98;
				if (calculated_power.value >= 20.02) priceNetto = 77170.39;
				if (calculated_power.value >= 20.47) priceNetto = 80487.57;
				if (calculated_power.value >= 20.93) priceNetto = 81957.71;
				if (calculated_power.value >= 21.38) priceNetto = 83648.26;
				if (calculated_power.value >= 21.84) priceNetto = 85107.87;
				if (calculated_power.value >= 22.29) priceNetto = 81741.99;
				if (calculated_power.value >= 22.75) priceNetto = 82973.03;
				if (calculated_power.value >= 23.2) priceNetto = 84435.01;
				if (calculated_power.value >= 23.66) priceNetto = 85666.05;
				if (calculated_power.value >= 24.11) priceNetto = 87558.0;
				if (calculated_power.value >= 24.57) priceNetto = 88789.04;
				if (calculated_power.value >= 25.02) priceNetto = 90251.02;
				if (calculated_power.value >= 25.48) priceNetto = 91482.06;
				if (calculated_power.value >= 25.93) priceNetto = 93374.01;
				if (calculated_power.value >= 26.39) priceNetto = 94023.37;
				if (calculated_power.value >= 26.84) priceNetto = 95475.32;
				if (calculated_power.value >= 27.3) priceNetto = 96898.94;
				if (calculated_power.value >= 27.75) priceNetto = 99003.12;
				if (calculated_power.value >= 28.21) priceNetto = 100224.13;
				if (calculated_power.value >= 28.66) priceNetto = 101676.08;
				if (calculated_power.value >= 29.12) priceNetto = 102897.09;
				if (calculated_power.value >= 29.57) priceNetto = 104880.32;
				if (calculated_power.value >= 30.03) priceNetto = 106101.32;
				if (calculated_power.value >= 30.48) priceNetto = 107553.28;
				if (calculated_power.value >= 30.94) priceNetto = 108997.96;
				if (calculated_power.value >= 31.39) priceNetto = 110879.89;
				if (calculated_power.value >= 31.85) priceNetto = 112100.89;
				if (calculated_power.value >= 32.3) priceNetto = 113552.86;
				if (calculated_power.value >= 32.76) priceNetto = 114773.86;
				if (calculated_power.value >= 33.21) priceNetto = 116655.79;
				if (calculated_power.value >= 33.67) priceNetto = 117876.79;
				if (calculated_power.value >= 34.12) priceNetto = 119328.75;
				if (calculated_power.value >= 34.58) priceNetto = 120549.75;
				if (calculated_power.value >= 35.03) priceNetto = 122431.68;
				if (calculated_power.value >= 35.49) priceNetto = 123652.68;
				if (calculated_power.value >= 35.94) priceNetto = 125125.71;
				if (calculated_power.value >= 36.4) priceNetto = 126346.72;
				if (calculated_power.value >= 36.85) priceNetto = 128942.82;
				if (calculated_power.value >= 37.31) priceNetto = 130163.83;
				if (calculated_power.value >= 37.76) priceNetto = 132324.9;
				if (calculated_power.value >= 38.22) priceNetto = 133545.91;
				if (calculated_power.value >= 38.67) priceNetto = 135427.83;
				if (calculated_power.value >= 39.13) priceNetto = 136648.84;
				if (calculated_power.value >= 39.58) priceNetto = 138100.8;
				if (calculated_power.value >= 40.04) priceNetto = 139321.81;
				if (calculated_power.value >= 40.49) priceNetto = 141203.73;
				if (calculated_power.value >= 40.95) priceNetto = 142424.74;
				if (calculated_power.value >= 41.4) priceNetto = 144350.79;
				if (calculated_power.value >= 41.86) priceNetto = 145571.79;
				if (calculated_power.value >= 42.31) priceNetto = 147453.72;
				if (calculated_power.value >= 42.77) priceNetto = 148674.72;
				if (calculated_power.value >= 43.22) priceNetto = 150126.68;
				if (calculated_power.value >= 43.68) priceNetto = 151347.68;
				if (calculated_power.value >= 44.13) priceNetto = 153989.38;
				if (calculated_power.value >= 44.59) priceNetto = 155210.38;
				if (calculated_power.value >= 45.04) priceNetto = 156662.34;
				if (calculated_power.value >= 45.5) priceNetto = 157883.34;
				if (calculated_power.value >= 45.95) priceNetto = 159938.5;
				if (calculated_power.value >= 46.4) priceNetto = 161159.51;
				if (calculated_power.value >= 46.86) priceNetto = 163650.13;
				if (calculated_power.value >= 47.31) priceNetto = 164871.13;
				if (calculated_power.value >= 47.77) priceNetto = 166753.07;
				if (calculated_power.value >= 48.22) priceNetto = 167974.08;
				if (calculated_power.value >= 48.68) priceNetto = 169426.03;
				if (calculated_power.value >= 49.13) priceNetto = 170647.04;
				if (calculated_power.value >= 49.59) priceNetto = 172528.96;
				if (calculated_power.value >= 50.04) priceNetto = 173749.97;
				if (calculated_power.value >= 50.5) priceNetto = 175201.92;
			}
		}

		if (roofing.value == 4) {
			if (sunLink410W.selected == true || trinaSolar420W.selected == true) {
				if (calculated_power.value >= 2.46) priceNetto = 16403.28;
				if (calculated_power.value >= 3.28) priceNetto = 19611.96;
				if (calculated_power.value >= 4.1) priceNetto = 23136.55;
				if (calculated_power.value >= 4.92) priceNetto = 26348.93;
				if (calculated_power.value >= 5.74) priceNetto = 30234.37;
				if (calculated_power.value >= 6.56) priceNetto = 33678.95;
				if (calculated_power.value >= 7.38) priceNetto = 38217.65;
				if (calculated_power.value >= 8.2) priceNetto = 41031.69;
				if (calculated_power.value >= 9.02) priceNetto = 43433.07;
				if (calculated_power.value >= 9.84) priceNetto = 46332.72;
				if (calculated_power.value >= 10.66) priceNetto = 52827.66;
				if (calculated_power.value >= 11.48) priceNetto = 56394.39;
				if (calculated_power.value >= 12.3) priceNetto = 60010.43;
				if (calculated_power.value >= 12.71) priceNetto = 60588.59;
				if (calculated_power.value >= 13.12) priceNetto = 62187.27;
				if (calculated_power.value >= 13.53) priceNetto = 66203.45;
				if (calculated_power.value >= 14.28) priceNetto = 67560.6;
				if (calculated_power.value >= 14.35) priceNetto = 69290.89;
				if (calculated_power.value >= 14.76) priceNetto = 70086.73;
				if (calculated_power.value >= 15.17) priceNetto = 70657.16;
				if (calculated_power.value >= 15.58) priceNetto = 71226.65;
				if (calculated_power.value >= 15.99) priceNetto = 71786.58;
				if (calculated_power.value >= 16.4) priceNetto = 72361.61;
				if (calculated_power.value >= 16.81) priceNetto = 72897.77;
				if (calculated_power.value >= 17.22) priceNetto = 73429.19;
				if (calculated_power.value >= 17.63) priceNetto = 73966.93;
				if (calculated_power.value >= 18.04) priceNetto = 74468.86;
				if (calculated_power.value >= 18.45) priceNetto = 76320.82;
				if (calculated_power.value >= 18.86) priceNetto = 77674.93;
				if (calculated_power.value >= 19.27) priceNetto = 79269.04;
				if (calculated_power.value >= 19.68) priceNetto = 80623.16;
				if (calculated_power.value >= 20.09) priceNetto = 78255.86;
				if (calculated_power.value >= 20.5) priceNetto = 79398.85;
				if (calculated_power.value >= 20.91) priceNetto = 81853.47;
				if (calculated_power.value >= 21.32) priceNetto = 83028.4;
				if (calculated_power.value >= 21.73) priceNetto = 84879.22;
				if (calculated_power.value >= 22.14) priceNetto = 86043.22;
				if (calculated_power.value >= 22.55) priceNetto = 87447.21;
				if (calculated_power.value >= 22.96) priceNetto = 88611.2;
				if (calculated_power.value >= 23.37) priceNetto = 90462.01;
				if (calculated_power.value >= 23.78) priceNetto = 91088.69;
				if (calculated_power.value >= 24.19) priceNetto = 92483.42;
				if (calculated_power.value >= 24.6) priceNetto = 93848.69;
				if (calculated_power.value >= 25.01) priceNetto = 95921.22;
				if (calculated_power.value >= 25.42) priceNetto = 97075.94;
				if (calculated_power.value >= 25.83) priceNetto = 98470.67;
				if (calculated_power.value >= 26.24) priceNetto = 99625.4;
				if (calculated_power.value >= 26.65) priceNetto = 101572.22;
				if (calculated_power.value >= 27.06) priceNetto = 102726.95;
				if (calculated_power.value >= 27.47) priceNetto = 104121.67;
				if (calculated_power.value >= 27.88) priceNetto = 105486.95;
				if (calculated_power.value >= 28.29) priceNetto = 107328.5;
				if (calculated_power.value >= 28.7) priceNetto = 108483.23;
				if (calculated_power.value >= 29.11) priceNetto = 109877.96;
				if (calculated_power.value >= 29.52) priceNetto = 111032.69;
				if (calculated_power.value >= 29.93) priceNetto = 112874.24;
				if (calculated_power.value >= 30.34) priceNetto = 114028.97;
				if (calculated_power.value >= 30.75) priceNetto = 115423.69;
				if (calculated_power.value >= 31.16) priceNetto = 116578.42;
				if (calculated_power.value >= 31.57) priceNetto = 118441.87;
				if (calculated_power.value >= 32.39) priceNetto = 120841.8;
				if (calculated_power.value >= 32.8) priceNetto = 121996.52;
				if (calculated_power.value >= 33.21) priceNetto = 124580.25;
				if (calculated_power.value >= 33.62) priceNetto = 125734.97;
				if (calculated_power.value >= 34.03) priceNetto = 127866.62;
				if (calculated_power.value >= 34.44) priceNetto = 129021.34;
				if (calculated_power.value >= 34.85) priceNetto = 130862.89;
				if (calculated_power.value >= 35.26) priceNetto = 132017.62;
				if (calculated_power.value >= 35.67) priceNetto = 133412.34;
				if (calculated_power.value >= 36.08) priceNetto = 134567.08;
				if (calculated_power.value >= 36.49) priceNetto = 136430.52;
				if (calculated_power.value >= 36.9) priceNetto = 137585.25;
				if (calculated_power.value >= 37.31) priceNetto = 138979.98;
				if (calculated_power.value >= 37.72) priceNetto = 140134.71;
				if (calculated_power.value >= 38.13) priceNetto = 141976.26;
				if (calculated_power.value >= 38.54) priceNetto = 143130.99;
				if (calculated_power.value >= 38.95) priceNetto = 144525.71;
				if (calculated_power.value >= 39.36) priceNetto = 145680.45;
				if (calculated_power.value >= 39.77) priceNetto = 148311.54;
				if (calculated_power.value >= 40.18) priceNetto = 149466.27;
				if (calculated_power.value >= 40.59) priceNetto = 150861.0;
				if (calculated_power.value >= 41.0) priceNetto = 152015.72;
				if (calculated_power.value >= 41.41) priceNetto = 153722.05;
				if (calculated_power.value >= 41.82) priceNetto = 155422.03;
				if (calculated_power.value >= 42.23) priceNetto = 157213.23;
				if (calculated_power.value >= 42.64) priceNetto = 158812.38;
				if (calculated_power.value >= 43.05) priceNetto = 160629.76;
				if (calculated_power.value >= 43.46) priceNetto = 162309.81;
				if (calculated_power.value >= 43.87) priceNetto = 163704.53;
				if (calculated_power.value >= 44.28) priceNetto = 164859.27;
				if (calculated_power.value >= 44.69) priceNetto = 166700.81;
				if (calculated_power.value >= 45.1) priceNetto = 167855.54;
				if (calculated_power.value >= 45.51) priceNetto = 169250.27;
				if (calculated_power.value >= 45.92) priceNetto = 170404.99;
				if (calculated_power.value >= 46.33) priceNetto = 172246.55;
				if (calculated_power.value >= 46.74) priceNetto = 173927.63;
				if (calculated_power.value >= 47.15) priceNetto = 175322.37;
				if (calculated_power.value >= 47.56) priceNetto = 176477.09;
				if (calculated_power.value >= 47.97) priceNetto = 178318.65;
				if (calculated_power.value >= 48.38) priceNetto = 179473.37;
				if (calculated_power.value >= 48.79) priceNetto = 180868.1;
				if (calculated_power.value >= 49.2) priceNetto = 182022.83;
				if (calculated_power.value >= 49.61) priceNetto = 183174.86;
			}
			if (sunLink455W.selected == true || trinaSolar455W.selected == true || trinaSolar460W.selected == true) {
				if (calculated_power.value >= 2.73) priceNetto = 17397.03;
				if (calculated_power.value >= 3.64) priceNetto = 20927.7;
				if (calculated_power.value >= 4.55) priceNetto = 24549.34;
				if (calculated_power.value >= 5.46) priceNetto = 27969.99;
				if (calculated_power.value >= 6.37) priceNetto = 32506.94;
				if (calculated_power.value >= 7.28) priceNetto = 36672.8;
				if (calculated_power.value >= 8.19) priceNetto = 40262.27;
				if (calculated_power.value >= 9.1) priceNetto = 43219.73;
				if (calculated_power.value >= 10.01) priceNetto = 46639.17;
				if (calculated_power.value >= 10.92) priceNetto = 51237.32;
				if (calculated_power.value >= 11.83) priceNetto = 55442.56;
				if (calculated_power.value >= 12.74) priceNetto = 59217.83;
				if (calculated_power.value >= 13.65) priceNetto = 63004.59;
				if (calculated_power.value >= 14.56) priceNetto = 65271.53;
				if (calculated_power.value >= 15.47) priceNetto = 61672.11;
				if (calculated_power.value >= 16.38) priceNetto = 64707.21;
				if (calculated_power.value >= 17.29) priceNetto = 67966.45;
				if (calculated_power.value >= 18.2) priceNetto = 70944.5;
				if (calculated_power.value >= 19.11) priceNetto = 74922.82;
				if (calculated_power.value >= 20.02) priceNetto = 77854.39;
				if (calculated_power.value >= 20.93) priceNetto = 82672.8;
				if (calculated_power.value >= 21.84) priceNetto = 85854.05;
				if (calculated_power.value >= 22.75) priceNetto = 83750.3;
				if (calculated_power.value >= 23.66) priceNetto = 86474.41;
				if (calculated_power.value >= 24.57) priceNetto = 89628.49;
				if (calculated_power.value >= 25.48) priceNetto = 92352.6;
				if (calculated_power.value >= 26.39) priceNetto = 94925.0;
				if (calculated_power.value >= 27.3) priceNetto = 97831.66;
				if (calculated_power.value >= 28.21) priceNetto = 101187.94;
				if (calculated_power.value >= 29.12) priceNetto = 103892.0;
				if (calculated_power.value >= 30.03) priceNetto = 107127.32;
				if (calculated_power.value >= 30.94) priceNetto = 110055.05;
				if (calculated_power.value >= 31.85) priceNetto = 113189.07;
				if (calculated_power.value >= 32.76) priceNetto = 115893.12;
				if (calculated_power.value >= 33.67) priceNetto = 119027.15;
				if (calculated_power.value >= 34.58) priceNetto = 121731.2;
				if (calculated_power.value >= 35.49) priceNetto = 124865.22;
				if (calculated_power.value >= 36.4) priceNetto = 127590.36;
				if (calculated_power.value >= 37.31) priceNetto = 131438.56;
				if (calculated_power.value >= 38.22) priceNetto = 134851.73;
				if (calculated_power.value >= 39.13) priceNetto = 137985.75;
				if (calculated_power.value >= 40.04) priceNetto = 140689.8;
				if (calculated_power.value >= 40.95) priceNetto = 143823.82;
				if (calculated_power.value >= 41.86) priceNetto = 147001.97;
				if (calculated_power.value >= 42.77) priceNetto = 150135.99;
				if (calculated_power.value >= 43.68) priceNetto = 152840.04;
				if (calculated_power.value >= 44.59) priceNetto = 156733.83;
				if (calculated_power.value >= 45.5) priceNetto = 159437.88;
				if (calculated_power.value >= 46.4) priceNetto = 162745.14;
				if (calculated_power.value >= 47.31) priceNetto = 166487.86;
				if (calculated_power.value >= 48.22) priceNetto = 169621.89;
				if (calculated_power.value >= 49.13) priceNetto = 172325.94;
				if (calculated_power.value >= 50.04) priceNetto = 175459.96;
			}
		}
	}
	if (calculated_power.value <= 11.25 && document.getElementById('hoymiles-inwerter').selected == false) {
		if (office_level.value == 'SR') {
			priceNetto = priceNetto + Math.ceil(calculated_power.value) * 100;
		}

		if (office_level.value == 'BR') {
			priceNetto = priceNetto + Math.ceil(calculated_power.value) * 200;
		}
	}
	if (document.getElementById('hoymiles-inwerter').selected == false) {
		if (office_level.value == 'ZL') {
			priceNetto = priceNetto + Math.ceil(calculated_power.value) * 100;
		}
		if (office_level.value == 'SR') {
			priceNetto = priceNetto + Math.ceil(calculated_power.value) * 100;
		}
		if (office_level.value == 'BR') {
			priceNetto = priceNetto + Math.ceil(calculated_power.value) * 100;
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
	if (calculated_power.value <= 3) {
		zero_price_calc += 2500;
	}
	if (calculated_power.value > 3 && calculated_power.value <= 5) {
		zero_price_calc += 1850;
	}
	if (calculated_power.value > 5 && calculated_power.value <= 7) {
		zero_price_calc += 1500;
	}
	if (calculated_power.value > 7 && calculated_power.value <= 10) {
		zero_price_calc += 1150;
	}
	if (calculated_power.value > 10 && calculated_power.value <= 20) {
		zero_price_calc += 900;
	}
	if (calculated_power.value > 20 && calculated_power.value <= 30) {
		zero_price_calc += 700;
	}
	if (calculated_power.value > 30 && calculated_power.value <= 50) {
		zero_price_calc += 600;
	}
	if (office_level.value == 'ZL') {
		zero_price_calc = zero_price_calc + Math.ceil(calculated_power.value) * 200;
	}
	if (office_level.value == 'SR') {
		zero_price_calc = zero_price_calc + Math.ceil(calculated_power.value) * 200;
	}

	if (office_level.value == 'BR') {
		zero_price_calc = zero_price_calc + Math.ceil(calculated_power.value) * 200;
	}
	return zero_price_calc * 1.05;
};
