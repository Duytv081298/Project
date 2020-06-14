package com.example.projectv1;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;

import android.os.Bundle;

import com.example.projectv1.fragment.LibraryFragment;
import com.example.projectv1.fragment.MainFragment;

public class MainActivity extends AppCompatActivity {

    private MainFragment fmMain = new MainFragment();
    private LibraryFragment fmLibrary = new LibraryFragment();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initFragment();
        showFragment(fmMain);
    }

    private void initFragment() {
        FragmentTransaction transaction = getSupportFragmentManager().beginTransaction();
        transaction.add(R.id.container , fmMain);
        transaction.add(R.id.container , fmLibrary);
        transaction.commit();
    }
    public void showFragment (Fragment fmshow){
        FragmentTransaction transaction = getSupportFragmentManager().beginTransaction();
        transaction.setCustomAnimations(android.R.anim.slide_in_left, android.R.anim.slide_out_right);
        transaction.hide(fmMain);
        transaction.hide(fmLibrary);
        transaction.show(fmshow);
        transaction.commit();
    }

    public MainFragment getFmMain() {
        return fmMain;
    }

    public LibraryFragment getFmLibrary() {
        return fmLibrary;
    }
}
