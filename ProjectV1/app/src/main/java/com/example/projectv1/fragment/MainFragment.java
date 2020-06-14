package com.example.projectv1.fragment;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.FragmentActivity;
import androidx.viewpager.widget.ViewPager;

import com.example.projectv1.MainActivity;
import com.example.projectv1.R;
import com.example.projectv1.adapter.MilaAdapter;
import com.example.projectv1.base.BaseFragment;
import com.google.android.material.tabs.TabLayout;

public class MainFragment extends BaseFragment implements View.OnClickListener {
    private Button btnNtLichSu;

    private ViewPager pager;
    private TabLayout tabLayout;
    private MilaAdapter adapter;

    private FragmentActivity myContext;

    private int[] tabIcons = {
            R.drawable.home_ic,
            R.drawable.trending_ic,
            R.drawable.library_ic,
    };
    private HomeFragment fmHome = new HomeFragment();
    private LibraryFragment fmLibrary = new LibraryFragment();
    private TrendingFragment fmTrending = new TrendingFragment();

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_main, container, false);
    }

    @Override
    protected int getLayoutResource() {
        return 0;
    }

    @Override
    public String getTitle() {
        return null;
    }

    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
        btnNtLichSu = getActivity().findViewById(R.id.btnNtlichsu);

        btnNtLichSu.setOnClickListener(this);
        getContext();
        getActivity();
        initViews();
    }

    private void initViews() {
        pager = getActivity().findViewById(R.id.pager);
        tabLayout = getActivity().findViewById(R.id.tab);
        adapter = new MilaAdapter(
                getActivity().getSupportFragmentManager(),
                fmHome, fmTrending, fmLibrary
        );
        pager.setAdapter(adapter);
        tabLayout.setupWithViewPager(pager);
        setupTabIcons();
    }

    private void setupTabIcons() {
        tabLayout.getTabAt(0).setIcon(tabIcons[0]);
        tabLayout.getTabAt(1).setIcon(tabIcons[1]);
        tabLayout.getTabAt(2).setIcon(tabIcons[2]);
    }


    @Override
    public void onClick(View v) {
        switch (v.getId()) {

            case R.id.btnNtlichsu:
                MainActivity act = (MainActivity) getActivity();
                act.showFragment(act.getFmLibrary());
                break;
        }
    }
}
