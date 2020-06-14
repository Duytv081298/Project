package com.example.projectv1.fragment;

import com.example.projectv1.R;
import com.example.projectv1.base.BaseFragment;

public class TrendingFragment extends BaseFragment {
    @Override
    protected int getLayoutResource() {
        return R.layout.fragment_trending;
    }

    @Override
    public String getTitle() {
        return "Trending";
    }
}
