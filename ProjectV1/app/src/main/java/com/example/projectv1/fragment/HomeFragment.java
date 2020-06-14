package com.example.projectv1.fragment;


import com.example.projectv1.R;
import com.example.projectv1.base.BaseFragment;

public class HomeFragment extends BaseFragment {
    @Override
    protected int getLayoutResource() {
        return R.layout.fragment_home;
    }

    @Override
    public String getTitle() {
        return "Home";
    }
}
